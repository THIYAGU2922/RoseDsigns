import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  Check,
  Copy,
  CheckCircle2,
  MapPin,
  Clock,
  ChevronDown,
} from 'lucide-react';
import { BRAND } from '../data/brand';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Brand Identity & Strategy',
    budget: '$5,000 – $10,000 AUD',
    timeline: 'Within 1–2 months',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const serviceOptions = [
    'Brand Identity & Strategy',
    'Website Design & Development',
    'Digital Marketing & Campaigns',
    'Creative & Advertising',
    'Complete Rebrand & Platform Bloom',
  ];

  const budgetOptions = [
    'Under $5,000 AUD',
    '$5,000 – $10,000 AUD',
    '$10,000 – $25,000 AUD',
    '$25,000+ AUD (Comprehensive Ecosystem)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please provide your name, email, and project overview.');
      return;
    }
    setError(null);
    setSubmitted(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const constructMailto = () => {
    const subject = encodeURIComponent(`Project Commission Brief: ${formData.service} — ${formData.name}`);
    const body = encodeURIComponent(
      `Hello RoseDsigns Team,\n\n` +
      `Here is our project brief for your review:\n\n` +
      `• Client Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• Organization: ${formData.company || 'Not Specified'}\n` +
      `• Contact Phone: ${formData.phone || 'Not Specified'}\n` +
      `• Service Required: ${formData.service}\n` +
      `• Budget Bracket: ${formData.budget}\n` +
      `• Target Delivery: ${formData.timeline}\n\n` +
      `Project Scope & Vision:\n${formData.message}\n\n` +
      `Transmitted from the RoseDsigns Digital Experience Platform.`
    );
    return `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  };

  const copyBrief = () => {
    const text = `RoseDsigns Project Commission Brief\n---------------------------------\nClient: ${formData.name} (${formData.email})\nCompany: ${formData.company || 'N/A'}\nService: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Scope:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const faqs = [
    {
      q: 'How does RoseDsigns work with remote and international clients?',
      a: 'While our studio is based in Chennai, India, our collaboration model is international. We use asynchronous Figma collaboration, scheduled video immersion sessions, and transparent milestone sprint deliveries to work smoothly across all global time zones.',
    },
    {
      q: 'What is your typical project timeline for a brand or website?',
      a: 'Foundational brand identities typically require 4 to 6 weeks from discovery to final guidelines handover. Custom responsive websites typically span 6 to 10 weeks depending on complexity, interactive prototyping, and bespoke integrations.',
    },
    {
      q: 'What deliverables are included with a full brand identity package?',
      a: 'You receive primary and secondary logo marks, responsive wordmarks, bespoke color palettes with digital/print formulas, comprehensive brand guidelines (PDF/Web), typography pairings, custom stationery files, social media templates, and packaging assets where scoped.',
    },
    {
      q: 'How does project investment work?',
      a: 'We operate on transparent milestone-based flat project fees rather than unpredictable hourly billing. Typical engagements begin from $5,000 AUD, divided into clear phase payments tied to milestone approvals.',
    },
  ];

  return (
    <div className="pt-24 lg:pt-32 bg-[#F7F3EC] text-[#171514]">
      {/* Contact Header */}
      <section className="py-16 lg:py-24 border-b border-[#C9C1B8]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#A76570]" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A76570] font-semibold">
              COMMISSION A PROJECT
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#171514] tracking-tight max-w-5xl">
            Let's make your brand{' '}
            <span className="italic text-[#A76570] font-normal">
              bloom.
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-[#625A55] font-light max-w-3xl leading-relaxed">
            Have an idea, a vision or a brand waiting to grow? We invite you to share your ambitions below.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-[#C9C1B8]/60 shadow-xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 py-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#183B32] border border-[#DFC58F] text-[#DFC58F] flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#A76570]">
                      SUBMISSION VERIFIED
                    </span>
                    <h2 className="font-editorial text-3xl sm:text-4xl text-[#171514]">
                      Your Project Brief is Formatted
                    </h2>
                    <p className="text-sm sm:text-base text-[#625A55] leading-relaxed max-w-lg mx-auto font-light">
                      Thank you, <strong className="text-[#171514] font-medium">{formData.name}</strong>. In accordance with genuine transparency, submissions are funneled through verified studio transmission. You may dispatch your brief directly via email or copy the compiled specifications below.
                    </p>
                  </div>

                  {/* Submission Details Box */}
                  <div className="p-5 bg-[#F7F3EC] border border-[#C9C1B8]/60 text-left text-xs space-y-2 font-mono">
                    <p><strong>To:</strong> {BRAND.email}</p>
                    <p><strong>Service:</strong> {formData.service}</p>
                    <p><strong>Budget Tier:</strong> {formData.budget}</p>
                    <p><strong>Timeline:</strong> {formData.timeline}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a
                      href={constructMailto()}
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#171514] text-[#F7F3EC] hover:bg-[#A76570] text-xs font-semibold uppercase tracking-widest transition-all shadow-lg"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Mail Client</span>
                    </a>

                    <button
                      onClick={copyBrief}
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#B08A57] text-[#171514] hover:bg-[#E8D8D2]/40 text-xs font-mono uppercase tracking-wider transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-green-700" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#A76570]" />
                          <span>Copy Brief to Clipboard</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-6 border-t border-[#C9C1B8]/40">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#A79A8F] hover:text-[#171514] underline"
                    >
                      ← Submit another inquiry or modify details
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#A76570] block mb-1">
                      COMMISSION INQUIRY FORM
                    </span>
                    <h2 className="font-editorial text-2xl sm:text-3xl text-[#171514] tracking-tight">
                      Tell us about your brand vision.
                    </h2>
                  </div>

                  {error && (
                    <div className="p-4 bg-[#672D39]/10 border border-[#672D39]/40 text-[#672D39] text-xs">
                      {error}
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#171514] mb-2 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Liam Sterling"
                        className="w-full bg-[#F7F3EC] border border-[#C9C1B8] px-4 py-3 text-sm text-[#171514] focus:outline-none focus:border-[#A76570] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#171514] mb-2 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. liam@domain.com"
                        className="w-full bg-[#F7F3EC] border border-[#C9C1B8] px-4 py-3 text-sm text-[#171514] focus:outline-none focus:border-[#A76570] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#171514] mb-2 font-medium">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Sterling Botanicals"
                        className="w-full bg-[#F7F3EC] border border-[#C9C1B8] px-4 py-3 text-sm text-[#171514] focus:outline-none focus:border-[#A76570] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#171514] mb-2 font-medium">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 1234567890"
                        className="w-full bg-[#F7F3EC] border border-[#C9C1B8] px-4 py-3 text-sm text-[#171514] focus:outline-none focus:border-[#A76570] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#171514] mb-2 font-medium">
                      Primary Service Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#F7F3EC] border border-[#C9C1B8] px-4 py-3 text-sm text-[#171514] focus:outline-none focus:border-[#A76570] transition-colors"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget & Timeline Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#171514] mb-2 font-medium">
                        Estimated Budget (AUD)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#F7F3EC] border border-[#C9C1B8] px-4 py-3 text-sm text-[#171514] focus:outline-none focus:border-[#A76570] transition-colors"
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#171514] mb-2 font-medium">
                        Desired Launch Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-[#F7F3EC] border border-[#C9C1B8] px-4 py-3 text-sm text-[#171514] focus:outline-none focus:border-[#A76570] transition-colors"
                      >
                        <option value="Urgent (Within 4 weeks)">Urgent (Within 4 weeks)</option>
                        <option value="Within 1–2 months">Within 1–2 months</option>
                        <option value="Within 3–6 months">Within 3–6 months</option>
                        <option value="Flexible / Exploration">Flexible / Exploration</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#171514] mb-2 font-medium">
                      Project Vision, Scope & Objectives *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what your brand does, who your target audience is, and the core challenge you want RoseDsigns to solve..."
                      className="w-full bg-[#F7F3EC] border border-[#C9C1B8] px-4 py-3 text-sm text-[#171514] focus:outline-none focus:border-[#A76570] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#171514] text-[#F7F3EC] hover:bg-[#A76570] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#DFC58F]" />
                    <span>Submit Project Brief</span>
                  </button>

                  <p className="text-[11px] text-[#A79A8F] text-center font-mono">
                    Direct transmission with email-verified fallback · We typically respond within 24–48 business hours.
                  </p>
                </form>
              )}
            </div>

            {/* Right Column: Studio Information & Social Links */}
            <div className="lg:col-span-5 space-y-8">

              {/* Direct Studio Box */}
              <div className="p-8 bg-[#172536] text-[#F7F3EC] border border-[#B08A57]/40 shadow-xl space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#DFC58F] block mb-1">
                    STUDIO HEADQUARTERS
                  </span>
                  <h3 className="font-editorial text-2xl text-[#F7F3EC]">
                    RoseDsigns Studio
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-[#E8D8D2]/90">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#B08A57] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-medium">Chennai, Tamil Nadu, India</strong>
                      <span className="text-xs text-[#A79A8F]">Serving National & Global Brands</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#B08A57] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-medium">Direct Inquiries:</strong>
                      <a href={`mailto:${BRAND.email}`} className="text-[#D9B1AE] hover:underline font-mono text-xs">
                        {BRAND.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#B08A57] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-medium">Studio Hours:</strong>
                      <span className="text-xs text-[#A79A8F]">Monday – Friday: 9:30 AM – 6:30 PM IST</span>
                    </div>
                  </div>
                </div>

                {/* Availability status */}
                <div className="p-3 bg-white/5 border border-[#B08A57]/30 flex items-center gap-2.5 text-xs text-[#DFC58F]">
                  <span className="w-2 h-2 rounded-full bg-[#183B32] border border-[#DFC58F] animate-ping" />
                  <span>Currently booking commissions for 2025/2026</span>
                </div>
              </div>

              {/* Verified Social Media Channels */}
              <div className="p-8 bg-white border border-[#C9C1B8]/60 shadow-md space-y-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#A76570] block">
                  OFFICIAL CHANNELS
                </span>
                <h4 className="font-editorial text-xl text-[#171514]">
                  Follow our creative explorations
                </h4>
                <div className="space-y-2.5">
                  {BRAND.socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-[#F7F3EC] hover:bg-[#E8D8D2]/40 transition-colors border border-[#C9C1B8]/40 text-xs font-mono group"
                    >
                      <span className="font-semibold text-[#171514] group-hover:text-[#A76570]">
                        {s.name}
                      </span>
                      <span className="text-[#A79A8F]">{s.handle} ↗</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 lg:py-28 bg-[#E8D8D2]/30 border-t border-[#C9C1B8]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#A76570] font-semibold block mb-2">
              CLARITY & ENGAGEMENT
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl text-[#171514] tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-white border border-[#C9C1B8]/60 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-editorial text-lg sm:text-xl text-[#171514]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A76570] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm text-[#625A55] leading-relaxed font-light border-t border-[#C9C1B8]/30 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
