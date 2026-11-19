import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Plus, Minus } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';

interface ServicesSectionProps {
  onViewAllServices: () => void;
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onViewAllServices,
  onSelectService,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="services" className="py-24 lg:py-36 bg-[#172536] text-[#F7F3EC] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#B08A57] rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#183B32] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#B08A57]/30 pb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B08A57]" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#DFC58F]">
                OUR CAPABILITIES
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#F7F3EC] tracking-tight">
              Creative thinking.{' '}
              <span className="italic text-[#D9B1AE] block sm:inline font-normal">
                Meaningful impact.
              </span>
            </h2>
          </div>

          <button
            onClick={onViewAllServices}
            className="group inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#DFC58F] hover:text-[#F7F3EC] transition-colors focus:outline-none"
          >
            <span>Explore All Capabilities</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Interactive Editorial Services Showcase: Split layout on Desktop, Accordion on Mobile */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Service List Accordion / Tabs */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-[#B08A57]/20 border-t border-b border-[#B08A57]/20">
            {SERVICES_DATA.map((service, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={service.id}
                  className={`group transition-all duration-300 py-6 sm:py-8 cursor-pointer ${
                    isActive ? 'bg-white/[0.03] px-4 -mx-4' : 'hover:bg-white/[0.01]'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs text-[#B08A57] tracking-widest">
                        {service.number}
                      </span>
                      <h3
                        className={`font-editorial text-2xl sm:text-3xl tracking-tight transition-colors ${
                          isActive ? 'text-[#DFC58F]' : 'text-[#F7F3EC]/85 group-hover:text-[#F7F3EC]'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-[#B08A57]/40 flex items-center justify-center text-[#B08A57] group-hover:border-[#D9B1AE] group-hover:text-[#D9B1AE] transition-all">
                      {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Expandable Content for Mobile / Active View */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm sm:text-base text-[#E8D8D2]/90 leading-relaxed font-light">
                          {service.shortDescription}
                        </p>

                        {/* Capabilities Checklist */}
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.capabilities.slice(0, 4).map((cap) => (
                            <div key={cap} className="flex items-center gap-2 text-xs text-[#DFC58F]/90">
                              <Check className="w-3.5 h-3.5 text-[#D9B1AE] shrink-0" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>

                        {/* Mobile preview image */}
                        <div className="mt-6 block lg:hidden aspect-[16/10] overflow-hidden border border-[#B08A57]/40">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="mt-6 pt-4 flex items-center gap-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectService(service.id);
                            }}
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#F7F3EC] bg-[#A76570] hover:bg-[#672D39] px-5 py-2.5 transition-colors"
                          >
                            <span>Explore Service Details</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: Large Editorial Visual Showcase (Desktop) */}
          <div className="hidden lg:block lg:col-span-6 sticky top-28">
            <div className="relative p-4 bg-[#171514] border border-[#B08A57]/40 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-[4/3] overflow-hidden bg-black"
                >
                  <img
                    src={SERVICES_DATA[activeTab].image}
                    alt={SERVICES_DATA[activeTab].title}
                    className="w-full h-full object-cover filter contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171514] via-transparent to-transparent pointer-events-none" />

                  {/* Floating Pillar Details */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#172536]/90 backdrop-blur-md border border-[#B08A57]/40">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[#DFC58F] font-mono">
                        PILLAR {SERVICES_DATA[activeTab].number} SPECIFICATION
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#A76570]" />
                    </div>
                    <p className="font-editorial text-xl text-[#F7F3EC]">
                      {SERVICES_DATA[activeTab].title}
                    </p>
                    <p className="text-xs text-[#E8D8D2]/80 mt-1 leading-relaxed">
                      {SERVICES_DATA[activeTab].longDescription.slice(0, 140)}...
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
