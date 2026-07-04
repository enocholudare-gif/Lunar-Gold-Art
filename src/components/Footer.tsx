import React, { useState } from 'react';
import { ArrowUp, Mail, CheckCircle, Send, Globe, MapPin } from 'lucide-react';
import { PageType } from '../types';
import { BRAND } from '../data/content';
import { LogoMark } from './LogoMark';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EFECE6] border-t border-[#DCD6CB] text-[#5C564E] pt-16 pb-12 font-body relative overflow-hidden">
      {/* Decorative Gold Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#C59B27]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-[#DCD6CB]">
          {/* Col 1 & 2: Brand Overview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-[#C59B27]/50 flex items-center justify-center p-1 shadow-md">
                <LogoMark showGlow className="w-full h-full" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-[#1A1815] block leading-none">
                  LUNAR GOLD ART
                </span>
                <span className="text-[10px] text-[#A88118] uppercase tracking-widest block mt-1 font-semibold">
                  {BRAND.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#5C564E] leading-relaxed max-w-md">
              A multidisciplinary creative organization that blends art, culture, innovation, and technology to create meaningful experiences and lasting impact.
            </p>

            {/* Newsletter Form */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-[#1A1815] mb-2 uppercase tracking-wider">
                Subscribe to Curatorial Journal
              </p>
              {subscribed ? (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C59B27]/15 text-[#8C6A10] border border-[#C59B27]/40 rounded-xl text-xs font-medium">
                  <CheckCircle className="w-4 h-4 text-[#A88118]" />
                  <span>Subscribed to Lunar Gold Gazette.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex items-center max-w-sm gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#78716C]" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#DCD6CB] rounded-xl text-xs text-[#1A1815] placeholder-[#888075] focus:border-[#C59B27] focus:outline-none transition-all shadow-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#C59B27] to-[#A88118] text-white font-semibold text-xs hover:brightness-110 transition-all flex items-center justify-center shadow-md"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-[#1A1815] uppercase tracking-wider mb-4 font-heading">
              Institution
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Home', page: 'home' as PageType },
                { label: 'Who We Are', page: 'about' as PageType },
                { label: 'Creative Services', page: 'services' as PageType },
                { label: 'Creative Family', page: 'family' as PageType },
                { label: 'Global Contact', page: 'contact' as PageType },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => {
                      onNavigate(link.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#A88118] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Divisions & Kenziya Afrika */}
          <div>
            <h4 className="text-xs font-bold text-[#1A1815] uppercase tracking-wider mb-4 font-heading">
              Creative Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://kenziyaafrika.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A88118] font-semibold hover:underline flex items-center gap-1.5"
                >
                  <span>Kenziya Afrika</span>
                  <Globe className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('family');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#A88118] transition-colors"
                >
                  Lunar Tech Labs
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('family');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#A88118] transition-colors"
                >
                  Gallery Exhibitions
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('family');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#A88118] transition-colors"
                >
                  Horizon Residency
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('family');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#A88118] transition-colors"
                >
                  Gold Edition Press
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Global Hubs */}
          <div>
            <h4 className="text-xs font-bold text-[#1A1815] uppercase tracking-wider mb-4 font-heading">
              Global Hubs
            </h4>
            <div className="space-y-3 text-xs">
              {BRAND.locations.map((loc) => (
                <div key={loc.city} className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#A88118] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#1A1815] font-semibold">{loc.city}, {loc.country}</div>
                    <div className="text-[11px] text-[#5C564E]">{loc.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Lunar Gold Art. All Rights Reserved.</span>
            <span className="hidden sm:inline text-[#DCD6CB]">|</span>
            <a
              href="https://zamclouds.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C6A10] hover:text-[#C59B27] font-semibold transition-colors hover:underline"
            >
              Powered by Zambia Cloud Programmers
            </a>
          </div>

          {/* Social Media Buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href={BRAND.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1A1815] hover:text-[#A88118] border border-[#DCD6CB] hover:border-[#C59B27] text-xs font-semibold transition-all flex items-center gap-2 shadow-xs"
            >
              <svg className="w-4 h-4 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>

            <a
              href={BRAND.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1A1815] hover:text-[#A88118] border border-[#DCD6CB] hover:border-[#C59B27] text-xs font-semibold transition-all flex items-center gap-2 shadow-xs"
            >
              <svg className="w-4 h-4 fill-current text-[#E4405F]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>

            <a
              href={BRAND.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1A1815] hover:text-[#A88118] border border-[#DCD6CB] hover:border-[#C59B27] text-xs font-semibold transition-all flex items-center gap-2 shadow-xs"
            >
              <svg className="w-4 h-4 fill-current text-[#1A1815]" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 003.05 15.7a6.34 6.34 0 0010.86 4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-2.09-.45 4.81 4.81 0 01-1-.11z"/>
              </svg>
              <span>TikTok</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenInquiry}
              className="text-[#A88118] font-semibold hover:underline"
            >
              Propose Project
            </button>
            <span className="text-[#DCD6CB]">|</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white hover:bg-[#C59B27] text-[#5C564E] hover:text-white transition-all border border-[#DCD6CB] shadow-sm"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
