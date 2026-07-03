import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageType, ArtItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ArtworkModal } from './components/ArtworkModal';
import { InquiryModal } from './components/InquiryModal';
import { CommandPalette } from './components/CommandPalette';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CreativeFamilyPage } from './pages/CreativeFamilyPage';
import { ContactPage } from './pages/ContactPage';

import { ARTWORKS } from './data/content';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedArtwork, setSelectedArtwork] = useState<ArtItem | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryContext, setInquiryContext] = useState<string | undefined>(undefined);
  const [commandKOpen, setCommandKOpen] = useState(false);

  // Sync scroll position on page transition
  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (context?: string) => {
    setInquiryContext(context);
    setInquiryModalOpen(true);
  };

  const handleSelectArtwork = (art: ArtItem) => {
    setSelectedArtwork(art);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F8F7F3] flex flex-col font-body selection:bg-[#E2BE6A] selection:text-[#050505]">
      {/* Sticky Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenCommandK={() => setCommandKOpen(true)}
      />

      {/* Main Content View with Motion Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onOpenInquiry={handleOpenInquiry}
                onSelectArtwork={handleSelectArtwork}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
                onOpenInquiry={handleOpenInquiry}
              />
            )}

            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={handleNavigate}
                onOpenInquiry={handleOpenInquiry}
              />
            )}

            {currentPage === 'family' && (
              <CreativeFamilyPage
                onNavigate={handleNavigate}
                onOpenInquiry={handleOpenInquiry}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage
                onNavigate={handleNavigate}
                onOpenInquiry={handleOpenInquiry}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Artwork Lightbox Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        onInquire={(title) => handleOpenInquiry(title)}
      />

      {/* Institutional Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialContext={inquiryContext}
      />

      {/* Command K Search Palette */}
      <CommandPalette
        isOpen={commandKOpen}
        onClose={() => setCommandKOpen(false)}
        onNavigatePage={handleNavigate}
        onSelectArtwork={(artId) => {
          const art = ARTWORKS.find((a: ArtItem) => a.id === artId);
          if (art) setSelectedArtwork(art);
        }}
      />
    </div>
  );
}
