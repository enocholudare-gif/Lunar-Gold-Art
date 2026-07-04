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
    <footer className="bg-[#050505] border-t border-[#1F1F1F] text-[#9A9A9A] pt-16 pb-12 font-body relative overflow-hidden">
      {/* Decorative Gold Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#E2BE6A]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-[#1F1F1F]">
          {/* Col 1 & 2: Brand Overview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-[#E2BE6A]/50 flex items-center justify-center p-1 shadow-md">
                <LogoMark showGlow className="w-full h-full" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-[#F8F7F3] block leading-none">
                  LUNAR GOLD ART
                </span>
                <span className="text-[10px] text-[#E2BE6A] uppercase tracking-widest block mt-1 font-semibold">
                  {BRAND.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#9A9A9A] leading-relaxed max-w-md">
              A multidisciplinary creative organization that blends art, culture, innovation, and technology to create meaningful experiences and lasting impact.
            </p>

            {/* Newsletter Form */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-[#F8F7F3] mb-2 uppercase tracking-wider">
                Subscribe to Curatorial Journal
              </p>
              {subscribed ? (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#E2BE6A]/10 text-[#E2BE6A] border border-[#E2BE6A]/30 rounded-xl text-xs font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>Subscribed to Lunar Gold Gazette.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex items-center max-w-sm gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#9A9A9A]" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-9 pr-3 py-2.5 bg-[#141414] border border-[#333333] rounded-xl text-xs text-[#F8F7F3] placeholder-[#9A9A9A] focus:border-[#E2BE6A] focus:outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#E2BE6A] to-[#C9A14A] text-[#050505] font-semibold text-xs hover:brightness-110 transition-all flex items-center justify-center"
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
            <h4 className="text-xs font-bold text-[#F8F7F3] uppercase tracking-wider mb-4 font-heading">
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
                    className="hover:text-[#E2BE6A] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Divisions & Kenziya Afrika */}
          <div>
            <h4 className="text-xs font-bold text-[#F8F7F3] uppercase tracking-wider mb-4 font-heading">
              Creative Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://kenziyaafrika.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E2BE6A] font-medium hover:underline flex items-center gap-1.5"
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
                  className="hover:text-[#E2BE6A] transition-colors"
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
                  className="hover:text-[#E2BE6A] transition-colors"
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
                  className="hover:text-[#E2BE6A] transition-colors"
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
                  className="hover:text-[#E2BE6A] transition-colors"
                >
                  Gold Edition Press
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Global Hubs */}
          <div>
            <h4 className="text-xs font-bold text-[#F8F7F3] uppercase tracking-wider mb-4 font-heading">
              Global Hubs
            </h4>
            <div className="space-y-3 text-xs">
              {BRAND.locations.map((loc) => (
                <div key={loc.city} className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#E2BE6A] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#F8F7F3] font-medium">{loc.city}, {loc.country}</div>
                    <div className="text-[11px] text-[#9A9A9A]">{loc.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Lunar Gold Art. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenInquiry}
              className="text-[#E2BE6A] font-medium hover:underline"
            >
              Propose Project
            </button>
            <span className="text-[#333333]">|</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#141414] hover:bg-[#E2BE6A] text-[#9A9A9A] hover:text-[#050505] transition-all border border-[#222222]"
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
