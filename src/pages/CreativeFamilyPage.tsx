import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Globe, ExternalLink, Sparkles, Cpu, Frame, BookOpen, Layers, ArrowRight } from 'lucide-react';
import { PageType } from '../types';
import { CREATIVE_FAMILY } from '../data/content';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface CreativeFamilyPageProps {
  onNavigate: (page: PageType) => void;
  onOpenInquiry: (context?: string) => void;
}

export const CreativeFamilyPage: React.FC<CreativeFamilyPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [selectedDivisionId, setSelectedDivisionId] = useState<string>('kenziya-afrika');

  const selectedDivision = CREATIVE_FAMILY.find(d => d.id === selectedDivisionId) || CREATIVE_FAMILY[0];

  return (
    <div className="pt-24 space-y-24 sm:space-y-32 pb-24">
      {/* ================================================= */}
      {/* HERO                                              */}
      {/* ================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#E2BE6A]/30 text-xs text-[#E2BE6A] font-semibold uppercase tracking-wider"
        >
          <Users className="w-3.5 h-3.5 text-[#E2BE6A]" />
          <span>The Interconnected Ecosystem</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold font-heading text-[#F8F7F3] max-w-4xl mx-auto leading-tight"
        >
          Our Creative Family & Independent Initiatives.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-[#9A9A9A] max-w-3xl mx-auto font-body leading-relaxed"
        >
          Lunar Gold Art is home to several specialized creative initiatives. Each maintains its distinct cultural identity while sharing one overarching vision for innovation and global impact.
        </motion.p>
      </section>

      {/* ================================================= */}
      {/* FEATURED FLAGSHIP: KENZIYA AFRIKA                 */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141414] border border-[#E2BE6A]/40 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl gold-border-glow relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E2BE6A]/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2BE6A]/10 text-[#E2BE6A] border border-[#E2BE6A]/30 text-xs font-semibold">
                <Globe className="w-3.5 h-3.5" />
                <span>Flagship African Initiative</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F8F7F3] font-heading">
                Kenziya Afrika
              </h2>

              <p className="text-base text-[#E2BE6A] font-semibold font-heading">
                Celebrating Extraordinary African Artistic Excellence
              </p>

              <p className="text-sm text-[#9A9A9A] leading-relaxed font-body">
                Recognized through <a href="https://kenziyaafrika.com" target="_blank" rel="noopener noreferrer" className="text-[#E2BE6A] underline font-semibold">kenziyaafrika.com</a> for its exceptional celebration of African creativity, contemporary fine art, and cultural heritage, Kenziya Afrika elevates visionary African masters and emerging talents to global acclaim.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {CREATIVE_FAMILY[0].highlights.map((h) => (
                  <div key={h} className="p-3 rounded-xl bg-[#050505] border border-[#222222] text-xs text-[#F8F7F3] font-medium flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#E2BE6A]" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://kenziyaafrika.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-7 rounded-full bg-gradient-to-r from-[#E2BE6A] to-[#C9A14A] text-[#050505] font-semibold text-xs hover:brightness-110 transition-all shadow-xl flex items-center gap-2"
                >
                  <span>Visit kenziyaafrika.com</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onOpenInquiry('Kenziya Afrika Partnership')}
                  className="py-3.5 px-7 rounded-full bg-[#050505] hover:bg-[#1A1A1A] text-[#F8F7F3] font-semibold text-xs border border-[#333333] transition-all"
                >
                  Propose Kenziya Afrika Exhibition
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#050505] border border-[#E2BE6A]/30 p-2 shadow-2xl">
                <ImageWithFallback
                  src={CREATIVE_FAMILY[0].image}
                  alt="Kenziya Afrika Fine Art Gallery"
                  className="w-full h-full object-cover rounded-xl"
                  containerClassName="w-full h-full rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#050505]/85 backdrop-blur-md border border-[#222222] text-xs text-[#E2BE6A] font-semibold">
                  Dedicated African Fine Art Curation & Global Placement
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* ALL DIVISIONS GRID                                */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#E2BE6A] uppercase tracking-wider font-heading">
            Ecosystem Structure
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#F8F7F3]">
            Explore All Divisions
          </h2>
          <p className="text-xs sm:text-sm text-[#9A9A9A] font-body">
            How each initiative connects under Lunar Gold Art while maintaining its own identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CREATIVE_FAMILY.map((division) => (
            <div
              key={division.id}
              className="bg-[#141414] border border-[#222222] hover:border-[#E2BE6A]/40 rounded-2xl overflow-hidden p-6 sm:p-8 space-y-6 flex flex-col justify-between transition-all shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#050505] text-[10px] text-[#E2BE6A] font-semibold border border-[#E2BE6A]/30">
                    {division.category}
                  </span>
                  {division.website && (
                    <a
                      href={division.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#E2BE6A] hover:underline font-semibold flex items-center gap-1"
                    >
                      <span>{division.website.replace('https://', '')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#050505]">
                  <ImageWithFallback
                    src={division.image}
                    alt={division.name}
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#F8F7F3] font-heading">
                    {division.name}
                  </h3>
                  <div className="text-xs text-[#E2BE6A] font-medium mt-1">
                    {division.tagline}
                  </div>
                  <p className="text-xs text-[#9A9A9A] leading-relaxed font-body mt-2">
                    {division.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-semibold text-[#F8F7F3] uppercase tracking-wider">
                    Core Focus Highlights:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9A9A9A]">
                    {division.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E2BE6A]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#222222]">
                <button
                  onClick={() => onOpenInquiry(`Division Inquiry: ${division.name}`)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#050505] hover:bg-[#1C1C1C] text-[#F8F7F3] hover:text-[#E2BE6A] font-semibold text-xs border border-[#333333] transition-all flex items-center justify-center gap-2"
                >
                  <span>Connect With {division.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================= */}
      {/* ARCHITECTURAL CONNECTION DIAGRAM                  */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141414] border border-[#E2BE6A]/30 rounded-3xl p-8 sm:p-12 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#E2BE6A] uppercase tracking-wider font-heading">
              Ecosystem Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#F8F7F3]">
              The Lunar Gold Art Nexus
            </h2>
            <p className="text-xs sm:text-sm text-[#9A9A9A] font-body leading-relaxed">
              Every initiative receives curatorial oversight, technology access from Lunar Tech Labs, and financial stewardship from the parent organization.
            </p>
          </div>

          <div className="p-6 bg-[#050505] rounded-2xl border border-[#222222] inline-block text-center space-y-2">
            <div className="text-lg font-bold text-[#E2BE6A] font-heading">LUNAR GOLD ART (Parent Institution)</div>
            <div className="text-xs text-[#9A9A9A]">Shared Vision • Curation Standards • Resource Allocation • Global Reach</div>
          </div>
        </div>
      </section>
    </div>
  );
};
