import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import '../styles/skills.css';

const skillCodes = {
  'Languages': '01 // LANG',
  'Backend & Systems': '02 // BACKEND',
  'AI & Data Science': '03 // AI & AGENTS',
  'Databases': '04 // DATA',
  'Frontend': '05 // FRONTEND',
  'DevOps & Core CS': '06 // CORE CS',
};

export default function Skills() {
  const { skillsCategories } = portfolioData;

  return (
    <section id="skills" className="section skills-section">
      <div className="container">

        {/* Brutalist Section Label */}
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          01 / Technical Stack
        </motion.div>

        {/* Cinematic Section Header */}
        <div className="skills-heading-wrap">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            SKILLS &amp; <span className="text-glow">COMPETENCIES</span>
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Specialized in high-concurrency Python backends, autonomous multi-agent loops, and robust relational data architecture.
          </motion.p>
        </div>

        {/* 6-Block Grid with Red-Orange Hover Accents */}
        <div className="skills-grid">
          {skillsCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              className="skill-block"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="skill-block-top">
                <span className="skill-code">
                  {skillCodes[cat.category] || `0${idx + 1} // TECH`}
                </span>
                <div className="skill-line-flame" />
              </div>

              <h3 className="skill-name">{cat.category}</h3>

              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    <span className="skill-dot-amber" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
