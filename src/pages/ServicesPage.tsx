import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Palette, Check, ArrowRight, Send, SlidersHorizontal, Layers } from 'lucide-react';
import { PageType, ServiceItem } from '../types';
import { SERVICES } from '../data/content';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
  onOpenInquiry: (context?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Fine Art & Expression', 'Strategic Curation', 'Spatial Experiences', 'Visual Documentation', 'Talent Empowerment', 'Curatorial Arts'];

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 space-y-20 sm:space-y-28 pb-24">
      {/* ================================================= */}
      {/* HERO                                              */}
      {/* ================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C59B27]/40 text-xs text-[#A88118] font-bold uppercase tracking-wider shadow-xs"
        >
          <Palette className="w-3.5 h-3.5 text-[#A88118]" />
          <span>Multidisciplinary Capabilities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold font-heading text-[#1A1815] max-w-4xl mx-auto leading-tight"
        >
          Curatorial Excellence & Strategic Creative Solutions.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-[#5C564E] max-w-2xl mx-auto font-body leading-relaxed"
        >
          From fine art canvas commissions and monumental public sculptures to artist development and brand storytelling, we bridge physical and digital creative realms.
        </motion.p>
      </section>

      {/* ================================================= */}
      {/* SEARCH & FILTERS BAR                              */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#DCD6CB] rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
          {/* Search Field */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5C564E]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter services by keyword..."
              className="w-full pl-9 pr-3 py-2 bg-[#FAF8F5] border border-[#DCD6CB] rounded-xl text-xs text-[#1A1815] placeholder-[#5C564E] focus:border-[#C59B27] focus:outline-none transition-all font-body font-medium"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#C59B27] text-white shadow-md'
                    : 'bg-[#FAF8F5] text-[#5C564E] hover:text-[#1A1815] border border-[#DCD6CB]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* SERVICES GRID                                     */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#DCD6CB] shadow-sm">
            <p className="text-sm text-[#5C564E]">No creative services match your filter criteria.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs text-[#A88118] underline font-bold"
            >
              Reset Search Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-[#DCD6CB] hover:border-[#C59B27] rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div className="space-y-4">
                  {/* Image Header */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#EFECE6]">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] text-[#A88118] font-bold border border-[#C59B27]/40 shadow-xs">
                      {service.category}
                    </span>
                  </div>

                  {/* Body Details */}
                  <div className="px-6 space-y-3">
                    <h2 className="text-2xl font-bold text-[#1A1815] group-hover:text-[#A88118] transition-colors font-heading">
                      {service.title}
                    </h2>
                    <p className="text-xs text-[#A88118] font-semibold italic">
                      "{service.tagline}"
                    </p>
                    <p className="text-xs text-[#5C564E] leading-relaxed font-body">
                      {service.description}
                    </p>

                    <div className="pt-2">
                      <div className="text-[11px] font-bold text-[#1A1815] mb-2 uppercase tracking-wider">
                        Key Deliverables:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.deliverables.map((del) => (
                          <div key={del} className="flex items-center gap-2 text-xs text-[#5C564E]">
                            <Check className="w-3.5 h-3.5 text-[#A88118] shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-4 mt-4 border-t border-[#DCD6CB]">
                  <button
                    onClick={() => onOpenInquiry(`Service Inquiry: ${service.title}`)}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#C59B27] to-[#A88118] text-white font-semibold text-xs hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Inquire for {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ================================================= */}
      {/* SERVICE ESTIMATE BUILDER                          */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#EFECE6] via-white to-[#EFECE6] border border-[#C59B27]/40 rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl gold-border-glow">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-[#A88118] uppercase tracking-wider font-heading">
              Bespoke Project Proposal
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#1A1815]">
              Need a Custom Multidisciplinary Package?
            </h2>
            <p className="text-xs sm:text-sm text-[#5C564E] font-body leading-relaxed">
              We frequently combine visual arts, photography, public installation, and digital platforms into cohesive institutional commissions.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onOpenInquiry('Custom Multidisciplinary Package')}
              className="py-3.5 px-8 rounded-full bg-white hover:bg-[#FAF8F5] text-[#A88118] font-bold text-xs border border-[#C59B27] hover:border-[#A88118] transition-all inline-flex items-center gap-2 shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Request Custom Institutional Estimate</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
