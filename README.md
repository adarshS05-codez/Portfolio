# Adarsh Soni — Personal Portfolio Website

A cinematic, modern, high-performance personal portfolio website for **Adarsh Soni**, Final-Year B.Tech Computer Science (Data Science) student at G.L. Bajaj Institute of Technology & Management.

Designed for **Software Development Engineering (SDE)** and **Data Analytics** opportunities (**Class of 2027**).

Inspired by modern **Behance** and **Framer** developer portfolios, featuring a dark Gotham aesthetic, fiery red-orange glow effects, architectural typography, and smooth interactive animations.

---

## 🎨 Visual Identity & Design System

- **Cinematic Gotham Noir Theme:** Deep pitch black foundation (`#050507`) with a skyline backdrop of Batman overlooking the city at sunset.
- **Fiery Red-Orange Neon Glow:** High-contrast crimson (`#FF3B14`), blood orange (`#FF6600`), and warm amber (`#FFA500`) highlights with atmospheric volumetric glow.
- **High-Impact Typography:**
  - *Bebas Neue* — Bold, tall cinematic display titles
  - *Space Grotesk* — Modern tech headers and section markers
  - *Outfit* — Clean, readable body copy
  - *JetBrains Mono* — Code snippets, terminal logs, and technical metadata
- **Editorial Portrait Treatment:** High-definition monochrome portrait with a fiery sunset backlight aura.
- **Interactive Micro-Animations:** Dual-ring custom magnetic cursor, numeric preloader with animated progress bar, and parallax scroll tracking.

---

## 🚀 Key Sections

1. **Header Navigation:** Sticky frosted header with active section anchors, IST live clock, status pill, and in-browser resume modal.
2. **Hero Section:**
   - Architectural Batman skyscraper backdrop with subtle parallax depth
   - Availability badge: `● OPEN FOR SDE & DATA ANALYST ROLES • CLASS OF 2027`
   - Editorial monochrome portrait with fiery sunset aura
   - Key stats: **300+ DSA Problems Solved**, **Top 25 National Finalist (IIT Delhi)**, **Top 100 Selected (IIIT Delhi)**, **Top 20 Finalist (Innohacks 2.0)**
3. **Skills & Core Competencies:**
   - 6 modular technical blocks (Languages, Backend & Systems, AI & Data Science, Databases, Frontend, DevOps & Core CS)
   - Code tags (`01 // LANG`, `02 // BACKEND`, etc.) and amber status bullets
4. **Flagship Projects Showcase:**
   - **Ornix AI** — Autonomous Vision-to-Code Agentic UI Platform (Python, FastAPI, PostgreSQL, LangGraph, RAG, React)
   - **SQL Data Monitoring & Anomaly Detection** — Enterprise ML Outlier & Anomaly Detection with automated agent alerts
   - Interactive live terminal with real-time simulated system inspections and passing statuses
5. **Competitive Record & Hackathons:**
   - **Square Hacks @ IIT Delhi** — National Finalist (Top 25 / 600+ Teams) — Built *Gaon Bazar* (IoT agricultural trading platform)
   - **Hack Hatch @ IIIT Delhi** — Top 100 Selected Teams (1000+ Teams) — Built *NAP* (Creator collaboration platform)
   - **Innohacks 2.0** — Top 20 Finalist
   - **Verified Credentials:** Clickable badges linking directly to Google Drive verification:
     - Cisco Certified: *Data Analytics Essentials*
     - Cisco Certified: *Python Essentials 1*
     - DeepLearning.AI: *Build Reliable Agentic AI Applications*
6. **Contact Section:**
   - Direct copy-to-clipboard email action
   - Connected profiles: GitHub, LinkedIn, Codolio
   - Interactive dispatch inquiry form
7. **Printable Resume Modal:**
   - Clean in-browser printable view (`window.print()`) with direct links and formatted summary

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite 6
- **Styling:** Modular CSS + CSS Custom Properties (Zero Tailwind, pure clean CSS)
- **Animation:** Framer Motion 12
- **Icons:** Lucide React

---

## 💻 Getting Started Locally

```bash
# 1. Clone the repository
git clone https://github.com/adarshsoni2025/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## 📁 Repository Structure

```
Portfolio/
├── public/
│   └── images/
│       ├── adarsh-portrait-1.jpg       # Editorial monochrome portrait
│       └── batman-bg.jpg               # Gotham skyscraper sunset backdrop
├── src/
│   ├── components/
│   │   ├── Contact.jsx                 # Inquiry form & direct contact
│   │   ├── CustomCursor.jsx            # Desktop trailing cursor
│   │   ├── Footer.jsx                  # IST Clock & back-to-top
│   │   ├── Hackathons.jsx              # Hackathon achievements & verified certificates
│   │   ├── Hero.jsx                    # Cinematic hero with Batman backdrop
│   │   ├── Navbar.jsx                  # Sticky header & resume launcher
│   │   ├── Preloader.jsx               # Countdown brand preloader
│   │   ├── Projects.jsx                # Flagship projects & live terminal
│   │   ├── ResumeModal.jsx             # In-browser printable resume
│   │   └── Skills.jsx                  # 6-category technical stack
│   ├── data/
│   │   └── portfolioData.js            # Central data configuration
│   ├── styles/
│   │   ├── contact.css
│   │   ├── cursor.css
│   │   ├── footer.css
│   │   ├── global.css
│   │   ├── hackathons.css
│   │   ├── hero.css
│   │   ├── modal.css
│   │   ├── navbar.css
│   │   ├── preloader.css
│   │   ├── projects.css
│   │   ├── skills.css
│   │   └── variables.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

© 2024–2027 Adarsh Soni. All rights reserved.
