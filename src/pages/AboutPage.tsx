import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, ShieldCheck, Heart, ArrowRight, Calendar, Award, Globe } from 'lucide-react';
import { PageType } from '../types';
import { BRAND, TIMELINE, VALUES, ARTWORKS } from '../data/content';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenInquiry: (context?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [selectedTimelineCategory, setSelectedTimelineCategory] = useState<string>('All');

  const timelineCategories = ['All', 'Founding', 'Ecosystem Expansion', 'Innovation', 'Global Presence', 'Impact'];

  const filteredTimeline = selectedTimelineCategory === 'All'
    ? TIMELINE
    : TIMELINE.filter(t => t.category === selectedTimelineCategory);

  return (
    <div className="pt-24 space-y-24 sm:space-y-32 pb-24">
      {/* ================================================= */}
      {/* HERO / INTRO                                      */}
      {/* ================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#E2BE6A]/30 text-xs text-[#E2BE6A] font-semibold uppercase tracking-wider"
        >
          <Compass className="w-3.5 h-3.5 text-[#E2BE6A]" />
          <span>Institutional Legacy & Ethos</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold font-heading text-[#F8F7F3] max-w-4xl mx-auto leading-tight"
        >
          Art as a Force for Transformation and Human Development.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-[#9A9A9A] max-w-3xl mx-auto font-body leading-relaxed"
        >
          Lunar Gold Art is a multidisciplinary creative organization that blends art, culture, innovation, and technology to create meaningful experiences and lasting impact.
        </motion.p>
      </section>

      {/* ================================================= */}
      {/* WHO WE ARE & OUR STORY                            */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141414] border border-[#222222] rounded-3xl p-8 sm:p-12 lg:p-16 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#E2BE6A] uppercase tracking-wider font-heading">
                Who We Are
              </span>
              <h2 className="text-3xl font-bold font-heading text-[#F8F7F3]">
                Born from a vision to dismantle barriers and empower artists worldwide.
              </h2>
              <p className="text-sm text-[#9A9A9A] leading-relaxed font-body">
                Founded from the desire to overcome the barriers many creatives face, Lunar Gold Art exists to provide artists with platforms, opportunities, resources, and collaborations that allow talent to flourish without unnecessary gatekeeping.
              </p>
              <p className="text-sm text-[#9A9A9A] leading-relaxed font-body">
                We believe that creativity is one of the world's greatest resources—and when combined with purpose and innovation, it has the power to transform lives, communities, and industries.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#050505] border border-[#E2BE6A]/30 p-2">
                <ImageWithFallback
                  src={ARTWORKS[1].image}
                  alt="Lunar Gold Creative Studio Space"
                  className="w-full h-full object-cover rounded-xl"
                  containerClassName="w-full h-full rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#050505]/85 backdrop-blur-md border border-[#222222] text-xs text-[#E2BE6A] font-semibold">
                  Zero Gatekeeping. Maximum Creative Potential.
                </div>
              </div>
            </div>
          </div>

          {/* Dual Vision & Mission Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#222222]">
            <div className="p-6 rounded-2xl bg-[#050505] border border-[#222222] space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E2BE6A] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#E2BE6A]" />
                <span>Our Vision</span>
              </div>
              <p className="text-sm text-[#F8F7F3] leading-relaxed font-body">
                To build a globally respected creative ecosystem where art, technology, and culture work together to inspire innovation, empower artists, and drive sustainable development.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#050505] border border-[#222222] space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E2BE6A] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#E2BE6A]" />
                <span>Our Mission</span>
              </div>
              <p className="text-sm text-[#F8F7F3] leading-relaxed font-body">
                To nurture creative talent, develop innovative artistic solutions, preserve cultural identity, and create opportunities through collaboration, education, and responsible use of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* CREATIVE PHILOSOPHY                               */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#E2BE6A] uppercase tracking-wider font-heading">
            Philosophical Foundations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#F8F7F3]">
            The Lunar Gold Standard
          </h2>
          <p className="text-sm text-[#9A9A9A] font-body">
            How we combine discipline, cultural reverence, and technological mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-[#141414] border border-[#222222] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#050505] border border-[#E2BE6A]/30 flex items-center justify-center text-[#E2BE6A]">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#F8F7F3] font-heading">
              1. Cultural Preservation
            </h3>
            <p className="text-xs text-[#9A9A9A] leading-relaxed font-body">
              We protect and amplify authentic heritage, celebrating African fine art and international traditions without tokenization or superficial trends.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#141414] border border-[#222222] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#050505] border border-[#E2BE6A]/30 flex items-center justify-center text-[#E2BE6A]">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#F8F7F3] font-heading">
              2. Artisanal Excellence
            </h3>
            <p className="text-xs text-[#9A9A9A] leading-relaxed font-body">
              Masterwork craftsmanship is non-negotiable. Every canvas, sculpture, publication, and digital interface undergoes meticulous curatorial review.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#141414] border border-[#222222] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#050505] border border-[#E2BE6A]/30 flex items-center justify-center text-[#E2BE6A]">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#F8F7F3] font-heading">
              3. Ecosystem Synergy
            </h3>
            <p className="text-xs text-[#9A9A9A] leading-relaxed font-body">
              Every initiative—from Kenziya Afrika to Lunar Tech Labs—operates as an interconnected organism where success elevates all member artists.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* INTERACTIVE TIMELINE                              */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs text-[#E2BE6A] font-semibold uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4" />
              <span>Chronological Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#F8F7F3]">
              Our Journey & Evolution
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {timelineCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTimelineCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedTimelineCategory === cat
                    ? 'bg-[#E2BE6A] text-[#050505] font-semibold'
                    : 'bg-[#141414] text-[#9A9A9A] hover:text-[#F8F7F3] border border-[#222222]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[#222222] ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
          {filteredTimeline.map((item, index) => (
            <motion.div
              key={item.year + item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-[#141414] border-2 border-[#E2BE6A] group-hover:scale-125 transition-transform" />

              <div className="bg-[#141414] border border-[#222222] group-hover:border-[#E2BE6A]/40 p-6 rounded-2xl transition-all space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#E2BE6A] font-heading text-base">{item.year}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#050505] text-[#9A9A9A] border border-[#222222]">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#F8F7F3] font-heading">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-[#E2BE6A]">{item.subtitle}</div>
                <p className="text-xs text-[#9A9A9A] leading-relaxed font-body pt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================================================= */}
      {/* PROMISE & CTA                                     */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141414] border border-[#E2BE6A]/30 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl font-extrabold font-heading text-[#F8F7F3]">
            Our Institutional Promise
          </h2>
          <p className="text-sm text-[#9A9A9A] max-w-2xl mx-auto font-body leading-relaxed">
            At Lunar Gold Art, we do more than create art—we cultivate ideas, develop talent, embrace innovation, and build creative ecosystems that leave a lasting legacy.
          </p>
          <button
            onClick={() => onOpenInquiry('About Page Promise')}
            className="py-3.5 px-8 rounded-full bg-gradient-to-r from-[#E2BE6A] to-[#C9A14A] text-[#050505] font-semibold text-xs hover:brightness-110 transition-all shadow-xl inline-flex items-center gap-2"
          >
            <span>Partner With Our Curatorial Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
