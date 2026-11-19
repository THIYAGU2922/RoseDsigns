import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectModal } from './components/ProjectModal';
import { InquiryDrawer } from './components/InquiryDrawer';
import { BrandGuideModal } from './components/BrandGuideModal';
import { CustomCursor } from './components/CustomCursor';
import type { PageId, Project } from './types';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState<string | undefined>(undefined);
  const [brandGuideOpen, setBrandGuideOpen] = useState(false);

  // Sync with browser hash for clean bookmarking & deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['about', 'services', 'work', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId, sectionId?: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleOpenInquiry = (serviceTitle?: string) => {
    setInquiryService(serviceTitle);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#171514] selection:bg-[#D9B1AE]/50 selection:text-[#171514] font-sans antialiased relative">
      {/* Subtle Luxury Cursor */}
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main Page View with Smooth Page Transition */}
      <main className="w-full">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage
                onNavigate={navigateTo}
                onSelectProject={(p) => setSelectedProject(p)}
                onOpenInquiry={handleOpenInquiry}
              />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <AboutPage
                onStartProject={() => handleOpenInquiry()}
                onOpenBrandGuide={() => setBrandGuideOpen(true)}
                onContactUs={() => navigateTo('contact')}
              />
            </motion.div>
          )}

          {currentPage === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ServicesPage
                onInquireService={(srv) => handleOpenInquiry(srv)}
                onContactUs={() => navigateTo('contact')}
              />
            </motion.div>
          )}

          {currentPage === 'work' && (
            <motion.div
              key="work"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioPage
                onSelectProject={(p) => setSelectedProject(p)}
                onStartProject={() => handleOpenInquiry()}
                onContactUs={() => navigateTo('contact')}
              />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBrandGuide={() => setBrandGuideOpen(true)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(projTitle) => handleOpenInquiry(`Project Inquiry related to: ${projTitle}`)}
      />

      {/* Quick Commission Inquiry Drawer */}
      <InquiryDrawer
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        preselectedService={inquiryService}
      />

      {/* Brand Guidelines & Specification Modal */}
      <BrandGuideModal
        isOpen={brandGuideOpen}
        onClose={() => setBrandGuideOpen(false)}
      />
    </div>
  );
}

export default App;
