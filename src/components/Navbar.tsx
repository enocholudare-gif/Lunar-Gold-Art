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
            ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#222222] py-3.5 shadow-2xl'
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
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-[#0A0A0A] border border-[#E2BE6A]/50 flex items-center justify-center group-hover:border-[#E2BE6A] transition-all p-1 shadow-md">
              <LogoMark showGlow className="w-full h-full" />
            </div>

            <div>
              <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-[#F8F7F3] group-hover:text-[#E2BE6A] transition-colors block leading-none">
                LUNAR GOLD ART
              </span>
              <span className="text-[10px] text-[#9A9A9A] font-body uppercase tracking-wider hidden sm:block mt-0.5">
                Clustering Illusions.
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#141414]/80 p-1.5 rounded-full border border-[#222222] backdrop-blur-md">
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
                      ? 'text-[#050505] font-semibold'
                      : 'text-[#9A9A9A] hover:text-[#F8F7F3]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-[#E2BE6A] to-[#C9A14A] rounded-full shadow-md"
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
              className="p-2.5 rounded-full bg-[#141414] text-[#9A9A9A] hover:text-[#E2BE6A] hover:bg-[#1A1A1A] border border-[#222222] transition-all flex items-center gap-2 text-xs"
              title="Search (Cmd + K)"
            >
              <Search className="w-4 h-4 text-[#E2BE6A]" />
              <span className="hidden lg:inline text-[11px] text-[#9A9A9A]">Search</span>
              <kbd className="hidden lg:inline px-1.5 py-0.5 text-[9px] bg-[#050505] text-[#9A9A9A] rounded border border-[#333333]">⌘K</kbd>
            </button>

            {/* Inquire CTA Button */}
            <button
              onClick={onOpenInquiry}
              className="py-2.5 px-5 rounded-full bg-gradient-to-r from-[#E2BE6A] to-[#C9A14A] text-[#050505] font-semibold text-xs hover:brightness-110 transition-all shadow-md flex items-center gap-1.5 group"
            >
              <Mail className="w-3.5 h-3.5 text-[#050505]" />
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenCommandK}
              className="p-2 rounded-full bg-[#141414] text-[#E2BE6A] border border-[#222222]"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-[#141414] text-[#F8F7F3] border border-[#222222]"
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
            className="fixed inset-x-0 top-[68px] z-30 bg-[#050505]/95 backdrop-blur-xl border-b border-[#222222] p-6 md:hidden shadow-2xl"
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
                        ? 'bg-[#141414] text-[#E2BE6A] border border-[#E2BE6A]/30'
                        : 'text-[#F8F7F3]/80 hover:bg-[#141414] hover:text-[#F8F7F3]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-[#E2BE6A]" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#222222] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#E2BE6A] to-[#C9A14A] text-[#050505] font-semibold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Mail className="w-4 h-4" />
                <span>Initiate Proposal</span>
              </button>

              <div className="text-center text-[11px] text-[#9A9A9A] pt-2">
                Clustering Illusions. Inspiring Development.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
