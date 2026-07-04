import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Send, Mail, Building, User, MessageSquare } from 'lucide-react';
import { InquiryFormData } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, initialContext }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    organization: '',
    inquiryType: 'Commission',
    serviceType: initialContext || 'Visual Arts',
    budget: '$10k - $25k',
    message: initialContext ? `Inquiry regarding: ${initialContext}` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
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
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1815]/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white border border-[#C59B27]/40 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#FAF8F5] text-[#1A1815] hover:text-[#A88118] hover:bg-[#EFECE6] transition-all border border-[#DCD6CB]"
            aria-label="Close inquiry form"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-10 px-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 15 }}
                className="w-16 h-16 bg-[#C59B27]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#A88118] border border-[#C59B27]/40"
              >
                <CheckCircle className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#1A1815] font-heading mb-2">
                Inquiry Received
              </h3>
              <p className="text-[#5C564E] text-sm max-w-md mx-auto mb-8 font-body">
                Thank you for connecting with Lunar Gold Art. Our curatorial director will review your proposal and respond within 24 to 48 hours.
              </p>
              <button
                onClick={resetForm}
                className="py-3 px-8 rounded-xl bg-gradient-to-r from-[#C59B27] to-[#A88118] text-white font-semibold text-sm hover:brightness-110 transition-all shadow-lg"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C59B27]/15 text-[#A88118] border border-[#C59B27]/30 text-xs font-semibold mb-3">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Institutional Inquiry</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1815] font-heading">
                  Initiate a Collaboration
                </h3>
                <p className="text-[#5C564E] text-xs sm:text-sm mt-1 font-body">
                  Whether you seek custom artwork, institutional curation, or partnership, share your vision.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1A1815] mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#78716C]" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Elena Vance"
                        className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#DCD6CB] rounded-xl text-sm text-[#1A1815] placeholder-[#888075] focus:border-[#C59B27] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1A1815] mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#78716C]" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@institution.org"
                        className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#DCD6CB] rounded-xl text-sm text-[#1A1815] placeholder-[#888075] focus:border-[#C59B27] focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1A1815] mb-1.5">
                      Organization / Gallery
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#78716C]" />
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Modern Art Museum"
                        className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#DCD6CB] rounded-xl text-sm text-[#1A1815] placeholder-[#888075] focus:border-[#C59B27] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1A1815] mb-1.5">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                      className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#DCD6CB] rounded-xl text-sm text-[#1A1815] focus:border-[#C59B27] focus:outline-none transition-all"
                    >
                      <option value="Commission">Artwork Commission</option>
                      <option value="Exhibition">Exhibition & Curation</option>
                      <option value="Collaboration">Kenziya Afrika / Ecosystem Partner</option>
                      <option value="Artist Development">Artist Development / Fellowship</option>
                      <option value="Consultancy">Creative Consultancy</option>
                      <option value="General">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1A1815] mb-1.5">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#DCD6CB] rounded-xl text-sm text-[#1A1815] focus:border-[#C59B27] focus:outline-none transition-all"
                  >
                    <option value="Under $10k">Under $10,000</option>
                    <option value="$10k - $25k">$10,000 - $25,000</option>
                    <option value="$25k - $50k">$25,000 - $50,000</option>
                    <option value="$50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1A1815] mb-1.5">
                    Project Vision & Details *
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-[#78716C]" />
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your creative objectives, timeline, or specific questions..."
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#DCD6CB] rounded-xl text-sm text-[#1A1815] placeholder-[#888075] focus:border-[#C59B27] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C59B27] to-[#A88118] text-white font-semibold text-sm hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Proposal Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
