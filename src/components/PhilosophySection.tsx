import React from 'react';
import { Quote, Award, ShieldCheck, Heart } from 'lucide-react';
import { BRAND } from '../data/brand';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-28 lg:py-40 bg-[#171514] text-[#F7F3EC] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#672D39] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#B08A57] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Frame with Antique Gold Border */}
        <div className="relative p-8 sm:p-14 lg:p-20 border border-[#B08A57]/35 bg-[#172536]/40 backdrop-blur-md shadow-2xl">
          
          {/* Corner Floral / Monogram Accents */}
          <div className="absolute top-4 left-4 text-[#B08A57]/40 text-xs font-mono">✦ 01</div>
          <div className="absolute top-4 right-4 text-[#B08A57]/40 text-xs font-mono">EST. CHENNAI ✦</div>
          <div className="absolute bottom-4 left-4 text-[#B08A57]/40 text-xs font-mono">✦ CRAFT</div>
          <div className="absolute bottom-4 right-4 text-[#B08A57]/40 text-xs font-mono">BLOOM ✦</div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Big Philosophy Statement */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-[1px] bg-[#B08A57]" />
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#DFC58F] font-semibold">
                  BRAND PHILOSOPHY
                </span>
              </div>

              {/* Heading: "Rooted in purpose. Made to be seen." */}
              <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#F7F3EC] tracking-tight leading-[1.08]">
                Rooted in purpose.{' '}
                <span className="italic text-[#D9B1AE] block sm:inline font-normal">
                  Made to be seen.
                </span>
              </h2>

              {/* Statement */}
              <div className="relative mt-8 sm:mt-10 pl-6 border-l-2 border-[#B08A57]">
                <Quote className="w-8 h-8 text-[#A76570]/40 absolute -top-4 -left-3" />
                <p className="font-editorial text-xl sm:text-2xl lg:text-3xl text-[#E8D8D2] leading-snug italic font-normal">
                  "We create meaningful brands, compelling content and impactful campaigns that help businesses stand out and grow."
                </p>
              </div>

              <p className="mt-8 text-base text-[#C9C1B8] leading-relaxed font-light max-w-xl">
                We believe distinction isn’t accidental — it is the reward of patience, restraint, and an uncompromising dedication to visual poetry. When brand essence aligns with thoughtful execution, business blooms effortlessly.
              </p>

              {/* 3 Core Tenets */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#B08A57]/20">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#DFC58F]">
                    <ShieldCheck className="w-4 h-4 text-[#D9B1AE]" />
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold">Integrity</span>
                  </div>
                  <p className="text-xs text-[#A79A8F]">Honoring the authentic core of every founder's vision.</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#DFC58F]">
                    <Award className="w-4 h-4 text-[#D9B1AE]" />
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold">Editorial Rigor</span>
                  </div>
                  <p className="text-xs text-[#A79A8F]">Every curve, kerning pair, and pixel treated with reverence.</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#DFC58F]">
                    <Heart className="w-4 h-4 text-[#D9B1AE]" />
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold">Resonance</span>
                  </div>
                  <p className="text-xs text-[#A79A8F]">Creating work that elicits genuine human affection.</p>
                </div>
              </div>

            </div>

            {/* Right Column: Official RoseDsigns Logo Presentation */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                <div className="relative p-3 bg-[#171514] border border-[#B08A57]/60 shadow-2xl">
                  <div className="bg-[#F7F3EC] p-6 border border-[#B08A57]/30 aspect-square flex items-center justify-center">
                    <img
                      src={BRAND.assets.primaryLogo}
                      alt="RoseDsigns Official Brand Logo"
                      className="w-full h-full object-contain filter drop-shadow-md"
                    />
                  </div>
                  
                  {/* Subtle antique badge */}
                  <div className="mt-3 px-3 py-2 bg-[#172536] border border-[#DFC58F]/40 text-xs flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#DFC58F] block">
                      OFFICIAL EMBLEM & LOGO
                    </span>
                    <span className="text-xs font-editorial text-[#D9B1AE]">
                      RoseDsigns Studio
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
