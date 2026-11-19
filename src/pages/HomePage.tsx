import React from 'react';
import { Hero } from '../components/Hero';
import { IntroAbout } from '../components/IntroAbout';
import { ServicesSection } from '../components/ServicesSection';
import { PortfolioGrid } from '../components/PortfolioGrid';
import { ProcessSection } from '../components/ProcessSection';
import { PhilosophySection } from '../components/PhilosophySection';
import { FinalCta } from '../components/FinalCta';
import type { PageId, Project } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
  onSelectProject: (project: Project) => void;
  onOpenInquiry: (preselectedService?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProject,
  onOpenInquiry,
}) => {
  return (
    <div className="flex flex-col">
      {/* A. Hero Section */}
      <Hero
        onExploreWork={() => onNavigate('work')}
        onCreateProject={() => onOpenInquiry()}
      />

      {/* B. Introduction / About Section */}
      <IntroAbout onDiscoverStory={() => onNavigate('about')} />

      {/* C. Services Section */}
      <ServicesSection
        onViewAllServices={() => onNavigate('services')}
        onSelectService={() => {
          onNavigate('services');
        }}
      />

      {/* D. Selected Work / Portfolio Section */}
      <PortfolioGrid
        limit={6}
        onSelectProject={onSelectProject}
        onViewAllProjects={() => onNavigate('work')}
      />

      {/* E. Creative Process Section */}
      <ProcessSection />

      {/* F. Brand Philosophy Section */}
      <PhilosophySection />

      {/* G. Final CTA Section */}
      <FinalCta
        onStartProject={() => onOpenInquiry()}
        onContactUs={() => onNavigate('contact')}
      />
    </div>
  );
};
