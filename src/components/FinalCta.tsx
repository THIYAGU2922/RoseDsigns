import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { BRAND } from '../data/brand';

interface FinalCtaProps {
  onStartProject: () => void;
  onContactUs: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onStartProject, onContactUs }) => {
  return (
    <section className="py-28 lg:py-40 bg-gradient-to-b from-[#172536] to-[#171514] text-[#F7F3EC] relative overflow-hidden">
      {/* Decorative backdrop elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#A76570] rounded-full blur-[180px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Monogram Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full p-2 bg-[#F7F3EC]/5 border border-[#B08A57]/50 flex items-center justify-center mb-8 shadow-2xl backdrop-blur-sm"
        >
          <img
            src={BRAND.assets.monogram}
            alt="RoseDsigns Monogram"
            className="w-full h-full object-contain filter drop-shadow"
          />
        </motion.div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-[1px] bg-[#DFC58F]" />
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#DFC58F] font-semibold">
            COMMISSION A PROJECT
          </span>
          <span className="w-8 h-[1px] bg-[#DFC58F]" />
        </div>

        {/* Heading: "Let's make something bloom." */}
        <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F7F3EC] tracking-tight leading-[1.02]">
          Let’s make something{' '}
          <span className="italic text-[#D9B1AE] block sm:inline font-light">
            bloom.
          </span>
        </h2>

        {/* Description: "Have an idea, a vision or a brand waiting to grow? Let's create something meaningful together." */}
        <p className="mt-8 text-lg sm:text-2xl text-[#E8D8D2]/90 leading-relaxed font-light max-w-2xl mx-auto">
          Have an idea, a vision or a brand waiting to grow? Let's create something meaningful together.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          <button
            onClick={onStartProject}
            className="group relative inline-flex items-center justify-between gap-6 px-8 py-4 bg-[#F7F3EC] text-[#171514] hover:bg-[#D9B1AE] transition-all duration-300 font-medium text-xs tracking-[0.2em] uppercase shadow-2xl hover:shadow-3xl"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 text-[#171514] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <button
            onClick={onContactUs}
            className="group inline-flex items-center gap-3 px-8 py-4 border border-[#B08A57] text-[#DFC58F] hover:text-[#F7F3EC] hover:border-[#D9B1AE] hover:bg-white/5 transition-all duration-300 text-xs tracking-[0.2em] uppercase font-medium"
          >
            <Mail className="w-4 h-4 text-[#B08A57] group-hover:text-[#D9B1AE]" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Studio Availability Status */}
        <div className="mt-12 inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-[#B08A57]/30 text-xs text-[#E8D8D2]/80">
          <span className="w-2 h-2 rounded-full bg-[#183B32] border border-[#DFC58F] animate-ping" />
          <span className="font-mono text-[11px] tracking-wider uppercase text-[#DFC58F]">
            STUDIO STATUS: ACCEPTING SELECT COMMISSIONS FOR 2025/2026
          </span>
        </div>

      </div>
    </section>
  );
};
