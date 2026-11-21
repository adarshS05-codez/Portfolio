import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import './styles/global.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="portfolio-app-root">
      {/* Top Electric Blue Scroll Progress Bar */}
      <motion.div className="top-scroll-progress-bar" style={{ scaleX }} />

      {/* Sleek Dark Brand Preloader */}
      {loading && (
        <Preloader
          onDone={() => setLoading(false)}
          onComplete={() => setLoading(false)}
        />
      )}

      {/* Cyber Custom Cursor */}
      <CustomCursor />

      {/* Navbar with Resume & Role status */}
      <Navbar
        onResumeClick={() => setResumeModalOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Flow: Editorial Hero -> Skills Matrix -> 2 Flagship Projects -> Hackathons -> Contact */}
      <main id="main-content">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <Skills />
        <Projects />
        <Hackathons />
        <Contact />
      </main>

      {/* Dark Footer with IST Clock */}
      <Footer />

      {/* On-Demand In-Browser Printable Resume */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
