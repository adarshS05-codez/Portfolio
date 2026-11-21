import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, ExternalLink, Award, FileCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/modal.css';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, skillsCategories, projects, hackathons, certifications } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="dark-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="dark-resume-card"
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 25 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Toolbar */}
          <div className="dark-resume-toolbar">
            <div className="toolbar-left">
              <span className="t-dot" />
              <span>Adarsh Soni — Resume Preview</span>
            </div>
            <div className="toolbar-actions">
              <button onClick={handlePrint} className="toolbar-btn">
                <Printer size={14} />
                <span>Print</span>
              </button>
              <a href="mailto:adarshsoni2025@gmail.com" className="toolbar-btn primary">
                <Mail size={14} />
                <span>Contact</span>
              </a>
              <button onClick={onClose} className="toolbar-close" aria-label="Close">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Paper View */}
          <div className="dark-resume-body">
            <div className="resume-sheet">
              {/* Header */}
              <div className="res-header">
                <h1 className="res-name">{personal.name.toUpperCase()}</h1>
                <div className="res-contact-row">
                  <span>📞 {personal.phone}</span>
                  <span>•</span>
                  <span>✉️ {personal.email}</span>
                  <span>•</span>
                  <a href={personal.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                  <span>•</span>
                  <a href={personal.links.github} target="_blank" rel="noreferrer">GitHub</a>
                  <span>•</span>
                  <a href={personal.links.codolio} target="_blank" rel="noreferrer">Codolio</a>
                </div>
              </div>

              {/* Summary */}
              <div className="res-section">
                <h2 className="res-sec-title">PROFESSIONAL SUMMARY</h2>
                <p className="res-p">
                  Final-year B.Tech student specializing in <strong>Computer Science (Data Science)</strong> at G.L. Bajaj Institute of Technology and Management. Seeking roles in <strong>Software Development Engineering (SDE)</strong> and <strong>Data Analytics</strong>. Experienced in Python, C++, JavaScript, SQL, FastAPI, REST APIs, and PostgreSQL. Hands-on expertise in building production-grade backends, relational analytical pipelines, anomaly detection, and autonomous AI multi-agent workflows.
                </p>
              </div>

              {/* Skills */}
              <div className="res-section">
                <h2 className="res-sec-title">TECHNICAL SKILLS</h2>
                <div className="res-skills-list">
                  <div><strong>Languages:</strong> Python, C++, JavaScript, SQL</div>
                  <div><strong>Backend Development:</strong> FastAPI, REST APIs, Express.js, JSON, API Integration, Microservices</div>
                  <div><strong>Frontend Development:</strong> React.js, HTML, CSS, Responsive UI Development</div>
                  <div><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB</div>
                  <div><strong>Data Analytics &amp; AI:</strong> Data Analytics, LangGraph, LangChain, RAG Systems, PySpark, Pandas, NumPy, Scikit-learn</div>
                  <div><strong>API Testing &amp; DevOps:</strong> Postman, Docker, Git, GitHub, CI/CD</div>
                  <div><strong>Core CS:</strong> OOP, DBMS, Operating Systems, Computer Networks, DSA (300+ Solved)</div>
                </div>
              </div>

              {/* Key Projects */}
              <div className="res-section">
                <h2 className="res-sec-title">PROJECTS</h2>
                
                <div className="res-item">
                  <div className="res-item-head">
                    <strong>SQL-Based Business Data Monitoring &amp; Anomaly Detection System</strong>
                  </div>
                  <div className="res-sub">Python, FastAPI, SQL, PostgreSQL, Pandas, NumPy, Scikit-learn, LangGraph</div>
                  <ul className="res-ul">
                    <li>Developed an automated analytics application to process CSV and Excel files, validate data quality, and identify metric anomalies.</li>
                    <li>Implemented an anomaly detection model using Scikit-learn and statistical features to identify unusual patterns in revenue, costs, and order volume.</li>
                    <li>Built a LangGraph-based AI agent workflow integrated with LLMs to diagnose anomalies and trigger automated executive email alerts.</li>
                  </ul>
                </div>

                <div className="res-item">
                  <div className="res-item-head">
                    <strong>Ornix AI – Agentic UI Generation Platform</strong>
                  </div>
                  <div className="res-sub">Python, FastAPI, PostgreSQL, LangGraph, RAG, React</div>
                  <ul className="res-ul">
                    <li>Developed a vision-to-code platform converting UI screenshots into ready-to-use React components with real-time previews.</li>
                    <li>Engineered asynchronous FastAPI REST APIs and PostgreSQL to manage component workspaces and generation history.</li>
                    <li>Integrated LangGraph cyclic agent workflows to automate multi-step component scaffolding in a sandboxed execution environment.</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="res-section">
                <h2 className="res-sec-title">EDUCATION</h2>
                <div className="res-edu-row">
                  <div>
                    <strong>G.L. Bajaj Institute of Technology and Management</strong>
                    <div>B.Tech – Computer Science (Data Science)</div>
                  </div>
                  <div className="res-edu-right">
                    <span>2023 – 2027</span>
                    <div>Percentage: <strong>75%</strong></div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="res-section">
                <h2 className="res-sec-title">ACHIEVEMENTS &amp; VERIFIED CERTIFICATIONS</h2>
                <ul className="res-ul">
                  <li><strong>Solved 300+ DSA problems</strong> across LeetCode, Codolio, and GeeksforGeeks.</li>
                  <li><strong>National Finalist (Top 25 / 600+ Teams)</strong> – IIT Delhi Square Hacks Hackathon (Built IoT farmer platform Gaon Bazar).</li>
                  <li><strong>Top 100 Selected Teams (1000+ Teams Nationwide)</strong> – IIIT Delhi Hack Hatch Startup Hackathon (Built NAP platform).</li>
                  <li><strong>Top 20 Finalist</strong> – Innohacks 2.0 National Hackathon.</li>
                  <li>
                    <strong>Cisco Certified: Data Analytics Essentials</strong> – Cisco Networking Academy{' '}
                    <a href="https://drive.google.com/file/d/1fuQR9m93I6YGwuszfdjTxXvjCepsRo6s/view?usp=drive_link" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-orange)' }}>[Verify Certificate]</a>
                  </li>
                  <li>
                    <strong>Cisco Certified: Python Essentials 1</strong> – Cisco Networking Academy{' '}
                    <a href="https://drive.google.com/file/d/14-XkBpQBdo1uSYN0rS2eSw9hpGxQYDx0/view?usp=drive_link" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-orange)' }}>[Verify Certificate]</a>
                  </li>
                  <li><strong>Build Reliable Agentic AI Applications</strong> – DeepLearning.AI.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
