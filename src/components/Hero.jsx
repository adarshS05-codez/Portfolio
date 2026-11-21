import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Flame, Shield, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/hero.css';

export default function Hero({ onOpenResume }) {
  const { personal, stats } = portfolioData;
  const heroRef = useRef(null);

  // Parallax scroll tracking
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.7], [0.85, 1]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      {/* ── CINEMATIC BATMAN ON BUILDING BACKGROUND LAYER ── */}
      <motion.div className="hero-batman-backdrop" style={{ y: bgY }}>
        <div className="batman-bg-image" />
        {/* Fiery Red-Orange Sunset Volumetric Glow */}
        <div className="batman-sunset-glow" />
        {/* Floating Ember Light Layers */}
        <div className="batman-embers-layer" />
        {/* Deep Vignette & Dark Overlay for pristine readability */}
        <motion.div className="batman-vignette-overlay" style={{ opacity: overlayOpacity }} />
      </motion.div>

      <div className="container hero-container">

        {/* ── TOP STATUS BAR ── */}
        <motion.div
          className="hero-topbar"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="status-badge">
            <span className="status-ping-wrap">
              <span className="status-dot" />
              <span className="status-ring" />
            </span>
            <span>OPEN FOR SDE &amp; DATA ANALYST ROLES • CLASS OF 2027</span>
          </div>

          <div className="hero-tag-pill">
            <span className="tag-dot-fire" />
            <span>B.Tech CSE (Data Science) @ GLBITM</span>
          </div>
        </motion.div>

        {/* ── CENTRAL STAGE: EDITORIAL PORTRAIT + GOTHAM TYPOGRAPHY ── */}
        <div className="hero-stage">

          {/* Huge Architectural Backdrop Text */}
          <div className="hero-watermark-text" aria-hidden="true">
            <span>GOTHAM</span>
            <span>ENGINEER</span>
          </div>

          {/* Adarsh B&W Portrait with Fiery Sunset Backlight (Ref Image 2 Inspiration) */}
          <motion.div
            className="hero-portrait-stage"
            style={{ y: portraitY }}
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            {/* Fiery Sunset Aura behind the portrait */}
            <div className="portrait-fire-aura" />

            <div className="portrait-frame">
              <img
                src={personal.photo}
                alt="Adarsh Soni"
                className="portrait-img"
              />
              <div className="portrait-bottom-fade" />
              <div className="portrait-rim-highlight" />

              {/* Floating ID Card Badge */}
              <div className="portrait-meta-badge">
                <span className="meta-name">ADARSH SONI</span>
                <span className="meta-role">// SDE &amp; DATA ANALYST</span>
              </div>
            </div>
          </motion.div>

          {/* Foreground Bold Cinematic Headline */}
          <div className="hero-headline-wrap">
            <h1 className="visually-hidden">Adarsh Soni — Software Engineer &amp; Data Analyst</h1>
            
            <motion.div
              className="hero-subheading-tag"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Flame size={14} className="icon-fire" />
              <span>SOFTWARE ENGINEER &amp; DATA ANALYST // AI &amp; BACKEND</span>
            </motion.div>

            <motion.div
              className="hero-title-main"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="title-white">ADARSH</span>{' '}
              <span className="title-fire text-glow">SONI</span>
            </motion.div>

            <motion.p
              className="hero-statement"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              Specializing in <strong>high-performance FastAPI backends</strong>, <strong>data analytics &amp; statistical pipelines</strong>, and <strong>autonomous LangGraph multi-agent loops</strong>.
            </motion.p>
          </div>

        </div>

        {/* ── BOTTOM CONTROLS & STAT METRICS ── */}
        <motion.div
          className="hero-bottom-grid"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {/* Action Buttons */}
          <div className="hero-cta-group">
            <button className="btn-primary" onClick={() => handleScrollTo('projects')}>
              <span>Explore Projects</span>
              <ArrowDown size={16} />
            </button>
            <button className="btn-ghost" onClick={() => handleScrollTo('contact')}>
              <span>Let's Connect</span>
              <ArrowUpRight size={16} />
            </button>
            {onOpenResume && (
              <button className="btn-ghost-resume" onClick={onOpenResume}>
                <span>View Resume</span>
              </button>
            )}
          </div>

          {/* Metric Tiles with Red-Orange Glowing Accents */}
          <div className="hero-stats-grid">
            {stats.map((s, idx) => (
              <div key={idx} className="stat-tile">
                <span className="stat-num">{s.value}</span>
                <span className="stat-title">{s.label}</span>
                <span className="stat-sub">{s.sub}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
