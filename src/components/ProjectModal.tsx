import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#171514]/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#F7F3EC] text-[#171514] border border-[#B08A57]/40 shadow-2xl overflow-hidden my-8"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#171514] text-[#F7F3EC] hover:bg-[#A76570] flex items-center justify-center transition-colors shadow-lg focus:outline-none"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero Image */}
            <div className="relative aspect-[16/9] bg-[#171514] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover filter contrast-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/90 via-transparent to-black/30 pointer-events-none" />

              {/* Status and Category Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#172536]/80 backdrop-blur-md text-[10px] uppercase tracking-widest text-[#DFC58F] font-mono border border-[#B08A57]/40">
                  {project.category}
                </span>
                {project.isRealClient ? (
                  <span className="px-3 py-1 bg-[#183B32]/90 backdrop-blur-md text-[10px] uppercase tracking-widest text-[#F7F3EC] font-mono">
                    Real Client Project
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-[#672D39]/90 backdrop-blur-md text-[10px] uppercase tracking-widest text-[#F7F3EC] font-mono">
                    Demonstration Showcase
                  </span>
                )}
              </div>

              {/* Title Over Image */}
              <div className="absolute bottom-6 left-6 right-6 text-[#F7F3EC]">
                <span className="text-xs font-mono tracking-widest uppercase text-[#DFC58F] block mb-1">
                  CASE STUDY ARCHIVE
                </span>
                <h2 className="font-editorial text-2xl sm:text-4xl text-[#F7F3EC] tracking-tight">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-10">
              
              {/* Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-[#C9C1B8]/40 text-xs">
                <div>
                  <span className="text-[#A79A8F] block uppercase tracking-wider font-mono text-[10px]">Client</span>
                  <span className="font-medium text-[#171514] mt-0.5 block">{project.client}</span>
                </div>
                <div>
                  <span className="text-[#A79A8F] block uppercase tracking-wider font-mono text-[10px]">Year</span>
                  <span className="font-medium text-[#171514] mt-0.5 block">{project.year}</span>
                </div>
                <div>
                  <span className="text-[#A79A8F] block uppercase tracking-wider font-mono text-[10px]">Pillar</span>
                  <span className="font-medium text-[#171514] mt-0.5 block">{project.category}</span>
                </div>
                <div>
                  <span className="text-[#A79A8F] block uppercase tracking-wider font-mono text-[10px]">Status</span>
                  <span className="font-medium text-[#A76570] mt-0.5 block">{project.status || 'Archived'}</span>
                </div>
              </div>

              {/* Narrative Story */}
              <div className="py-6 space-y-4">
                <h4 className="font-editorial text-xl text-[#171514]">The Narrative & Objectives</h4>
                <p className="text-sm sm:text-base text-[#3C3C3C] leading-relaxed font-light">
                  {project.fullStory || project.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="py-6 border-t border-[#C9C1B8]/40">
                <h4 className="font-editorial text-lg text-[#171514] mb-3">Key Deliverables & Craft</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-[#3C3C3C]">
                      <CheckCircle2 className="w-4 h-4 text-[#A76570] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary Visual if present */}
              {project.secondaryImage && (
                <div className="my-6 border border-[#C9C1B8]/50 overflow-hidden aspect-[16/9] bg-[#171514]">
                  <img
                    src={project.secondaryImage}
                    alt={`${project.title} detail`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Actions Footer */}
              <div className="pt-6 border-t border-[#C9C1B8]/40 flex flex-wrap items-center justify-between gap-4">
                {project.externalUrl ? (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#171514] hover:text-[#A76570] font-semibold transition-colors"
                  >
                    <span>Visit Live Client Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-[#A79A8F] italic font-mono">
                    Archived Studio Case Study
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      onClose();
                      onInquire(project.title);
                    }}
                    className="px-6 py-2.5 bg-[#171514] text-[#F7F3EC] hover:bg-[#A76570] text-xs uppercase tracking-widest transition-colors font-medium"
                  >
                    Inquire Similar Project
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
