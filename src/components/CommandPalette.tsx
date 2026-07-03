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
          className="fixed inset-0 bg-[#050505]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-2xl bg-[#141414] border border-[#E2BE6A]/30 rounded-2xl shadow-2xl z-10 overflow-hidden flex flex-col max-h-[80vh]"
        >
          {/* Input Header */}
          <div className="p-4 border-b border-[#222222] flex items-center gap-3">
            <Search className="w-5 h-5 text-[#E2BE6A]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, Kenziya Afrika, divisions, artworks..."
              className="w-full bg-transparent text-[#F8F7F3] placeholder-[#9A9A9A] text-sm sm:text-base focus:outline-none font-body"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-[#9A9A9A] hover:text-[#F8F7F3] hover:bg-[#222222] transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results Container */}
          <div className="p-4 overflow-y-auto space-y-6">
            {/* Direct Navigation */}
            <div>
              <p className="text-[10px] font-semibold text-[#E2BE6A] uppercase tracking-wider mb-2">
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
                    className="p-2.5 rounded-xl bg-[#050505] border border-[#222222] hover:border-[#E2BE6A]/50 text-[#F8F7F3] hover:text-[#E2BE6A] text-xs font-medium transition-all flex items-center justify-center gap-1.5"
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
                <p className="text-[10px] font-semibold text-[#9A9A9A] uppercase tracking-wider mb-2">
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
                      className="w-full p-2.5 rounded-xl bg-[#050505]/60 hover:bg-[#222222] border border-transparent hover:border-[#E2BE6A]/30 text-left transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-xs font-medium text-[#F8F7F3] group-hover:text-[#E2BE6A] transition-colors">
                          {service.title}
                        </div>
                        <div className="text-[11px] text-[#9A9A9A] line-clamp-1">
                          {service.tagline}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#9A9A9A] group-hover:text-[#E2BE6A] group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Divisions Results */}
            {filteredFamily.length > 0 && (
              <div>
                <p className="text-[10px] font-semibold text-[#9A9A9A] uppercase tracking-wider mb-2">
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
                      className="w-full p-2.5 rounded-xl bg-[#050505]/60 hover:bg-[#222222] border border-transparent hover:border-[#E2BE6A]/30 text-left transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-xs font-medium text-[#F8F7F3] group-hover:text-[#E2BE6A] transition-colors flex items-center gap-2">
                          <span>{div.name}</span>
                          {div.id === 'kenziya-afrika' && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#E2BE6A]/20 text-[#E2BE6A] font-semibold">
                              kenziyaafrika.com
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#9A9A9A]">
                          {div.tagline}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#9A9A9A] group-hover:text-[#E2BE6A] group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Artworks Results */}
            {filteredArtworks.length > 0 && (
              <div>
                <p className="text-[10px] font-semibold text-[#9A9A9A] uppercase tracking-wider mb-2">
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
                      className="p-2 rounded-xl bg-[#050505]/60 hover:bg-[#222222] border border-transparent hover:border-[#E2BE6A]/30 text-left transition-all flex items-center gap-2.5 group"
                    >
                      <ImageWithFallback
                        src={art.image}
                        alt={art.title}
                        className="w-10 h-10 rounded-lg object-cover shrink-0"
                        containerClassName="w-10 h-10 rounded-lg shrink-0"
                      />
                      <div className="overflow-hidden">
                        <div className="text-xs font-medium text-[#F8F7F3] group-hover:text-[#E2BE6A] truncate">
                          {art.title}
                        </div>
                        <div className="text-[10px] text-[#9A9A9A] truncate">
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
          <div className="p-3 border-t border-[#222222] bg-[#050505] flex items-center justify-between text-[11px] text-[#9A9A9A]">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-[#141414] text-[#F8F7F3] text-[10px]">ESC</kbd> to exit</span>
            <span className="text-[#E2BE6A]">Lunar Gold Art Global Curation</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
