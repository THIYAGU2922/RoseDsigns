import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { BRAND } from '../data/brand';

interface HeroProps {
  onExploreWork: () => void;
  onCreateProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onCreateProject }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-[#172536] text-[#F7F3EC] flex flex-col justify-between pt-28 lg:pt-36 overflow-hidden">
      {/* Background Ambience & Editorial Grids */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#A76570] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#183B32] blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(176, 138, 87, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(176, 138, 87, 0.08) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#DFC58F] to-transparent opacity-80" />

      {/* Main Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 my-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-6 h-[1px] bg-[#B08A57]" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#DFC58F]">
              ROSEDSIGNS / CREATIVE & DIGITAL STUDIO
            </span>
          </motion.div>

          {/* Main Headline: "Ideas that make your brand bloom." */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-editorial text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.03] tracking-tight font-normal text-[#F7F3EC]"
          >
            Ideas that make your brand{' '}
            <span className="italic font-light text-[#D9B1AE] relative inline-block">
              bloom.
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B08A57] to-[#A76570] opacity-70" />
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-[#E8D8D2]/90 leading-relaxed max-w-2xl font-light"
          >
            Distinctive identities. Considered websites. Stories that connect. We shape a
            presence that feels <span className="text-[#DFC58F] font-normal">unmistakably yours</span>.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              onClick={onExploreWork}
              className="group relative inline-flex items-center justify-between gap-6 px-7 py-4 bg-[#F7F3EC] text-[#171514] hover:bg-[#D9B1AE] transition-all duration-300 font-medium text-xs tracking-[0.2em] uppercase shadow-xl hover:shadow-2xl"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4 text-[#171514] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <button
              onClick={onCreateProject}
              className="group inline-flex items-center gap-3 px-6 py-4 border border-[#B08A57]/70 text-[#DFC58F] hover:text-[#F7F3EC] hover:border-[#D9B1AE] hover:bg-white/5 transition-all duration-300 text-xs tracking-[0.2em] uppercase font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B08A57] group-hover:text-[#D9B1AE]" />
              <span>Let's Create Something</span>
            </button>
          </motion.div>

          {/* Studio Metrics / Editorial Meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 pt-6 border-t border-[#B08A57]/20 grid grid-cols-3 gap-4 max-w-lg"
          >
            <div>
              <p className="font-editorial text-2xl text-[#DFC58F]">100%</p>
              <p className="text-[10px] tracking-wider text-[#A79A8F] uppercase mt-0.5">Custom Tailored</p>
            </div>
            <div>
              <p className="font-editorial text-2xl text-[#D9B1AE]">04</p>
              <p className="text-[10px] tracking-wider text-[#A79A8F] uppercase mt-0.5">Creative Pillars</p>
            </div>
            <div>
              <p className="font-editorial text-2xl text-[#DFC58F]">Chennai</p>
              <p className="text-[10px] tracking-wider text-[#A79A8F] uppercase mt-0.5">& Global Reach</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Pure Official RoseDsigns Logo Presentation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Outer Subtle Ambient Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#B08A57]/20 via-[#A76570]/20 to-[#DFC58F]/10 rounded-2xl blur-xl opacity-75" />

            {/* Elegant Double Border Frame around the Official Logo */}
            <div className="relative p-3 sm:p-4 bg-[#171514] border border-[#B08A57]/60 shadow-2xl backdrop-blur-md">
              <div className="relative aspect-square overflow-hidden bg-[#F7F3EC] p-4 sm:p-6 flex items-center justify-center border border-[#B08A57]/30">
                <img
                  src={BRAND.assets.primaryLogo}
                  alt="RoseDsigns — Official Brand Logo"
                  className="w-full h-full object-contain filter drop-shadow-md hover:scale-102 transition-transform duration-700"
                />
              </div>

              {/* Bottom Subtle Signature Tag */}
              <div className="mt-3 px-3 py-2 bg-[#172536]/90 border border-[#B08A57]/30 flex items-center justify-between text-xs">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#DFC58F] font-mono">
                  OFFICIAL BRAND LOGO
                </span>
                <span className="text-[10px] tracking-wider text-[#D9B1AE] font-mono">
                  CREATIVE · BRANDING · ADS
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ticker / Running Editorial Ribbon */}
      <div className="relative w-full border-t border-b border-[#B08A57]/30 bg-[#171514]/90 py-3 overflow-hidden select-none">
        <div className="flex whitespace-nowrap text-xs font-editorial tracking-[0.22em] uppercase text-[#DFC58F]/80">
          <div className="inline-flex items-center gap-8 animate-marquee">
            <span>BRANDING ✧ WEBSITES ✧ CONTENT ✧ DIGITAL MARKETING ✧ BRANDS THAT BLOOM</span>
            <span className="text-[#A76570]">✦</span>
            <span>STRATEGY MEETS CREATIVITY ✧ THE EDIT / SELECTED WORK</span>
            <span className="text-[#A76570]">✦</span>
            <span>CRAFTED IN CHENNAI ✧ RESONATING GLOBALLY</span>
            <span className="text-[#A76570]">✦</span>
            <span>BRANDING ✧ WEBSITES ✧ CONTENT ✧ DIGITAL MARKETING ✧ BRANDS THAT BLOOM</span>
          </div>
        </div>
      </div>

      {/* Small Scroll Indicator */}
      <div className="py-4 flex justify-center items-center">
        <motion.a
          href="#intro"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#A79A8F] hover:text-[#DFC58F] transition-colors focus:outline-none"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3 h-3 text-[#B08A57]" />
        </motion.a>
      </div>
    </section>
  );
};
