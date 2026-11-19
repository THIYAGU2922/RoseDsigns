import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Eye, HeartHandshake } from 'lucide-react';
import { BRAND } from '../data/brand';

interface IntroAboutProps {
  onDiscoverStory: () => void;
}

export const IntroAbout: React.FC<IntroAboutProps> = ({ onDiscoverStory }) => {
  return (
    <section id="intro" className="relative py-24 lg:py-36 bg-[#F7F3EC] text-[#171514] overflow-hidden">
      {/* Delicate background rule */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Imagery & Brand Emblem */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md">
              {/* Main Photo Frame */}
              <div className="relative aspect-[4/5] bg-[#E8D8D2] p-3 border border-[#B08A57]/30 shadow-2xl">
                <div className="relative w-full h-full overflow-hidden bg-[#171514]">
                  <img
                    src="/assets/thirai-full-frame.webp"
                    alt="Creative Storytelling by RoseDsigns"
                    className="w-full h-full object-cover filter contrast-[1.05] hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Subtle Text in frame */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#D9B1AE] font-mono">
                      EDITORIAL VISION
                    </p>
                    <p className="font-editorial text-xl text-[#F7F3EC] mt-1">
                      Intentionality in every detail.
                    </p>
                  </div>
                </div>
              </div>

              {/* Offset Secondary Emblem Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute -bottom-8 -right-6 sm:-right-8 w-44 sm:w-52 p-4 bg-[#172536] text-[#F7F3EC] border border-[#B08A57]/50 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={BRAND.assets.emblem}
                    alt="Emblem"
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#DFC58F] block">
                      STUDIO PRINCIPLE
                    </span>
                    <span className="font-editorial text-sm text-[#D9B1AE]">
                      Timeless Distinction
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-[#E8D8D2]/80 mt-2 leading-relaxed">
                  We don’t follow fleeting fads. We craft identities that stand the test of time.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-[#A76570]" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A76570] font-semibold">
                THE STUDIO ETHOS
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#171514] leading-[1.08] tracking-tight">
              More than design.{' '}
              <span className="italic text-[#A76570] font-normal block mt-1">
                We create brand experiences.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 text-lg sm:text-xl text-[#3C3C3C] leading-relaxed font-light">
              At <strong className="font-medium text-[#171514]">RoseDsigns</strong>, we believe every brand has a story worth telling. Through thoughtful design, strategic creativity and digital innovation, we help businesses build meaningful connections with their audiences.
            </p>

            <p className="mt-4 text-base text-[#625A55] leading-relaxed">
              Based in Chennai and working across borders, we collaborate with ambitious founders, restaurateurs, cultural leaders, and emerging visionaries who understand that memorable brands are grown through deep discipline and genuine craft.
            </p>

            {/* 3 Pillars of Philosophy */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#C9C1B8]/40">
              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-full bg-[#E8D8D2] flex items-center justify-center text-[#672D39] mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-editorial text-lg text-[#171514] font-medium">Strategic Vision</h4>
                <p className="text-xs text-[#625A55] mt-1.5 leading-normal">
                  Grounding visual decisions in commercial objectives and market distinction.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-full bg-[#E8D8D2] flex items-center justify-center text-[#183B32] mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-editorial text-lg text-[#171514] font-medium">Artistic Rigor</h4>
                <p className="text-xs text-[#625A55] mt-1.5 leading-normal">
                  Refined typography, nuanced palettes, and layouts that command admiration.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-full bg-[#E8D8D2] flex items-center justify-center text-[#A76570] mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-editorial text-lg text-[#171514] font-medium">Enduring Affinity</h4>
                <p className="text-xs text-[#625A55] mt-1.5 leading-normal">
                  Transforming fleeting first impressions into lifelong customer loyalty.
                </p>
              </div>
            </div>

            {/* Discover CTA */}
            <div className="mt-10">
              <button
                onClick={onDiscoverStory}
                className="group inline-flex items-center gap-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#171514] hover:text-[#A76570] transition-colors pb-1 border-b-2 border-[#171514] hover:border-[#A76570]"
              >
                <span>Discover Our Story</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
