import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Check, Mail, Copy, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../data/brand';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: preselectedService || 'Brand Identity & Strategy',
    budget: '$5,000 – $10,000 AUD',
    timeline: 'Within 1–2 months',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const serviceOptions = [
    'Brand Identity & Strategy',
    'Website Design & Development',
    'Digital Marketing & Campaigns',
    'Creative & Advertising',
    'Complete Brand Bloom (All-in-One)',
  ];

  const budgetOptions = [
    'Under $5,000 AUD',
    '$5,000 – $10,000 AUD',
    '$10,000 – $25,000 AUD',
    '$25,000+ AUD (Full Rebrand / Custom Platform)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and a brief description of your project.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  const constructMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} — ${formData.name}`);
    const body = encodeURIComponent(
      `Hello RoseDsigns,\n\n` +
      `I would like to inquire about initiating a project with your studio:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Service: ${formData.service}\n` +
      `Estimated Budget: ${formData.budget}\n` +
      `Desired Timeline: ${formData.timeline}\n\n` +
      `Project Overview:\n${formData.message}\n\n` +
      `Warm regards,\n${formData.name}`
    );
    return `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  };

  const copyInquiryDetails = () => {
    const text = `RoseDsigns Inquiry:\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#171514]/80 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="w-screen max-w-lg bg-[#172536] text-[#F7F3EC] border-l border-[#B08A57]/40 shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              {/* Header */}
              <div className="p-6 sm:p-8 border-b border-[#B08A57]/20 flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#D9B1AE]" />
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#DFC58F]">
                      COMMISSION INQUIRY
                    </span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#F7F3EC] tracking-tight">
                    Let's create something.
                  </h3>
                </div>

                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white/5 border border-[#B08A57]/30 text-[#E8D8D2] hover:text-[#D9B1AE] hover:border-[#D9B1AE] flex items-center justify-center transition-colors focus:outline-none"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Body or Success State */}
              <div className="p-6 sm:p-8 flex-1">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 py-6"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#183B32] border border-[#DFC58F] text-[#DFC58F] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="text-center space-y-2">
                      <h4 className="font-editorial text-2xl text-[#DFC58F]">
                        Inquiry Prepared Successfully
                      </h4>
                      <p className="text-sm text-[#E8D8D2]/90 leading-relaxed font-light">
                        Thank you, <strong className="text-white">{formData.name}</strong>. Because RoseDsigns operates with direct client transmission, your inquiry has been compiled. You can send it directly to our studio inbox via email or copy the brief below.
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="space-y-3 pt-2">
                      <a
                        href={constructMailto()}
                        className="w-full inline-flex items-center justify-center gap-3 py-3.5 bg-[#F7F3EC] text-[#171514] hover:bg-[#D9B1AE] text-xs font-semibold uppercase tracking-widest transition-colors shadow-lg"
                      >
                        <Mail className="w-4 h-4 text-[#171514]" />
                        <span>Open In Email Client ({BRAND.email})</span>
                      </a>

                      <button
                        onClick={copyInquiryDetails}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 border border-[#B08A57]/50 text-[#DFC58F] hover:bg-white/5 text-xs font-mono uppercase tracking-wider transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 text-[#D9B1AE]" />
                            <span>Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-[#DFC58F]" />
                            <span>Copy Inquiry Summary</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => {
                          setSubmitted(false);
                          onClose();
                        }}
                        className="w-full py-2.5 text-xs text-[#A79A8F] hover:text-white uppercase tracking-wider text-center"
                      >
                        Close & Return to Browsing
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="p-3 bg-[#672D39]/60 border border-[#A76570] text-xs text-[#F7F3EC]">
                        {error}
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#DFC58F] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-[#171514]/70 border border-[#B08A57]/40 px-3.5 py-2.5 text-sm text-[#F7F3EC] placeholder-[#A79A8F]/50 focus:outline-none focus:border-[#D9B1AE] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#DFC58F] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. eleanor@brandstudio.com"
                        className="w-full bg-[#171514]/70 border border-[#B08A57]/40 px-3.5 py-2.5 text-sm text-[#F7F3EC] placeholder-[#A79A8F]/50 focus:outline-none focus:border-[#D9B1AE] transition-colors"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#DFC58F] mb-1.5">
                        Service Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#171514]/70 border border-[#B08A57]/40 px-3.5 py-2.5 text-sm text-[#F7F3EC] focus:outline-none focus:border-[#D9B1AE] transition-colors"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#172536] text-[#F7F3EC]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget Tier */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#DFC58F] mb-1.5">
                        Estimated Budget (AUD)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#171514]/70 border border-[#B08A57]/40 px-3.5 py-2.5 text-sm text-[#F7F3EC] focus:outline-none focus:border-[#D9B1AE] transition-colors"
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b} className="bg-[#172536] text-[#F7F3EC]">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message / Project Vision */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#DFC58F] mb-1.5">
                        Project Vision & Goals *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your brand, current challenges, and what success looks like..."
                        className="w-full bg-[#171514]/70 border border-[#B08A57]/40 px-3.5 py-2.5 text-sm text-[#F7F3EC] placeholder-[#A79A8F]/50 focus:outline-none focus:border-[#D9B1AE] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#F7F3EC] text-[#171514] hover:bg-[#D9B1AE] text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center justify-center gap-2 mt-4"
                    >
                      <Send className="w-3.5 h-3.5 text-[#171514]" />
                      <span>Transmit Project Brief</span>
                    </button>

                    <p className="text-[10px] text-[#A79A8F] text-center font-mono">
                      Direct transmission with transparent verification · No spam.
                    </p>
                  </form>
                )}
              </div>

              {/* Bottom Footer Details */}
              <div className="p-6 bg-[#171514] border-t border-[#B08A57]/20 text-xs text-[#A79A8F]">
                <div className="flex items-center justify-between">
                  <span>Direct studio inbox:</span>
                  <a href={`mailto:${BRAND.email}`} className="text-[#DFC58F] font-mono hover:underline">
                    {BRAND.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
