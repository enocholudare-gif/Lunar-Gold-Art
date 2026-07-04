import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Palette, MapPin, Calendar, Layers, ArrowRight, Maximize2 } from 'lucide-react';
import { ArtItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface ArtworkModalProps {
  artwork: ArtItem | null;
  onClose: () => void;
  onInquire: (artworkTitle: string) => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, onClose, onInquire }) => {
  if (!artwork) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#1A1815]/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-white border border-[#C59B27]/40 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-[#1A1815] hover:text-[#A88118] hover:bg-white transition-all border border-[#DCD6CB] shadow-md"
            aria-label="Close artwork view"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Artwork Image Container */}
          <div className="w-full md:w-3/5 bg-[#EFECE6] relative flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px]">
            <ImageWithFallback
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-full object-cover max-h-[60vh] md:max-h-none"
              containerClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:hidden pointer-events-none" />
          </div>

          {/* Artwork Details Content */}
          <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-white">
            <div>
              {/* Category Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C59B27]/15 text-[#A88118] border border-[#C59B27]/30 text-xs font-semibold mb-4">
                <Palette className="w-3.5 h-3.5" />
                <span>{artwork.category}</span>
              </div>

              {/* Title & Artist */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A1815] font-heading mb-1">
                {artwork.title}
              </h3>
              {artwork.artist && (
                <p className="text-base text-[#A88118] font-medium mb-4">
                  By {artwork.artist}
                </p>
              )}

              <p className="text-sm text-[#5C564E] leading-relaxed mb-6 font-body">
                {artwork.description}
              </p>

              {/* Specs Grid */}
              <div className="space-y-3 pt-4 border-t border-[#DCD6CB] text-xs text-[#5C564E]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[#5C564E]">
                    <Layers className="w-4 h-4 text-[#A88118]" />
                    Medium
                  </span>
                  <span className="text-[#1A1815] font-medium text-right">{artwork.medium}</span>
                </div>

                {artwork.dimensions && (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[#5C564E]">
                      <Maximize2 className="w-4 h-4 text-[#A88118]" />
                      Dimensions
                    </span>
                    <span className="text-[#1A1815] font-medium">{artwork.dimensions}</span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[#5C564E]">
                    <Calendar className="w-4 h-4 text-[#A88118]" />
                    Year
                  </span>
                  <span className="text-[#1A1815] font-medium">{artwork.year}</span>
                </div>

                {artwork.location && (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[#5C564E]">
                      <MapPin className="w-4 h-4 text-[#A88118]" />
                      Location
                    </span>
                    <span className="text-[#A88118] font-semibold">{artwork.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-6 mt-6 border-t border-[#DCD6CB]">
              <button
                onClick={() => {
                  onClose();
                  onInquire(`Artwork: ${artwork.title}`);
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C59B27] to-[#A88118] text-white font-semibold text-sm hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Inquire About This Piece</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
