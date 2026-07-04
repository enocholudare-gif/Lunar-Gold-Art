import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Globe,
  Compass,
  Palette,
  Camera,
  Boxes,
  UserCheck,
  Frame,
  ChevronRight,
  Check,
  Award,
  ShieldCheck,
  Cpu,
  Share2,
  Leaf,
  Eye,
  ArrowUpRight
} from 'lucide-react';
import { PageType, ArtItem } from '../types';
import { BRAND, STATS, SERVICES, CREATIVE_FAMILY, ARTWORKS, VALUES } from '../data/content';
import { LogoMark } from '../components/LogoMark';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenInquiry: (context?: string) => void;
  onSelectArtwork: (artwork: ArtItem) => void;
}

// Staggered Entrance Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fastStaggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const scaleItemVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenInquiry,
  onSelectArtwork,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Mixed Media & Gold Leaf', 'Sculpture & Public Art', 'Fine Art Photography', 'Interactive Digital Canvas'];

  const filteredArtworks = activeCategory === 'All'
    ? ARTWORKS
    : ARTWORKS.filter(art => art.category === activeCategory);

  return (
    <div className="pt-24 space-y-24 sm:space-y-32 pb-24">
      {/* ================================================= */}
      {/* 1. HERO SECTION                                   */}
      {/* ================================================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Subtle Background Lighting Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[350px] bg-[#E2BE6A]/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#C9A14A]/5 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto w-full relative z-10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Text Content with Staggered Entrance */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-6 text-left"
            >
              {/* Institutional Tag */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#141414] border border-[#E2BE6A]/40 text-xs text-[#E2BE6A] font-medium shadow-lg"
              >
                <div className="w-5 h-5 rounded-full bg-[#050505] p-0.5 border border-[#E2BE6A]/50 shrink-0">
                  <LogoMark className="w-full h-full" />
                </div>
                <span className="tracking-wide uppercase font-semibold">International Creative Institution & Studio</span>
              </motion.div>

              {/* Main Title */}
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading leading-[1.08] text-[#F8F7F3]">
                  Lunar Gold Art
                </h1>
                <p className="text-xl sm:text-2xl font-heading font-medium text-[#E2BE6A] mt-2 tracking-tight">
                  {BRAND.tagline}
                </p>
              </motion.div>

              {/* Body Statement */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-[#9A9A9A] leading-relaxed max-w-2xl font-body"
              >
                A multidisciplinary creative organization that blends art, culture, innovation, and technology to create meaningful experiences and lasting impact.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <button
                  onClick={() => onNavigate('family')}
                  className="py-4 px-8 rounded-full bg-gradient-to-r from-[#E2BE6A] to-[#C9A14A] text-[#050505] font-semibold text-sm hover:brightness-110 transition-all shadow-xl shadow-[#E2BE6A]/10 flex items-center gap-2 group"
                >
                  <span>Explore Creative Ecosystem</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenInquiry('General Institution Collaboration')}
                  className="py-4 px-8 rounded-full bg-[#141414] hover:bg-[#1C1C1C] text-[#F8F7F3] hover:text-[#E2BE6A] font-semibold text-sm border border-[#333333] hover:border-[#E2BE6A]/50 transition-all flex items-center gap-2"
                >
                  <span>Initiate Collaboration</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E2BE6A]" />
                </button>
              </motion.div>

              {/* Key Metrics Banner */}
              <motion.div
                variants={fastStaggerVariants}
                className="pt-8 border-t border-[#1F1F1F] grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {STATS.map((stat) => (
                  <motion.div key={stat.label} variants={itemVariants}>
                    <div className="text-2xl sm:text-3xl font-bold font-heading gold-text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-[#F8F7F3] mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-[#9A9A9A] mt-0.5">
                      {stat.subtext}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
                className="relative rounded-2xl overflow-hidden border border-[#E2BE6A]/30 bg-[#141414] p-2 gold-border-glow"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                  <ImageWithFallback
                    src={ARTWORKS[0].image}
                    alt="Lunar Gold Art Exhibition Highlight"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent pointer-events-none" />

                  {/* Floating Badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#050505]/85 backdrop-blur-md border border-[#E2BE6A]/30 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-widest text-[#E2BE6A] font-bold">
                        Kenziya Afrika Showcase
                      </span>
                      <span className="text-[10px] text-[#9A9A9A] px-2 py-0.5 rounded bg-[#141414] border border-[#333333]">
                        Global Artistry
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-[#F8F7F3] font-heading">
                      The Golden Eclipse (2025)
                    </div>
                    <p className="text-xs text-[#9A9A9A] line-clamp-1 font-body">
                      Pigment, Gold Leaf & Recycled Bronze on Canvas
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* 2. ABOUT PREVIEW SECTION                          */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="bg-[#141414] border border-[#222222] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Subtle gold accent bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E2BE6A] via-[#C9A14A] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div variants={containerVariants} className="lg:col-span-7 space-y-6">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 text-xs text-[#E2BE6A] font-semibold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Who We Are & Purpose</span>
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold font-heading text-[#F8F7F3] leading-tight">
                Overcoming barriers and building a globally respected creative ecosystem.
              </motion.h2>

              <motion.p variants={itemVariants} className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed font-body">
                Founded from the desire to overcome the barriers many creatives face, Lunar Gold Art exists to provide artists with platforms, opportunities, resources, and collaborations that allow talent to flourish without unnecessary gatekeeping.
              </motion.p>

              <motion.blockquote variants={itemVariants} className="p-4 rounded-2xl bg-[#050505] border-l-2 border-[#E2BE6A] text-sm text-[#F8F7F3] italic">
                "We believe that creativity is one of the world's greatest resources—and when combined with purpose and innovation, it has the power to transform lives, communities, and industries."
              </motion.blockquote>

              <motion.div variants={itemVariants} className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#E2BE6A] hover:text-[#F8F7F3] transition-colors group"
                >
                  <span>Read Full Story & Creative Philosophy</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>

            {/* Vision & Mission Cards */}
            <motion.div variants={fastStaggerVariants} className="lg:col-span-5 space-y-4">
              <motion.div variants={scaleItemVariants} className="p-6 rounded-2xl bg-[#050505] border border-[#222222]">
                <div className="text-xs font-bold text-[#E2BE6A] uppercase tracking-wider mb-2 font-heading">
                  Our Vision
                </div>
                <p className="text-xs sm:text-sm text-[#9A9A9A] leading-relaxed font-body">
                  To build a globally respected creative ecosystem where art, technology, and culture work together to inspire innovation, empower artists, and drive sustainable development.
                </p>
              </motion.div>

              <motion.div variants={scaleItemVariants} className="p-6 rounded-2xl bg-[#050505] border border-[#222222]">
                <div className="text-xs font-bold text-[#E2BE6A] uppercase tracking-wider mb-2 font-heading">
                  Our Mission
                </div>
                <p className="text-xs sm:text-sm text-[#9A9A9A] leading-relaxed font-body">
                  To nurture creative talent, develop innovative artistic solutions, preserve cultural identity, and create opportunities through collaboration, education, and responsible use of technology.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================================================= */}
      {/* 3. FEATURED SERVICES                              */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 text-xs text-[#E2BE6A] font-semibold uppercase tracking-wider mb-2">
              <Palette className="w-4 h-4" />
              <span>Multidisciplinary Mastery</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold font-heading text-[#F8F7F3]">
              Featured Creative Services
            </motion.h2>
          </div>

          <motion.button
            variants={itemVariants}
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E2BE6A] hover:text-[#F8F7F3] transition-colors"
          >
            <span>View All 10 Services</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Services Cards Grid */}
        <motion.div
          variants={fastStaggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.filter(s => s.featured).map((service) => (
            <motion.div
              key={service.id}
              variants={scaleItemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#141414] border border-[#222222] hover:border-[#E2BE6A]/50 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-lg"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#050505]">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md text-[10px] text-[#E2BE6A] font-semibold border border-[#E2BE6A]/30">
                    {service.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#F8F7F3] group-hover:text-[#E2BE6A] transition-colors font-heading">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#9A9A9A] leading-relaxed line-clamp-2 font-body">
                    {service.tagline}
                  </p>

                  <div className="pt-2 space-y-1">
                    {service.deliverables.slice(0, 2).map((del) => (
                      <div key={del} className="flex items-center gap-2 text-[11px] text-[#9A9A9A]">
                        <Check className="w-3 h-3 text-[#E2BE6A]" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onOpenInquiry(`Service Inquiry: ${service.title}`)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#050505] hover:bg-gradient-to-r hover:from-[#E2BE6A] hover:to-[#C9A14A] text-[#F8F7F3] hover:text-[#050505] font-semibold text-xs border border-[#333333] hover:border-transparent transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  <span>Commission Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================================================= */}
      {/* 4. ART & INNOVATION SECTION                       */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-[#E2BE6A]/20 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 text-xs text-[#E2BE6A] font-semibold uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>Art & Technology Synthesis</span>
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-extrabold font-heading text-[#F8F7F3]">
                Technology as an instrument that amplifies artistic vision.
              </motion.h2>

              <motion.p variants={itemVariants} className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed font-body">
                Rather than replacing creativity, our technology enhances artistic expression, expands access to opportunities, and connects people with creative experiences worldwide.
              </motion.p>

              <motion.div variants={fastStaggerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: 'Digital Creative Platforms', desc: 'Custom software & online exhibition engines for artists.' },
                  { title: 'Online Exhibitions', desc: 'High-fidelity spatial virtual showrooms and archives.' },
                  { title: 'Interactive Media', desc: 'Algorithmic installations bridging physical & digital spaces.' },
                  { title: 'Artistic Marketplaces', desc: 'Transparent platforms expanding global collector access.' },
                ].map((item) => (
                  <motion.div key={item.title} variants={itemVariants} className="p-4 rounded-xl bg-[#050505]/80 border border-[#222222]">
                    <div className="text-xs font-bold text-[#F8F7F3] mb-1 font-heading">{item.title}</div>
                    <div className="text-[11px] text-[#9A9A9A] leading-normal">{item.desc}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Interactive Visual */}
            <motion.div variants={scaleItemVariants} className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#E2BE6A]/30 bg-[#050505] p-3 shadow-2xl">
                <div className="aspect-square rounded-xl overflow-hidden relative">
                  <ImageWithFallback
                    src={CREATIVE_FAMILY[1].image}
                    alt="Art & Innovation Tech Lab"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-[#E2BE6A]/20">
                    <div className="text-xs font-bold text-[#E2BE6A]">Lunar Tech Labs Initiative</div>
                    <div className="text-[11px] text-[#9A9A9A] mt-0.5">Real-time Generative Canvas Engine</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================================================= */}
      {/* 5. CREATIVE FAMILY SPOTLIGHT (KENZIYA AFRIKA)     */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 text-xs text-[#E2BE6A] font-semibold uppercase tracking-wider">
            <Globe className="w-4 h-4" />
            <span>Our Creative Ecosystem</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-extrabold font-heading text-[#F8F7F3]">
            Our Creative Family
          </motion.h2>
          <motion.p variants={itemVariants} className="text-sm text-[#9A9A9A] font-body">
            Lunar Gold Art is home to several creative initiatives, each with its own identity while sharing one vision.
          </motion.p>
        </motion.div>

        {/* Flagship Hero Feature: Kenziya Afrika */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="bg-[#141414] border border-[#E2BE6A]/40 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl gold-border-glow"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2BE6A]/10 text-[#E2BE6A] border border-[#E2BE6A]/30 text-xs font-semibold">
                <span>Flagship African Initiative</span>
              </motion.div>

              <motion.h3 variants={itemVariants} className="text-3xl sm:text-4xl font-extrabold text-[#F8F7F3] font-heading">
                Kenziya Afrika
              </motion.h3>

              <motion.p variants={itemVariants} className="text-sm text-[#9A9A9A] leading-relaxed font-body">
                Recognized through <a href="https://kenziyaafrika.com" target="_blank" rel="noopener noreferrer" className="text-[#E2BE6A] underline font-semibold">kenziyaafrika.com</a> for its exceptional artistic excellence and celebration of African creativity, Kenziya Afrika leads contemporary fine art curation and cultural preservation.
              </motion.p>

              <motion.div variants={fastStaggerVariants} className="space-y-2 pt-2">
                {CREATIVE_FAMILY[0].highlights.map((h) => (
                  <motion.div key={h} variants={itemVariants} className="flex items-center gap-2 text-xs text-[#F8F7F3]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E2BE6A]" />
                    <span>{h}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://kenziyaafrika.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-full bg-gradient-to-r from-[#E2BE6A] to-[#C9A14A] text-[#050505] font-semibold text-xs hover:brightness-110 transition-all flex items-center gap-2 shadow-lg"
                >
                  <span>Visit kenziyaafrika.com</span>
                  <Globe className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onNavigate('family')}
                  className="py-3 px-6 rounded-full bg-[#050505] hover:bg-[#1A1A1A] text-[#F8F7F3] font-semibold text-xs border border-[#333333] transition-all"
                >
                  Explore All Divisions
                </button>
              </motion.div>
            </div>

            <motion.div variants={scaleItemVariants} className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#050505] border border-[#222222]">
                <ImageWithFallback
                  src={CREATIVE_FAMILY[0].image}
                  alt="Kenziya Afrika Showcase"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#F8F7F3] font-medium bg-[#050505]/80 backdrop-blur-md p-3 rounded-xl border border-[#222222]">
                  Excellence in Contemporary African Visual Arts
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================================================= */}
      {/* 6. CURATED GALLERY SHOWCASE                       */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 text-xs text-[#E2BE6A] font-semibold uppercase tracking-wider mb-2">
              <Frame className="w-4 h-4" />
              <span>Curated Fine Art Collection</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold font-heading text-[#F8F7F3]">
              Artworks & Exhibitions
            </motion.h2>
          </div>

          {/* Filter Pills */}
          <motion.div variants={fastStaggerVariants} className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                variants={itemVariants}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#E2BE6A] text-[#050505] font-semibold'
                    : 'bg-[#141414] text-[#9A9A9A] hover:text-[#F8F7F3] border border-[#222222]'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Artworks Grid */}
        <motion.div
          variants={fastStaggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredArtworks.map((art) => (
            <motion.div
              key={art.id}
              layout
              variants={scaleItemVariants}
              whileHover={{ y: -4 }}
              onClick={() => onSelectArtwork(art)}
              className="bg-[#141414] border border-[#222222] hover:border-[#E2BE6A]/50 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#050505]">
                <ImageWithFallback
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-[#050505]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="py-2 px-4 rounded-full bg-[#050505]/80 backdrop-blur-md text-xs text-[#E2BE6A] border border-[#E2BE6A]/40 font-medium flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Details</span>
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[#E2BE6A]">
                  <span>{art.category}</span>
                  <span>{art.year}</span>
                </div>
                <h3 className="text-lg font-bold text-[#F8F7F3] group-hover:text-[#E2BE6A] transition-colors font-heading">
                  {art.title}
                </h3>
                {art.artist && (
                  <p className="text-xs text-[#9A9A9A] font-body">
                    By {art.artist}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================================================= */}
      {/* 7. INSTITUTIONAL VALUES                           */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 text-xs text-[#E2BE6A] font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Guiding Principles</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold font-heading text-[#F8F7F3]">
            Our Core Values
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xs sm:text-sm text-[#9A9A9A] font-body">
            Everything we create is guided by these eight foundational pillars.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fastStaggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {VALUES.map((val) => {
            const renderValueIcon = () => {
              switch (val.iconName) {
                case 'Sparkles':
                  return <Sparkles className="w-5 h-5" />;
                case 'Award':
                  return <Award className="w-5 h-5" />;
                case 'ShieldCheck':
                  return <ShieldCheck className="w-5 h-5" />;
                case 'Cpu':
                  return <Cpu className="w-5 h-5" />;
                case 'Compass':
                  return <Compass className="w-5 h-5" />;
                case 'Share2':
                  return <Share2 className="w-5 h-5" />;
                case 'Globe':
                  return <Globe className="w-5 h-5" />;
                case 'Leaf':
                  return <Leaf className="w-5 h-5" />;
                default:
                  return <Sparkles className="w-5 h-5" />;
              }
            };

            return (
              <motion.div
                key={val.title}
                variants={scaleItemVariants}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-[#141414] border border-[#222222] hover:border-[#E2BE6A]/30 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#050505] border border-[#E2BE6A]/30 flex items-center justify-center text-[#E2BE6A]">
                  {renderValueIcon()}
                </div>
                <h3 className="text-base font-bold text-[#F8F7F3] font-heading">
                  {val.title}
                </h3>
                <p className="text-xs text-[#9A9A9A] leading-relaxed font-body">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ================================================= */}
      {/* 8. GLOBAL CTA & PROMISE BANNER                   */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="bg-gradient-to-r from-[#141414] via-[#1A1A1A] to-[#141414] border border-[#E2BE6A]/40 rounded-3xl p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-2xl gold-border-glow"
        >
          <div className="max-w-2xl mx-auto space-y-4">
            <motion.span variants={itemVariants} className="block text-xs uppercase tracking-widest text-[#E2BE6A] font-extrabold">
              OUR PROMISE
            </motion.span>

            <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-extrabold font-heading text-[#F8F7F3]">
              Where imagination meets purpose & art becomes development.
            </motion.h2>

            <motion.p variants={itemVariants} className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed font-body">
              At Lunar Gold Art, we do more than create art—we cultivate ideas, develop talent, embrace innovation, and build creative ecosystems that leave a lasting legacy.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenInquiry('Main Promise CTA')}
                className="py-4 px-8 rounded-full bg-gradient-to-r from-[#E2BE6A] to-[#C9A14A] text-[#050505] font-semibold text-sm hover:brightness-110 transition-all shadow-xl flex items-center gap-2"
              >
                <span>Connect With Lunar Gold Art</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="py-4 px-8 rounded-full bg-[#050505] hover:bg-[#141414] text-[#F8F7F3] font-semibold text-sm border border-[#333333] transition-all"
              >
                Global Locations & Inquiries
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
