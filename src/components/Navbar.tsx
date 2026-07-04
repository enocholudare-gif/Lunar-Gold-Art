import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, Mail, ArrowUpRight } from 'lucide-react';
import { PageType } from '../types';
import { BRAND } from '../data/content';
import { LogoMark } from './LogoMark';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenInquiry: () => void;
  onOpenCommandK: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenInquiry,
  onOpenCommandK,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Creative Family', page: 'family' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E2DCD2] py-3.5 shadow-md'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group text-left focus:outline-none"
            aria-label="Lunar Gold Art Homepage"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-[#EFECE6] border border-[#C59B27]/50 flex items-center justify-center group-hover:border-[#C59B27] transition-all p-1 shadow-md">
              <LogoMark showGlow className="w-full h-full" />
            </div>

            <div>
              <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-[#1A1815] group-hover:text-[#A88118] transition-colors block leading-none">
                LUNAR GOLD ART
              </span>
              <span className="text-[10px] text-[#5C564E] font-body uppercase tracking-wider hidden sm:block mt-0.5">
                Clustering Illusions.
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#EFECE6]/90 p-1.5 rounded-full border border-[#DCD6CB] backdrop-blur-md shadow-sm">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#5C564E] hover:text-[#1A1815]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-[#C59B27] to-[#A88118] rounded-full shadow-md"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Command K Search Button */}
            <button
              onClick={onOpenCommandK}
              className="p-2.5 rounded-full bg-[#EFECE6] text-[#5C564E] hover:text-[#A88118] hover:bg-[#E5E1D8] border border-[#DCD6CB] transition-all flex items-center gap-2 text-xs"
              title="Search (Cmd + K)"
            >
              <Search className="w-4 h-4 text-[#A88118]" />
              <span className="hidden lg:inline text-[11px] text-[#5C564E]">Search</span>
              <kbd className="hidden lg:inline px-1.5 py-0.5 text-[9px] bg-[#FAF8F5] text-[#5C564E] rounded border border-[#DCD6CB]">⌘K</kbd>
            </button>

            {/* Inquire CTA Button */}
            <button
              onClick={onOpenInquiry}
              className="py-2.5 px-5 rounded-full bg-gradient-to-r from-[#C59B27] to-[#A88118] text-white font-semibold text-xs hover:brightness-110 transition-all shadow-md flex items-center gap-1.5 group"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenCommandK}
              className="p-2 rounded-full bg-[#EFECE6] text-[#A88118] border border-[#DCD6CB]"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-[#EFECE6] text-[#1A1815] border border-[#DCD6CB]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-30 bg-[#F5F3EE]/95 backdrop-blur-xl border-b border-[#DCD6CB] p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-3 mb-6">
              {navItems.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    onClick={() => {
                      onNavigate(item.page);
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`p-3 rounded-xl text-left font-heading text-base font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#EFECE6] text-[#A88118] border border-[#C59B27]/40'
                        : 'text-[#5C564E] hover:bg-[#EFECE6] hover:text-[#1A1815]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-[#C59B27]" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#DCD6CB] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C59B27] to-[#A88118] text-white font-semibold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Mail className="w-4 h-4" />
                <span>Initiate Proposal</span>
              </button>

              <div className="text-center text-[11px] text-[#5C564E] pt-2">
                Clustering Illusions. Inspiring Development.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
