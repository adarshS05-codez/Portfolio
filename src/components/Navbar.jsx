import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import '../styles/navbar.css';

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onResumeClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <a href="#hero" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}>
            <span className="logo-mark">AS</span>
            <span className="logo-year">'27</span>
          </a>

          {/* Desktop Nav */}
          <nav className="navbar-nav">
            {navLinks.map((link) => (
              <button key={link.label} className="nav-link" onClick={() => handleNav(link.href)}>
                {link.label}
              </button>
            ))}
          </nav>

          {/* Resume button */}
          <div className="navbar-actions">
            <button className="btn-resume" onClick={onResumeClick}>
              <FileText size={14} />
              <span>Resume</span>
            </button>
            <button className="navbar-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                className="mobile-nav-link"
                onClick={() => handleNav(link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.label}
              </motion.button>
            ))}
            <button className="btn-resume mobile-resume" onClick={() => { onResumeClick(); setMenuOpen(false); }}>
              <FileText size={14} /> Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
