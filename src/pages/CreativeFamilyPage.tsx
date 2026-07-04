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
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C59B27]/40 text-xs text-[#A88118] font-bold uppercase tracking-wider shadow-xs"
        >
          <Users className="w-3.5 h-3.5 text-[#A88118]" />
          <span>The Interconnected Ecosystem</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold font-heading text-[#1A1815] max-w-4xl mx-auto leading-tight"
        >
          Our Creative Family & Independent Initiatives.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-[#5C564E] max-w-3xl mx-auto font-body leading-relaxed"
        >
          Lunar Gold Art is home to several specialized creative initiatives. Each maintains its distinct cultural identity while sharing one overarching vision for innovation and global impact.
        </motion.p>
      </section>

      {/* ================================================= */}
      {/* FEATURED FLAGSHIP: KENZIYA AFRIKA                 */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#EFECE6] via-white to-[#EFECE6] border border-[#C59B27]/40 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl gold-border-glow relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59B27]/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 text-[#A88118] border border-[#C59B27]/40 text-xs font-bold shadow-xs">
                <Globe className="w-3.5 h-3.5 text-[#A88118]" />
                <span>Flagship African Initiative</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1A1815] font-heading">
                Kenziya Afrika
              </h2>

              <p className="text-base text-[#A88118] font-bold font-heading">
                Celebrating Extraordinary African Artistic Excellence
              </p>

              <p className="text-sm text-[#5C564E] leading-relaxed font-body">
                Recognized through <a href="https://kenziyaafrika.com" target="_blank" rel="noopener noreferrer" className="text-[#A88118] underline font-bold">kenziyaafrika.com</a> for its exceptional celebration of African creativity, contemporary fine art, and cultural heritage, Kenziya Afrika elevates visionary African masters and emerging talents to global acclaim.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {CREATIVE_FAMILY[0].highlights.map((h) => (
                  <div key={h} className="p-3 rounded-xl bg-white border border-[#DCD6CB] text-xs text-[#1A1815] font-medium flex items-center gap-2 shadow-xs">
                    <div className="w-2 h-2 rounded-full bg-[#C59B27]" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://kenziyaafrika.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-7 rounded-full bg-gradient-to-r from-[#C59B27] to-[#A88118] text-white font-semibold text-xs hover:brightness-110 transition-all shadow-xl flex items-center gap-2"
                >
                  <span>Visit kenziyaafrika.com</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onOpenInquiry('Kenziya Afrika Partnership')}
                  className="py-3.5 px-7 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1A1815] font-semibold text-xs border border-[#DCD6CB] hover:border-[#C59B27] transition-all shadow-sm"
                >
                  Propose Kenziya Afrika Exhibition
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#EFECE6] border border-[#C59B27]/40 p-2 shadow-xl">
                <ImageWithFallback
                  src={CREATIVE_FAMILY[0].image}
                  alt="Kenziya Afrika Fine Art Gallery"
                  className="w-full h-full object-cover rounded-xl"
                  containerClassName="w-full h-full rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1815]/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#DCD6CB] text-xs text-[#A88118] font-bold shadow-sm">
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
          <span className="text-xs font-bold text-[#A88118] uppercase tracking-wider font-heading">
            Ecosystem Structure
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#1A1815]">
            Explore All Divisions
          </h2>
          <p className="text-xs sm:text-sm text-[#5C564E] font-body">
            How each initiative connects under Lunar Gold Art while maintaining its own identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CREATIVE_FAMILY.map((division) => (
            <div
              key={division.id}
              className="bg-white border border-[#DCD6CB] hover:border-[#C59B27] rounded-2xl overflow-hidden p-6 sm:p-8 space-y-6 flex flex-col justify-between transition-all shadow-md hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#FAF8F5] text-[10px] text-[#A88118] font-bold border border-[#C59B27]/30">
                    {division.category}
                  </span>
                  {division.website && (
                    <a
                      href={division.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#A88118] hover:underline font-bold flex items-center gap-1"
                    >
                      <span>{division.website.replace('https://', '')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#EFECE6]">
                  <ImageWithFallback
                    src={division.image}
                    alt={division.name}
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1A1815] font-heading">
                    {division.name}
                  </h3>
                  <div className="text-xs text-[#A88118] font-bold mt-1">
                    {division.tagline}
                  </div>
                  <p className="text-xs text-[#5C564E] leading-relaxed font-body mt-2">
                    {division.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-bold text-[#1A1815] uppercase tracking-wider">
                    Core Focus Highlights:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5C564E]">
                    {division.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DCD6CB]">
                <button
                  onClick={() => onOpenInquiry(`Division Inquiry: ${division.name}`)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#FAF8F5] hover:bg-white text-[#1A1815] hover:text-[#A88118] font-bold text-xs border border-[#DCD6CB] hover:border-[#C59B27] transition-all flex items-center justify-center gap-2 shadow-xs"
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
        <div className="bg-white border border-[#C59B27]/40 rounded-3xl p-8 sm:p-12 text-center space-y-8 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#A88118] uppercase tracking-wider font-heading">
              Ecosystem Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#1A1815]">
              The Lunar Gold Art Nexus
            </h2>
            <p className="text-xs sm:text-sm text-[#5C564E] font-body leading-relaxed">
              Every initiative receives curatorial oversight, technology access from Lunar Tech Labs, and financial stewardship from the parent organization.
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#DCD6CB] inline-block text-center space-y-2 shadow-sm">
            <div className="text-lg font-bold text-[#A88118] font-heading">LUNAR GOLD ART (Parent Institution)</div>
            <div className="text-xs text-[#5C564E] font-medium">Shared Vision • Curation Standards • Resource Allocation • Global Reach</div>
          </div>
        </div>
      </section>
    </div>
  );
};
