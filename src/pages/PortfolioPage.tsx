import React from 'react';
import { PortfolioGrid } from '../components/PortfolioGrid';
import type { Project } from '../types';
import { FinalCta } from '../components/FinalCta';

interface PortfolioPageProps {
  onSelectProject: (project: Project) => void;
  onStartProject: () => void;
  onContactUs: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onSelectProject,
  onStartProject,
  onContactUs,
}) => {
  return (
    <div className="pt-24 lg:pt-32 bg-[#F7F3EC] text-[#171514]">
      {/* Portfolio Header */}
      <section className="py-16 lg:py-24 border-b border-[#C9C1B8]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#A76570]" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A76570] font-semibold">
              THE WORK ARCHIVE
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#171514] tracking-tight max-w-5xl">
            Distinctive brands.{' '}
            <span className="italic text-[#A76570] font-normal">
              Thoughtfully brought to life.
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-[#625A55] font-light max-w-3xl leading-relaxed">
            Explore our curated body of work spanning brand identity systems, flagship responsive web platforms, social video narratives, and creative advertising.
          </p>
        </div>
      </section>

      {/* Complete Portfolio Grid with All Projects */}
      <PortfolioGrid onSelectProject={onSelectProject} />

      {/* Final CTA */}
      <FinalCta onStartProject={onStartProject} onContactUs={onContactUs} />
    </div>
  );
};
