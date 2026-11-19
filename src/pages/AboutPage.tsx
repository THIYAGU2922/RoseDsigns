import React from 'react';
import { Compass, Award, Feather, HeartHandshake } from 'lucide-react';
import { BRAND } from '../data/brand';
import { ProcessSection } from '../components/ProcessSection';
import { PhilosophySection } from '../components/PhilosophySection';
import { FinalCta } from '../components/FinalCta';

interface AboutPageProps {
  onStartProject: () => void;
  onOpenBrandGuide: () => void;
  onContactUs: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onStartProject,
  onOpenBrandGuide,
  onContactUs,
}) => {
  const values = [
    {
      title: 'Restraint & Clarity',
      description: 'We believe true luxury speaks with quiet confidence. We strip away decorative excess to reveal the poetic core of your brand.',
      icon: Feather,
    },
    {
      title: 'Enduring Distinction',
      description: 'Trends expire in months; great identities blossom across generations. Every typographic choice and system is crafted for longevity.',
      icon: Award,
    },
    {
      title: 'Strategic Substance',
      description: 'Beautiful aesthetics without commercial clarity fail. We bridge intuitive design with market intelligence and commercial intent.',
      icon: Compass,
    },
    {
      title: 'Devoted Collaboration',
      description: 'We take on a limited number of commissions each quarter to guarantee intimate executive partnership from inception to launch.',
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="pt-24 lg:pt-32 bg-[#F7F3EC] text-[#171514]">
      {/* Header Banner */}
      <section className="py-16 lg:py-24 border-b border-[#C9C1B8]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#A76570]" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A76570] font-semibold">
              ABOUT THE STUDIO
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#171514] tracking-tight max-w-5xl">
            Where strategic intellect meets{' '}
            <span className="italic text-[#A76570] font-normal">
              editorial poetry.
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-[#625A55] font-light max-w-3xl leading-relaxed">
            RoseDsigns is a boutique creative, branding, and advertising studio dedicated to cultivating brands that command respect, ignite desire, and blossom across digital horizons.
          </p>
        </div>
      </section>

      {/* Main Studio Narrative & Asset Composition */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-square max-w-md mx-auto bg-[#F7F3EC] p-6 sm:p-8 border border-[#B08A57]/60 shadow-2xl flex items-center justify-center">
                <img
                  src={BRAND.assets.primaryLogo}
                  alt="RoseDsigns Studio Primary Logo"
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#B08A57]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#B08A57]">
                  OUR STORY & MISSION
                </span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-5xl text-[#171514] tracking-tight">
                Crafting identities that resonate with unmistakable presence.
              </h2>

              <p className="text-base sm:text-lg text-[#3C3C3C] font-light leading-relaxed">
                Founded with a conviction that modern design had grown formulaic and disposable, RoseDsigns was born to bring back genuine craftsmanship, editorial elegance, and profound storytelling to contemporary brand building.
              </p>

              <p className="text-base text-[#625A55] leading-relaxed">
                We believe that every brand carries an innate soul. Our role as creative directors and digital architects is not to impose an artificial veneer, but to excavate your authentic difference and magnify it through breathtaking typography, considered color palettes, bespoke digital platforms, and high-impact advertising campaigns.
              </p>

              <p className="text-base text-[#625A55] leading-relaxed">
                From esteemed dining institutions such as <strong>A2B Perth</strong> and <strong>Biriyani Box</strong> to cultural cinema ventures like <strong>Thirai Flicks</strong>, we shape experiences that turn curious patrons into lifelong advocates.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onStartProject}
                  className="px-6 py-3.5 bg-[#171514] text-[#F7F3EC] hover:bg-[#A76570] text-xs uppercase tracking-widest font-medium transition-colors shadow-lg"
                >
                  Initiate a Commission →
                </button>
                <button
                  onClick={onOpenBrandGuide}
                  className="px-6 py-3.5 border border-[#B08A57] text-[#171514] hover:bg-white text-xs uppercase tracking-widest font-mono transition-colors"
                >
                  View Brand Guidelines & Palette
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Studio Values Grid */}
      <section className="py-20 lg:py-28 bg-[#E8D8D2]/40 border-t border-b border-[#C9C1B8]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#A76570] font-semibold block mb-2">
              FOUNDATIONAL PILLARS
            </span>
            <h3 className="font-editorial text-3xl sm:text-5xl text-[#171514] tracking-tight">
              The principles that guide our craft.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-8 bg-white border border-[#C9C1B8]/60 shadow-md hover:border-[#A76570] transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F7F3EC] border border-[#B08A57]/30 flex items-center justify-center text-[#A76570] mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-editorial text-2xl text-[#171514] mb-3">{v.title}</h4>
                  <p className="text-xs text-[#625A55] leading-relaxed font-light">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Philosophy Section in Dark Mode */}
      <PhilosophySection />

      {/* Final CTA */}
      <FinalCta onStartProject={onStartProject} onContactUs={onContactUs} />
    </div>
  );
};
