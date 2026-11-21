import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, Code2, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/contact.css';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          04 / Get In Touch
        </motion.div>

        <motion.h2
          className="section-title contact-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          LET'S BUILD <span className="text-glow">SOMETHING</span> EPIC
        </motion.h2>

        <div className="contact-grid">

          {/* Left Column: Direct Info */}
          <motion.div
            className="contact-left-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="contact-pitch">
              Seeking high-impact <strong>Software Development Engineer (SDE) &amp; Data Analyst</strong> opportunities, distributed backend systems, and analytical pipelines for <strong>Class of 2027</strong>.
            </p>

            <div className="contact-direct-card">
              <span className="card-label">// DIRECT INBOX</span>
              <div className="contact-email-action">
                <span className="contact-email-text">{personal.email}</span>
                <button className="copy-btn-fire" onClick={copyEmail} title="Copy email address">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            <div className="contact-social-links">
              <a href={personal.links.github} target="_blank" rel="noopener noreferrer" className="social-pill">
                <Github size={17} />
                <span>GitHub</span>
                <ArrowUpRight size={14} className="arrow-icon" />
              </a>

              <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="social-pill">
                <Linkedin size={17} />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} className="arrow-icon" />
              </a>

              <a href={personal.links.codolio} target="_blank" rel="noopener noreferrer" className="social-pill">
                <Code2 size={17} />
                <span>Codolio (300+ Solved)</span>
                <ArrowUpRight size={14} className="arrow-icon" />
              </a>
            </div>

            <div className="contact-meta-badge">
              <span className="location-dot" />
              <span>Greater Noida / Delhi NCR, India • Open to Relocate</span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.form
            className="contact-form-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-fields-row">
              <div className="input-group">
                <label>YOUR NAME</label>
                <input
                  type="text"
                  placeholder="e.g. Bruce Wayne"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div className="input-group">
                <label>YOUR EMAIL</label>
                <input
                  type="email"
                  placeholder="bruce@wayne-enterprises.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>MESSAGE / INQUIRY</label>
              <textarea
                rows={5}
                placeholder="Share your opportunity or project brief..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="btn-primary form-submit-btn">
              {sent ? (
                <span>✓ Message Sent Successfully!</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={15} />
                </>
              )}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
