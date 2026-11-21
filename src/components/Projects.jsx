import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Terminal, Sparkles, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/projects.css';

export default function Projects() {
  const { projects } = portfolioData;
  const [active, setActive] = useState(0);
  const proj = projects[active];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">

        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          02 / Flagship Systems
        </motion.div>

        <motion.h2
          className="section-title projects-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          FEATURED <span className="text-glow">PROJECTS</span>
        </motion.h2>

        {/* Project Switcher Tabs */}
        <div className="project-tabs">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className={`project-tab ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="tab-idx">0{i + 1} //</span>
              <span className="tab-name">{p.title}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Project Stage */}
        <motion.div
          key={proj.id}
          className="project-stage-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left Column: Details & Tech */}
          <div className="project-detail-col">
            <div className="project-badge-pill">
              <span className="badge-flame-dot" />
              <span>{proj.featuredTag}</span>
            </div>

            <h3 className="project-heading">{proj.title}</h3>
            <p className="project-tagline">{proj.tagline}</p>
            <p className="project-prose">{proj.description}</p>

            <div className="project-highlights-list">
              {proj.highlights.map((h, idx) => (
                <div key={idx} className="highlight-row">
                  <span className="highlight-bullet">▹</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="project-tech-chips">
              {proj.technologies.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>

            <div className="project-cta-actions">
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
                  <Github size={15} />
                  <span>View Repository</span>
                </a>
              )}
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-sm">
                  <span>Live Platform</span>
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Live Terminal Visual */}
          <div className="project-visual-col">
            <div className="project-terminal-window">
              <div className="terminal-header-bar">
                <div className="window-dots">
                  <span className="dot red" />
                  <span className="dot orange" />
                  <span className="dot green" />
                </div>
                <span className="terminal-title">
                  <Terminal size={12} className="terminal-icon" />
                  {proj.id}_runtime.sh
                </span>
                <span className="terminal-branch">main*</span>
              </div>

              <div className="terminal-code-body">
                <div className="term-entry">
                  <span className="term-ps">$</span>
                  <span className="term-cmd"> system.inspect --id="{proj.id}"</span>
                </div>
                <div className="term-response">
                  <span className="term-prefix">[STATUS]</span>
                  <span className="term-text">Architecture verified. Ready for production throughput.</span>
                </div>

                <div className="term-entry mt-1">
                  <span className="term-ps">$</span>
                  <span className="term-cmd"> agents.trace --nodes=active</span>
                </div>
                <div className="term-stream">
                  <div className="stream-line">
                    <span className="stream-bullet">✔</span>
                    <span>LangGraph cyclic reflection node: ACTIVE</span>
                  </div>
                  <div className="stream-line">
                    <span className="stream-bullet">✔</span>
                    <span>FastAPI async workers: 4 instances running</span>
                  </div>
                  <div className="stream-line">
                    <span className="stream-bullet">✔</span>
                    <span>PostgreSQL connection pool: HEALTHY</span>
                  </div>
                </div>

                <div className="term-entry mt-1">
                  <span className="term-ps">$</span>
                  <span className="term-cmd"> metric.summary</span>
                </div>
                <div className="term-response success">
                  <span className="term-prefix-success">✔ 0 ERRORS</span>
                  <span className="term-text-success">Latency: 42ms | Test suite: 100% passing</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
