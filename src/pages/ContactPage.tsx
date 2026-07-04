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
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C59B27]/40 text-xs text-[#A88118] font-bold uppercase tracking-wider shadow-xs"
        >
          <Mail className="w-3.5 h-3.5 text-[#A88118]" />
          <span>Global Institutional Engagement</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold font-heading text-[#1A1815] max-w-4xl mx-auto leading-tight"
        >
          Initiate Dialogue With Lunar Gold Art.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-[#5C564E] max-w-2xl mx-auto font-body leading-relaxed"
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
            <div className="bg-white border border-[#DCD6CB] rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
              <h2 className="text-xl font-bold text-[#1A1815] font-heading">
                Direct Contact Channels
              </h2>

              <div className="space-y-4 text-xs font-body">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#DCD6CB] flex items-center justify-center text-[#A88118]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[#5C564E] text-[11px] font-medium">Primary Email Inquiry</div>
                    <a href={`mailto:${BRAND.email}`} className="text-[#1A1815] font-bold hover:text-[#A88118] transition-colors">
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#DCD6CB] flex items-center justify-center text-[#A88118]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[#5C564E] text-[11px] font-medium">Curatorial Advisory Desk</div>
                    <div className="text-[#1A1815] font-bold">{BRAND.phone}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Hubs */}
            <div className="bg-white border border-[#DCD6CB] rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
              <h3 className="text-sm font-bold text-[#1A1815] uppercase tracking-wider font-heading">
                Global Hubs
              </h3>
              <div className="space-y-4 text-xs">
                {BRAND.locations.map((loc) => (
                  <div key={loc.city} className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#DCD6CB] flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#A88118] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[#1A1815] font-bold text-sm">{loc.city}, {loc.country}</div>
                      <div className="text-[#5C564E] mt-0.5">{loc.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Formal Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#C59B27]/40 rounded-2xl p-6 sm:p-10 shadow-2xl gold-border-glow">
              {submitted ? (
                <div className="text-center py-12 px-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-[#FAF8F5] rounded-full flex items-center justify-center mx-auto mb-6 text-[#A88118] border border-[#C59B27]/40 shadow-sm"
                  >
                    <CheckCircle className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#1A1815] font-heading mb-2">
                    Proposal Submitted Successfully
                  </h3>
                  <p className="text-[#5C564E] text-sm max-w-md mx-auto mb-8 font-body">
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
                    className="py-3 px-8 rounded-xl bg-gradient-to-r from-[#C59B27] to-[#A88118] text-white font-semibold text-xs hover:brightness-110 transition-all shadow-md"
                  >
                    Submit Additional Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1815] font-heading mb-1">
                      Institutional Contact Form
                    </h3>
                    <p className="text-xs text-[#5C564E]">Please provide detailed information regarding your project scope.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1A1815] mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5C564E]" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Dr. Julian Croft"
                          className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#DCD6CB] rounded-xl text-xs text-[#1A1815] focus:border-[#C59B27] focus:outline-none transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1A1815] mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5C564E]" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="julian@museum.org"
                          className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#DCD6CB] rounded-xl text-xs text-[#1A1815] focus:border-[#C59B27] focus:outline-none transition-all font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1A1815] mb-1.5">
                        Organization / Foundation
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5C564E]" />
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. International Art Trust"
                          className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#DCD6CB] rounded-xl text-xs text-[#1A1815] focus:border-[#C59B27] focus:outline-none transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1A1815] mb-1.5">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                        className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#DCD6CB] rounded-xl text-xs text-[#1A1815] focus:border-[#C59B27] focus:outline-none transition-all font-medium"
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
                    <label className="block text-xs font-bold text-[#1A1815] mb-1.5">
                      Proposal Details *
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-[#5C564E]" />
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please elaborate on your project scope, timeline expectations, or artistic criteria..."
                        className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#DCD6CB] rounded-xl text-xs text-[#1A1815] focus:border-[#C59B27] focus:outline-none transition-all font-body font-medium"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C59B27] to-[#A88118] text-white font-semibold text-xs hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
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
          <div className="inline-flex items-center gap-1.5 text-xs text-[#A88118] font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#1A1815]">
            Curatorial FAQ
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white border border-[#DCD6CB] rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm font-bold text-[#1A1815] hover:text-[#A88118] transition-colors font-heading"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#A88118] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5 text-xs text-[#5C564E] leading-relaxed border-t border-[#DCD6CB]/60 pt-3 font-body font-medium"
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
