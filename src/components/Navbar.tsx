import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import type { PageId } from '../types';
import { BRAND } from '../data/brand';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, sectionId?: string) => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageId; sectionId?: string }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Our Work', page: 'work' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageId, sectionId?: string) => {
    onNavigate(page, sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#172536]/95 backdrop-blur-md border-b border-[#B08A57]/30 py-3 shadow-xl'
            : 'bg-[#172536]/70 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none border-b border-[#B08A57]/20 py-5 lg:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            aria-label="RoseDsigns Homepage"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-1 bg-[#F7F3EC]/10 border border-[#B08A57]/40 flex items-center justify-center transition-all duration-300 group-hover:border-[#D9B1AE] group-hover:scale-105">
              <img
                src={BRAND.assets.monogram}
                alt="RoseDsigns Monogram"
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-2xl sm:text-3xl tracking-tight text-[#E6CDA6] group-hover:text-[#D9B1AE] transition-colors leading-none font-medium">
                RoseDsigns
              </span>
              <span className="text-[9px] tracking-[0.24em] uppercase text-[#B08A57] font-semibold mt-1">
                Creative · Branding · Ads
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page, item.sectionId)}
                  className={`relative text-sm tracking-wide transition-colors py-1 focus:outline-none ${
                    isActive
                      ? 'text-[#F7F3EC] font-semibold'
                      : 'text-[#E8D8D2]/80 hover:text-[#D9B1AE]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B08A57] via-[#D9B1AE] to-[#A76570]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenInquiry}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-[#B08A57] text-[#F7F3EC] bg-gradient-to-r from-[#172536] to-[#183B32] hover:from-[#A76570] hover:to-[#672D39] text-xs font-medium tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D9B1AE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#E8D8D2] hover:text-[#D9B1AE] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#171514]/98 backdrop-blur-xl pt-24 px-6 pb-10 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#B08A57] border-b border-[#B08A57]/20 pb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D9B1AE]" />
                <span>Navigate Studio</span>
              </div>

              {navItems.map((item, idx) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleNavClick(item.page, item.sectionId)}
                  className={`text-left text-2xl font-editorial tracking-tight py-2 transition-colors flex items-center justify-between border-b border-white/5 ${
                    currentPage === item.page ? 'text-[#D9B1AE] font-semibold pl-2' : 'text-[#F7F3EC]/80'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-sans tracking-widest text-[#B08A57]">
                    0{idx + 1}
                  </span>
                </motion.button>
              ))}

              <div className="pt-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full py-4 text-center border border-[#B08A57] text-[#F7F3EC] bg-gradient-to-r from-[#672D39] to-[#172536] uppercase tracking-widest text-xs font-medium"
                >
                  Let's Create Something Together →
                </button>
              </div>
            </div>

            <div className="border-t border-[#B08A57]/20 pt-6">
              <p className="text-xs text-[#A79A8F]">Inquiries & Commissions</p>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-sm text-[#D9B1AE] hover:underline block font-mono mt-1"
              >
                {BRAND.email}
              </a>
              <div className="flex gap-4 mt-4">
                {BRAND.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#E8D8D2]/70 hover:text-[#D9B1AE]"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
