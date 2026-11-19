import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import type { Project, ProjectCategory } from '../types';
import { PROJECTS_DATA } from '../data/projects';

interface PortfolioGridProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects?: () => void;
  limit?: number;
  initialCategory?: ProjectCategory;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  onSelectProject,
  onViewAllProjects,
  limit,
  initialCategory = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(initialCategory);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Works', value: 'all' },
    { label: 'Branding', value: 'Branding' },
    { label: 'Website Design', value: 'Website Design' },
    { label: 'Digital Campaigns', value: 'Digital Campaigns' },
    { label: 'Creative Advertising', value: 'Creative Advertising' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="work" className="py-24 lg:py-36 bg-[#F7F3EC] text-[#171514] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#C9C1B8]/60 pb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#A76570]" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A76570] font-semibold">
                01 / THE PORTFOLIO
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#171514] tracking-tight">
              Distinctive brands.{' '}
              <span className="italic text-[#A76570] block sm:inline font-normal">
                Thoughtfully brought to life.
              </span>
            </h2>
            <p className="mt-4 text-base text-[#625A55] max-w-xl font-light">
              A curated selection of identities, digital experiences, and stories across food, hospitality, culture, and entertainment.
            </p>
          </div>

          {onViewAllProjects && (
            <button
              onClick={onViewAllProjects}
              className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#171514] hover:text-[#A76570] transition-colors pb-1 border-b-2 border-[#171514] hover:border-[#A76570] self-start md:self-end"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-xs text-[#A79A8F] uppercase tracking-widest mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-300 focus:outline-none ${
                  isSelected
                    ? 'bg-[#171514] text-[#F7F3EC] shadow-md'
                    : 'bg-[#E8D8D2]/60 hover:bg-[#E8D8D2] text-[#3C3C3C]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Project Grid: Asymmetrical Luxury Layout */}
        <motion.div layout className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          <AnimatePresence>
            {displayedProjects.map((project, index) => {
              const colSpanClass =
                index % 4 === 0
                  ? 'lg:col-span-7'
                  : index % 4 === 1
                  ? 'lg:col-span-5'
                  : index % 4 === 2
                  ? 'lg:col-span-5'
                  : 'lg:col-span-7';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                  className={`${colSpanClass} group cursor-pointer flex flex-col justify-between`}
                  onClick={() => onSelectProject(project)}
                >
                  {/* Card Image Frame */}
                  <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-[#171514] border border-[#C9C1B8]/60 shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 bg-[#172536]/80 backdrop-blur-md border border-[#B08A57]/30 text-[10px] uppercase tracking-widest text-[#DFC58F] font-mono">
                        {project.category}
                      </span>
                      {project.isRealClient ? (
                        <span className="px-2.5 py-1 bg-[#183B32]/90 backdrop-blur-md text-[9px] uppercase tracking-widest text-[#F7F3EC] font-mono">
                          Live Client
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 bg-[#672D39]/90 backdrop-blur-md text-[9px] uppercase tracking-widest text-[#F7F3EC] font-mono">
                          Demonstration
                        </span>
                      )}
                    </div>

                    {/* Hover Reveal CTA */}
                    <div className="absolute bottom-4 right-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-[#F7F3EC] text-[#171514] flex items-center justify-center shadow-lg">
                        <ArrowUpRight className="w-5 h-5 text-[#171514]" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content & Metadata */}
                  <div className="pt-5 pb-2">
                    <div className="flex items-center justify-between gap-4 text-xs font-mono text-[#A79A8F]">
                      <span className="uppercase tracking-widest">{project.client}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#171514] group-hover:text-[#A76570] transition-colors mt-2 tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-[#625A55] leading-relaxed line-clamp-2 font-light">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-wider uppercase px-2 py-0.5 bg-[#E8D8D2]/50 text-[#3C3C3C]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Conceptual Label Notification */}
        <div className="mt-16 p-4 sm:p-5 bg-[#E8D8D2]/40 border border-[#C9C1B8]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#625A55]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#A76570] shrink-0" />
            <span>
              <strong>Authenticity Note:</strong> Real client projects and names from the live RoseDsigns studio are highlighted above alongside clearly marked conceptual demonstration pieces.
            </span>
          </div>
          {onViewAllProjects && (
            <button
              onClick={onViewAllProjects}
              className="text-[#171514] font-semibold hover:text-[#A76570] underline shrink-0"
            >
              Explore Full Archive →
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
