import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, Send, CheckCircle, ChevronDown, Sparkles, HelpCircle, User, Building, MessageSquare } from 'lucide-react';
import { PageType, InquiryFormData } from '../types';
import { BRAND, FAQS } from '../data/content';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
  onOpenInquiry: (context?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    organization: '',
    inquiryType: 'Commission',
    serviceType: 'Visual Arts',
    budget: '$10k - $25k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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
          <Mail className="w-3.5 h-3.5 text-[#E2BE6A]" />
          <span>Global Institutional Engagement</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold font-heading text-[#F8F7F3] max-w-4xl mx-auto leading-tight"
        >
          Initiate Dialogue With Lunar Gold Art.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-[#9A9A9A] max-w-2xl mx-auto font-body leading-relaxed"
        >
          We welcome proposals from artists, collectors, museums, corporate sponsors, and municipal boards seeking transformational art & development solutions.
        </motion.p>
      </section>

      {/* ================================================= */}
      {/* CONTACT FORM & LOCATIONS GRID                     */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Hubs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#141414] border border-[#222222] rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-bold text-[#F8F7F3] font-heading">
                Direct Contact Channels
              </h2>

              <div className="space-y-4 text-xs font-body">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#050505] border border-[#333333] flex items-center justify-center text-[#E2BE6A]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[#9A9A9A] text-[11px]">Primary Email Inquiry</div>
                    <a href={`mailto:${BRAND.email}`} className="text-[#F8F7F3] font-semibold hover:text-[#E2BE6A]">
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#050505] border border-[#333333] flex items-center justify-center text-[#E2BE6A]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[#9A9A9A] text-[11px]">Curatorial Advisory Desk</div>
                    <div className="text-[#F8F7F3] font-semibold">{BRAND.phone}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Hubs */}
            <div className="bg-[#141414] border border-[#222222] rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-sm font-bold text-[#F8F7F3] uppercase tracking-wider font-heading">
                Global Hubs
              </h3>
              <div className="space-y-4 text-xs">
                {BRAND.locations.map((loc) => (
                  <div key={loc.city} className="p-3.5 rounded-xl bg-[#050505] border border-[#222222] flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#E2BE6A] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[#F8F7F3] font-semibold text-sm">{loc.city}, {loc.country}</div>
                      <div className="text-[#9A9A9A] mt-0.5">{loc.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Formal Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] border border-[#E2BE6A]/30 rounded-2xl p-6 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 px-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-[#E2BE6A]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#E2BE6A] border border-[#E2BE6A]/40"
                  >
                    <CheckCircle className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#F8F7F3] font-heading mb-2">
                    Proposal Submitted Successfully
                  </h3>
                  <p className="text-[#9A9A9A] text-sm max-w-md mx-auto mb-8 font-body">
                    Your institutional inquiry has been transmitted directly to our executive curatorial team. You will receive a formal reply within 24 to 48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        organization: '',
                        inquiryType: 'Commission',
                        serviceType: 'Visual Arts',
                        budget: '$10k - $25k',
                        message: '',
                      });
                    }}
                    className="py-3 px-8 rounded-xl bg-gradient-to-r from-[#E2BE6A] to-[#C9A14A] text-[#050505] font-semibold text-xs hover:brightness-110 transition-all"
                  >
                    Submit Additional Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold text-[#F8F7F3] font-heading mb-1">
                      Institutional Contact Form
                    </h3>
                    <p className="text-xs text-[#9A9A9A]">Please provide detailed information regarding your project scope.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F8F7F3]/80 mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#9A9A9A]" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Dr. Julian Croft"
                          className="w-full pl-9 pr-3 py-2.5 bg-[#050505] border border-[#333333] rounded-xl text-xs text-[#F8F7F3] focus:border-[#E2BE6A] focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F8F7F3]/80 mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#9A9A9A]" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="julian@museum.org"
                          className="w-full pl-9 pr-3 py-2.5 bg-[#050505] border border-[#333333] rounded-xl text-xs text-[#F8F7F3] focus:border-[#E2BE6A] focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F8F7F3]/80 mb-1.5">
                        Organization / Foundation
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#9A9A9A]" />
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. International Art Trust"
                          className="w-full pl-9 pr-3 py-2.5 bg-[#050505] border border-[#333333] rounded-xl text-xs text-[#F8F7F3] focus:border-[#E2BE6A] focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F8F7F3]/80 mb-1.5">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                        className="w-full px-3 py-2.5 bg-[#050505] border border-[#333333] rounded-xl text-xs text-[#F8F7F3] focus:border-[#E2BE6A] focus:outline-none transition-all"
                      >
                        <option value="Commission">Artwork Commission</option>
                        <option value="Exhibition">Museum / Gallery Exhibition</option>
                        <option value="Collaboration">Kenziya Afrika Partnership</option>
                        <option value="Artist Development">Artist Fellowship / Application</option>
                        <option value="Consultancy">Creative Consultancy</option>
                        <option value="General">General Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#F8F7F3]/80 mb-1.5">
                      Proposal Details *
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-[#9A9A9A]" />
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please elaborate on your project scope, timeline expectations, or artistic criteria..."
                        className="w-full pl-9 pr-3 py-2.5 bg-[#050505] border border-[#333333] rounded-xl text-xs text-[#F8F7F3] focus:border-[#E2BE6A] focus:outline-none transition-all font-body"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#E2BE6A] to-[#C9A14A] text-[#050505] font-semibold text-xs hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Formal Proposal</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FAQ SECTION                                       */}
      {/* ================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#E2BE6A] font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#F8F7F3]">
            Curatorial FAQ
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-[#141414] border border-[#222222] rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm font-semibold text-[#F8F7F3] hover:text-[#E2BE6A] transition-colors font-heading"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#E2BE6A] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5 text-xs text-[#9A9A9A] leading-relaxed border-t border-[#1F1F1F] pt-3 font-body"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
