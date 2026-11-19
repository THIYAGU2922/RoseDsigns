import React from 'react';
import { ArrowUp, Mail, Sparkles } from 'lucide-react';
import type { PageId } from '../types';
import { BRAND } from '../data/brand';
import { InstagramIcon, FacebookIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';

interface FooterProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
  onOpenBrandGuide: () => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBrandGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Studio', page: 'about' },
    { label: 'Capabilities & Services', page: 'services' },
    { label: 'Selected Work', page: 'work' },
    { label: 'Contact & Inquiries', page: 'contact' },
  ];

  const serviceLinks = [
    'Brand Identity & Strategy',
    'Website Design & Development',
    'Digital Marketing & Campaigns',
    'Creative & Advertising',
  ];

  return (
    <footer className="bg-[#171514] text-[#F7F3EC] border-t border-[#B08A57]/30 pt-20 pb-12 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#183B32] rounded-full blur-[140px]" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#A76570] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tier: Big Brand Identity & Back to Top */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-14 border-b border-[#B08A57]/20 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full p-2 bg-[#F7F3EC]/10 border border-[#B08A57]/40 flex items-center justify-center shrink-0">
              <img
                src={BRAND.assets.monogram}
                alt="RoseDsigns Monogram"
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            <div>
              <span className="font-editorial text-3xl sm:text-4xl text-[#E6CDA6] font-medium tracking-tight block">
                RoseDsigns
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#B08A57] font-mono mt-0.5 block">
                BRANDS THAT BLOOM ✧ CREATIVE, BRANDING & ADVERTISING
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBrandGuide}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#B08A57]/15 border border-[#B08A57]/40 text-[#DFC58F] hover:bg-[#B08A57]/25 transition-colors text-xs font-mono uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D9B1AE]" />
              <span>Official Brand Palette & Specs</span>
            </button>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-4 py-2 border border-[#B08A57]/40 text-[#E8D8D2] hover:text-[#DFC58F] hover:border-[#DFC58F] transition-all text-xs uppercase tracking-widest font-mono"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#B08A57] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Middle Tier: 4 Columns of Nav, Services, Contact & Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 py-16 border-b border-[#B08A57]/20">
          
          {/* Col 1: Studio Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#B08A57] block">
              THE STUDIO
            </span>
            <p className="text-sm text-[#C9C1B8] leading-relaxed font-light">
              RoseDsigns is an independent branding and digital design studio. We shape purposeful brand identities, considered websites, and compelling digital narratives that resonate deeply and endure gracefully.
            </p>
            <div className="pt-2">
              <span className="text-xs text-[#A79A8F] block">Studio Location:</span>
              <span className="text-sm text-[#DFC58F] font-light">Chennai, India ✦ Global Commissions</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#B08A57] block">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-[#C9C1B8] hover:text-[#D9B1AE] transition-colors focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#B08A57] block">
              EXPERTISE
            </span>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((srv) => (
                <li key={srv}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-[#C9C1B8] hover:text-[#DFC58F] transition-colors text-left focus:outline-none"
                  >
                    {srv}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Contact & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#B08A57] block">
              DIRECT INQUIRIES
            </span>
            <p className="text-xs text-[#A79A8F]">
              For new projects, collaborations, and press inquiries:
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2 text-sm text-[#D9B1AE] hover:text-[#F7F3EC] transition-colors font-mono"
            >
              <Mail className="w-4 h-4 text-[#B08A57]" />
              <span>{BRAND.email}</span>
            </a>

            <div className="pt-3">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#A79A8F] block mb-2.5">
                VERIFIED SOCIAL MEDIA
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/a2bperth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-[#B08A57]/30 flex items-center justify-center text-[#E8D8D2] hover:text-[#D9B1AE] hover:border-[#D9B1AE] transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/thiraiflicks1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-[#B08A57]/30 flex items-center justify-center text-[#E8D8D2] hover:text-[#D9B1AE] hover:border-[#D9B1AE] transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=WGW4HYoVm_I"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-[#B08A57]/30 flex items-center justify-center text-[#E8D8D2] hover:text-[#D9B1AE] hover:border-[#D9B1AE] transition-all"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/company/rosedsigns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-[#B08A57]/30 flex items-center justify-center text-[#E8D8D2] hover:text-[#D9B1AE] hover:border-[#D9B1AE] transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Legal, recruitment attribution & copyright */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A79A8F] gap-4">
          <p>
            © {new Date().getFullYear()} RoseDsigns. All rights reserved. Ideas that make your brand bloom.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#B08A57]">Recruitment Assignment Submission</span>
            <span>·</span>
            <button onClick={onOpenBrandGuide} className="hover:text-[#DFC58F] underline">
              Brand Guidelines
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
