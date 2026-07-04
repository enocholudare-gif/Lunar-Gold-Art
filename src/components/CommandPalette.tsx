import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, Sparkles, Layout, Grid, Users, HelpCircle } from 'lucide-react';
import { PageType } from '../types';
import { SERVICES, CREATIVE_FAMILY, ARTWORKS } from '../data/content';
import { ImageWithFallback } from './ImageWithFallback';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigatePage: (page: PageType) => void;
  onSelectArtwork: (artworkId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigatePage,
  onSelectArtwork,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredServices = SERVICES.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.category.toLowerCase().includes(query.toLowerCase()) ||
    s.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredFamily = CREATIVE_FAMILY.filter(f =>
    f.name.toLowerCase().includes(query.toLowerCase()) ||
    f.tagline.toLowerCase().includes(query.toLowerCase()) ||
    f.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredArtworks = ARTWORKS.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase()) ||
    (a.artist && a.artist.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1815]/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-2xl bg-white border border-[#C59B27]/40 rounded-2xl shadow-2xl z-10 overflow-hidden flex flex-col max-h-[80vh]"
        >
          {/* Input Header */}
          <div className="p-4 border-b border-[#DCD6CB] flex items-center gap-3">
            <Search className="w-5 h-5 text-[#A88118]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, Kenziya Afrika, divisions, artworks..."
              className="w-full bg-transparent text-[#1A1815] placeholder-[#888075] text-sm sm:text-base focus:outline-none font-body"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-[#5C564E] hover:text-[#1A1815] hover:bg-[#EFECE6] transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results Container */}
          <div className="p-4 overflow-y-auto space-y-6">
            {/* Direct Navigation */}
            <div>
              <p className="text-[10px] font-semibold text-[#A88118] uppercase tracking-wider mb-2">
                Quick Navigation
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {[
                  { label: 'Home', page: 'home' as PageType, icon: Layout },
                  { label: 'About', page: 'about' as PageType, icon: Sparkles },
                  { label: 'Services', page: 'services' as PageType, icon: Grid },
                  { label: 'Family', page: 'family' as PageType, icon: Users },
                  { label: 'Contact', page: 'contact' as PageType, icon: HelpCircle },
                ].map((item) => (
                  <button
                    key={item.page}
                    onClick={() => {
                      onNavigatePage(item.page);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#DCD6CB] hover:border-[#C59B27] text-[#1A1815] hover:text-[#A88118] text-xs font-medium transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Services Results */}
            {filteredServices.length > 0 && (
              <div>
                <p className="text-[10px] font-semibold text-[#5C564E] uppercase tracking-wider mb-2">
                  Creative Services ({filteredServices.length})
                </p>
                <div className="space-y-1.5">
                  {filteredServices.slice(0, 4).map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        onNavigatePage('services');
                        onClose();
                      }}
                      className="w-full p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#EFECE6] border border-[#DCD6CB]/60 hover:border-[#C59B27]/50 text-left transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-xs font-semibold text-[#1A1815] group-hover:text-[#A88118] transition-colors">
                          {service.title}
                        </div>
                        <div className="text-[11px] text-[#5C564E] line-clamp-1">
                          {service.tagline}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#78716C] group-hover:text-[#A88118] group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Divisions Results */}
            {filteredFamily.length > 0 && (
              <div>
                <p className="text-[10px] font-semibold text-[#5C564E] uppercase tracking-wider mb-2">
                  Ecosystem Divisions ({filteredFamily.length})
                </p>
                <div className="space-y-1.5">
                  {filteredFamily.map((div) => (
                    <button
                      key={div.id}
                      onClick={() => {
                        onNavigatePage('family');
                        onClose();
                      }}
                      className="w-full p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#EFECE6] border border-[#DCD6CB]/60 hover:border-[#C59B27]/50 text-left transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-xs font-semibold text-[#1A1815] group-hover:text-[#A88118] transition-colors flex items-center gap-2">
                          <span>{div.name}</span>
                          {div.id === 'kenziya-afrika' && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#C59B27]/20 text-[#8C6A10] font-semibold">
                              kenziyaafrika.com
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#5C564E]">
                          {div.tagline}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#78716C] group-hover:text-[#A88118] group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Artworks Results */}
            {filteredArtworks.length > 0 && (
              <div>
                <p className="text-[10px] font-semibold text-[#5C564E] uppercase tracking-wider mb-2">
                  Curated Artworks ({filteredArtworks.length})
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {filteredArtworks.slice(0, 4).map((art) => (
                    <button
                      key={art.id}
                      onClick={() => {
                        onSelectArtwork(art.id);
                        onClose();
                      }}
                      className="p-2 rounded-xl bg-[#FAF8F5] hover:bg-[#EFECE6] border border-[#DCD6CB]/60 hover:border-[#C59B27]/50 text-left transition-all flex items-center gap-2.5 group"
                    >
                      <ImageWithFallback
                        src={art.image}
                        alt={art.title}
                        className="w-10 h-10 rounded-lg object-cover shrink-0"
                        containerClassName="w-10 h-10 rounded-lg shrink-0"
                      />
                      <div className="overflow-hidden">
                        <div className="text-xs font-semibold text-[#1A1815] group-hover:text-[#A88118] truncate">
                          {art.title}
                        </div>
                        <div className="text-[10px] text-[#5C564E] truncate">
                          {art.category}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Hint */}
          <div className="p-3 border-t border-[#DCD6CB] bg-[#EFECE6] flex items-center justify-between text-[11px] text-[#5C564E]">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white text-[#1A1815] border border-[#DCD6CB] text-[10px] shadow-xs">ESC</kbd> to exit</span>
            <span className="text-[#A88118] font-semibold">Lunar Gold Art Global Curation</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
