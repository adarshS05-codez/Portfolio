import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, MapPin, Award, ShieldCheck, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/hackathons.css';

export default function Hackathons() {
  const { hackathons, certifications } = portfolioData;

  return (
    <section id="hackathons" className="section hackathons-section">
      <div className="container">

        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          03 / Competitive Achievements
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          HACKATHON <span className="text-glow">RECORD</span>
        </motion.h2>

        <div className="hackathons-grid">
          {hackathons.map((h, i) => (
            <motion.div
              key={i}
              className="hack-card-fire"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hack-card-header">
                <span className="hack-index-tag">0{i + 1} // COMP</span>
                <span className="hack-standing-badge">
                  <Trophy size={13} className="trophy-icon" />
                  {h.standing}
                </span>
              </div>

              <div className="hack-name-block">
                <h3 className="hack-event-title">{h.event}</h3>
                <span className="hack-timeline-date">{h.date}</span>
              </div>

              <div className="hack-separator-line" />

              <div className="hack-built-solution">
                <span className="built-lead">Project Built:</span>
                <span className="built-title">{h.project}</span>
              </div>

              <p className="hack-story-text">{h.highlight}</p>

              <div className="hack-tag-chips">
                {h.tags.map((t) => (
                  <span key={t} className="hack-chip">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Row with Clickable Google Drive Verification Links */}
        <div className="certifications-strip">
          <div className="cert-heading">
            <ShieldCheck size={18} className="cert-shield-icon" />
            <span>VERIFIED CREDENTIALS &amp; CERTIFICATIONS</span>
          </div>

          <div className="cert-items-grid">
            {certifications.map((c, idx) => (
              c.link ? (
                <a
                  key={idx}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-pill cert-link"
                  title={`View verified certificate: ${c.title}`}
                >
                  <Award size={14} className="cert-award-icon" />
                  <span className="cert-title">{c.title}</span>
                  <span className="cert-org">({c.org})</span>
                  <ExternalLink size={12} className="cert-ext-icon" />
                </a>
              ) : (
                <div key={idx} className="cert-pill">
                  <Award size={14} className="cert-award-icon" />
                  <span className="cert-title">{c.title}</span>
                  <span className="cert-org">({c.org})</span>
                </div>
              )
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
