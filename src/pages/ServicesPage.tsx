import React from 'react';
import { ArrowUpRight, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { FinalCta } from '../components/FinalCta';

interface ServicesPageProps {
  onInquireService: (serviceTitle: string) => void;
  onContactUs: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onInquireService, onContactUs }) => {
  return (
    <div className="pt-24 lg:pt-32 bg-[#F7F3EC] text-[#171514]">
      {/* Services Header */}
      <section className="py-16 lg:py-24 border-b border-[#C9C1B8]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#A76570]" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A76570] font-semibold">
              OUR CAPABILITIES & EXPERTISE
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#171514] tracking-tight max-w-5xl">
            Considered services for brands ready to{' '}
            <span className="italic text-[#A76570] font-normal">
              blossom.
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-[#625A55] font-light max-w-3xl leading-relaxed">
            From foundational strategic positioning and bespoke visual identities to responsive flagship websites and multi-channel campaigns, we deliver holistic creative excellence.
          </p>
        </div>
      </section>

      {/* Deep-Dive Service Sections (Each of the 4 Pillars) */}
      <div className="divide-y divide-[#C9C1B8]/40">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.id}
              className="py-20 lg:py-32 scroll-mt-24"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  
                  {/* Visual Frame */}
                  <div className={`lg:col-span-5 ${isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                    <div className="relative p-3 bg-white border border-[#B08A57]/40 shadow-2xl">
                      <div className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-[#171514]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover filter contrast-[1.05] hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/70 via-transparent to-transparent pointer-events-none" />
                        
                        <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#172536]/90 backdrop-blur-md border border-[#B08A57]/40 text-[#F7F3EC]">
                          <span className="text-[10px] font-mono tracking-widest uppercase text-[#DFC58F] block">
                            PILLAR {service.number} ARCHITECTURE
                          </span>
                          <span className="font-editorial text-lg text-[#F7F3EC]">
                            {service.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Breakdown */}
                  <div className={`lg:col-span-7 ${isEven ? 'order-2 lg:order-2' : 'order-2 lg:order-1'} space-y-6`}>
                    <div className="inline-flex items-center gap-2">
                      <span className="font-mono text-sm font-semibold text-[#A76570] tracking-widest">
                        {service.number} / CORE DISCIPLINE
                      </span>
                    </div>

                    <h2 className="font-editorial text-3xl sm:text-5xl text-[#171514] tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-base sm:text-lg text-[#3C3C3C] leading-relaxed font-light">
                      {service.longDescription}
                    </p>

                    {/* Capabilities Tags */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[#B08A57] mb-3">
                        DISCIPLINE CAPABILITIES
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="px-3 py-1.5 bg-[#E8D8D2]/60 text-[#171514] text-xs font-medium border border-[#C9C1B8]/40"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tangible Deliverables */}
                    <div className="pt-4 border-t border-[#C9C1B8]/40">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[#B08A57] mb-3">
                        TANGIBLE DELIVERABLES
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((del) => (
                          <div key={del} className="flex items-start gap-2 text-xs text-[#625A55]">
                            <CheckCircle2 className="w-4 h-4 text-[#A76570] shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <button
                        onClick={() => onInquireService(service.title)}
                        className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#171514] text-[#F7F3EC] hover:bg-[#A76570] text-xs uppercase tracking-widest font-semibold transition-colors shadow-lg"
                      >
                        <span>Inquire About {service.title}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Tech & Creative Standards Section */}
      <section className="py-20 lg:py-28 bg-[#172536] text-[#F7F3EC] border-t border-[#B08A57]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#DFC58F] block mb-2">
              TECHNICAL & CREATIVE EXCELLENCE
            </span>
            <h3 className="font-editorial text-3xl sm:text-5xl text-[#F7F3EC] tracking-tight">
              Crafted without compromise.
            </h3>
            <p className="mt-4 text-sm sm:text-base text-[#E8D8D2]/80 font-light">
              We leverage world-class creative tools and modern engineering architectures to ensure your digital touchpoints are as robust as they are breathtaking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#171514] border border-[#B08A57]/40 shadow-xl space-y-3">
              <Layers className="w-8 h-8 text-[#DFC58F]" />
              <h4 className="font-editorial text-2xl text-[#F7F3EC]">Design Systems</h4>
              <p className="text-xs text-[#C9C1B8] leading-relaxed">
                Figma-native design systems, tokenized variables, responsive auto-layouts, and component libraries that scale seamlessly as your brand expands.
              </p>
            </div>

            <div className="p-8 bg-[#171514] border border-[#B08A57]/40 shadow-xl space-y-3">
              <Cpu className="w-8 h-8 text-[#D9B1AE]" />
              <h4 className="font-editorial text-2xl text-[#F7F3EC]">Modern Engineering</h4>
              <p className="text-xs text-[#C9C1B8] leading-relaxed">
                Semantic React, TypeScript, Tailwind CSS, and headless architectures with 95+ Core Web Vitals, rapid loading speeds, and accessibility.
              </p>
            </div>

            <div className="p-8 bg-[#171514] border border-[#B08A57]/40 shadow-xl space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#DFC58F]" />
              <h4 className="font-editorial text-2xl text-[#F7F3EC]">Enduring Relevance</h4>
              <p className="text-xs text-[#C9C1B8] leading-relaxed">
                Brand assets prepared for high-fidelity physical print, outdoor display, social video algorithms, and multi-device digital displays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        onStartProject={() => onInquireService('Brand & Digital Transformation')}
        onContactUs={onContactUs}
      />
    </div>
  );
};
