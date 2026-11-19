import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Radio } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'Understand the brand, audience, goals and vision.',
      description:
        'Every distinguished identity begins with radical listening. We immerse ourselves in your origin story, interrogate competitive landscapes, map high-value audience personas, and define an uncompromising strategic north star before drawing a single sketch.',
      details: [
        'Stakeholder & Founder Immersion',
        'Market & Competitor Deconstruction',
        'Audience Archetypes & Positioning Matrix',
        'Creative Direction & Moodboard Synthesis',
      ],
      icon: Search,
      accent: '#B08A57',
    },
    {
      number: '02',
      title: 'CREATE',
      subtitle: 'Develop a distinctive identity and digital experience.',
      description:
        'Where rigorous strategy transforms into sensual form. We sculpt bespoke typography, curate evocative color palettes, design tactile stationery, and engineer custom digital architecture that breathes with life and intentionality.',
      details: [
        'Bespoke Wordmarks & Symbolic Monograms',
        'Editorial Typography & Chromatic Systems',
        'Figma UI/UX & Responsive Prototypes',
        'Frontend Engineering & Motion Choreography',
      ],
      icon: PenTool,
      accent: '#A76570',
    },
    {
      number: '03',
      title: 'CONNECT',
      subtitle: 'Bring the brand to life through creative communication and marketing.',
      description:
        'A brand blooms only when it touches the world. We deploy your identity across dynamic digital campaigns, cinematic video reels, mouth-watering social narratives, and high-impact physical touchpoints that build enduring commercial reverence.',
      details: [
        'Omnichannel Campaign Rollout',
        'Social Storytelling & Short-Form Video',
        'Production Guidelines & Asset Handover',
        'Continuous Growth & Performance Advisory',
      ],
      icon: Radio,
      accent: '#183B32',
    },
  ];

  return (
    <section className="py-24 lg:py-36 bg-[#F7F3EC] text-[#171514] border-t border-b border-[#C9C1B8]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#A76570]" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A76570] font-semibold">
              OUR METHODOLOGY
            </span>
            <span className="w-6 h-[1px] bg-[#A76570]" />
          </div>
          
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#171514] tracking-tight">
            From an idea to an{' '}
            <span className="italic text-[#A76570] block sm:inline font-normal">
              unforgettable identity.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#625A55] font-light leading-relaxed">
            Our creative process is deliberate, collaborative, and uncompromising in its standard of craftsmanship.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          
          {/* Subtle connecting line across desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-gradient-to-r from-[#B08A57]/30 via-[#A76570]/40 to-[#183B32]/30 pointer-events-none" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="relative bg-white/70 backdrop-blur-sm p-8 sm:p-10 border border-[#C9C1B8]/60 shadow-lg flex flex-col justify-between hover:border-[#A76570] transition-all duration-300 group"
              >
                <div>
                  {/* Top Step Header */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-editorial text-4xl sm:text-5xl text-[#171514]/25 group-hover:text-[#A76570] transition-colors">
                      {step.number}
                    </span>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300"
                      style={{
                        borderColor: `${step.accent}50`,
                        backgroundColor: `${step.accent}15`,
                        color: step.accent,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-editorial text-2xl text-[#171514] tracking-tight group-hover:text-[#A76570] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono tracking-wider uppercase text-[#B08A57] mt-1.5 font-medium">
                    {step.subtitle}
                  </p>

                  {/* Body description */}
                  <p className="mt-4 text-sm text-[#625A55] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Sub-steps / Deliverables checklist */}
                <div className="mt-8 pt-6 border-t border-[#C9C1B8]/30">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#A79A8F] block mb-3">
                    KEY MILESTONES
                  </span>
                  <ul className="space-y-2 text-xs text-[#3C3C3C]">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A76570] mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
