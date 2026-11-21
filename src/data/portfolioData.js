export const portfolioData = {
  personal: {
    name: "Adarsh Soni",
    tagline: "Software Engineer & Data Analyst | Backend & AI Systems",
    specialization: "B.Tech CSE (Data Science) @ GLBITM • Class of 2027",
    college: "G.L. Bajaj Institute of Technology and Management",
    degree: "B.Tech — Computer Science (Data Science)",
    timeline: "2023 – 2027",
    score: "75%",
    phone: "+91 7052057090",
    email: "adarshsoni2025@gmail.com",
    location: "Greater Noida / Delhi NCR, India",
    status: "Open for SDE & Data Analyst Roles • Class of 2027",
    bio: "Computer Science (Data Science) student specializing in scalable FastAPI & Node.js backends, autonomous LangGraph multi-agent workflows, data analytics, and relational data architecture. 300+ algorithmic DSA problems cracked.",
    links: {
      github: "https://github.com/adarshsoni2025",
      linkedin: "https://linkedin.com/in/adarsh-soni-558231268",
      codolio: "https://codolio.com/profile/adarshsoni",
      email: "mailto:adarshsoni2025@gmail.com",
      phone: "tel:+917052057090"
    },
    photo: "/images/adarsh-portrait-1.jpg"
  },

  stats: [
    { value: "300+", label: "DSA Problems", sub: "LeetCode & Codolio" },
    { value: "Top 25", label: "National Finalist", sub: "IIT Delhi (600+ Teams)" },
    { value: "Top 100", label: "Selected Teams", sub: "IIIT Delhi (1000+ Teams)" },
    { value: "Top 20", label: "Finalist", sub: "Innohacks 2.0" }
  ],

  // Skills from resume, ChromaDB removed, exactly 1 compact page
  skillsCategories: [
    {
      category: "Languages",
      skills: ["Python", "C++", "JavaScript", "SQL"]
    },
    {
      category: "Backend & Systems",
      skills: ["FastAPI", "REST APIs", "Express.js", "JSON & Microservices", "API Integration", "Postman"]
    },
    {
      category: "AI & Data Science",
      skills: ["LangGraph", "LangChain", "RAG Systems", "Pandas", "NumPy", "Scikit-Learn", "PySpark", "Data Analytics"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      category: "Frontend",
      skills: ["React.js", "HTML5", "CSS3 / Modern UI", "Responsive Systems"]
    },
    {
      category: "DevOps & Core CS",
      skills: ["Git & GitHub", "Docker", "CI/CD", "OOP", "DBMS", "Operating Systems", "Computer Networks", "DSA (300+)"]
    }
  ],

  // Only the 2 requested flagship projects
  projects: [
    {
      id: "ornix-ai",
      title: "Ornix AI",
      tagline: "Autonomous Vision-to-Code Agentic UI Platform",
      category: "Agentic AI & Full-Stack",
      accent: "#FF5500",
      featuredTag: "Flagship AI Project",
      description: "A vision-to-code engine that converts UI screenshots into production-ready React components with real-time sandbox execution, powered by autonomous LangGraph multi-agent loops.",
      highlights: [
        "Architected multi-agent loops with LangGraph & LangChain for layout decomposition and component scaffolding.",
        "Built asynchronous Python REST APIs with FastAPI & PostgreSQL for persistent workspace state.",
        "Integrated an in-browser isolated execution environment for immediate real-time compilation."
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "LangGraph", "RAG", "React.js"],
      github: "https://github.com/adarshsoni2025/ornix-ai",
      demo: "https://ornix-ai.vercel.app"
    },
    {
      id: "sql-anomaly",
      title: "SQL Data Monitoring & Anomaly Detection",
      tagline: "Enterprise Analytics Pipeline with ML Outlier & Agent Alerts",
      category: "Backend & Data Science",
      accent: "#FF5500",
      featuredTag: "ML & Data Analytics",
      description: "Automated business analytics application processing tabular datasets (CSV/Excel), detecting statistical metric anomalies with Scikit-learn, and using LangGraph LLM agents to trigger automated contextual email alerts.",
      highlights: [
        "Trained Scikit-learn models and statistical features (Z-score, IQR) detecting unusual drifts in revenue, order volume, and operating costs.",
        "Engineered FastAPI backend paired with PostgreSQL for relational tracking of historical anomalies and audit logs.",
        "Integrated a LangGraph-based AI agent to diagnose root causes and dispatch automated executive email alerts."
      ],
      technologies: ["Python", "FastAPI", "SQL", "PostgreSQL", "Pandas", "NumPy", "Scikit-Learn", "LangGraph"],
      github: "https://github.com/adarshsoni2025/sql-business-anomaly-monitor",
      demo: "https://business-monitor.demo.dev"
    }
  ],

  // Hackathons: What was built at IIT Delhi and IIIT Delhi + Innohacks
  hackathons: [
    {
      event: "Square Hacks @ IIT Delhi",
      date: "Dec 2024",
      standing: "Top 25 National Finalist (600+ Teams)",
      project: "Gaon Bazar",
      highlight: "Selected among the Top 25 teams across India. Built Gaon Bazar, an IoT-integrated agricultural trading platform connecting farmers directly to mandi buyers for transparent pricing without middlemen.",
      tags: ["IIT Delhi", "Top 25", "IoT & Hardware", "FastAPI"]
    },
    {
      event: "Hack Hatch @ IIIT Delhi",
      date: "Nov 2024",
      standing: "Top 100 Selected Teams (1000+ Teams)",
      project: "NAP",
      highlight: "Selected in Top 100 nationwide from 1000+ applicant startups. In an intense 24-hour sprint, built NAP — a platform linking micro content creators with emerging brands for niche collaborations.",
      tags: ["IIIT Delhi", "Top 100", "Startup Sprint", "Full Stack"]
    },
    {
      event: "Innohacks 2.0 National Hackathon",
      date: "National Edition",
      standing: "Top 20 Finalist",
      project: "AI Governance Suite",
      highlight: "Competed through grueling technical pitch rounds to secure Top 20 national rank.",
      tags: ["National Finalist", "Top 20", "AI Systems"]
    }
  ],

  certifications: [
    {
      title: "Data Analytics Essentials",
      org: "Cisco Networking Academy",
      link: "https://drive.google.com/file/d/1fuQR9m93I6YGwuszfdjTxXvjCepsRo6s/view?usp=drive_link"
    },
    {
      title: "Python Essentials 1",
      org: "Cisco Networking Academy",
      link: "https://drive.google.com/file/d/14-XkBpQBdo1uSYN0rS2eSw9hpGxQYDx0/view?usp=drive_link"
    },
    {
      title: "Build Reliable Agentic AI Applications",
      org: "DeepLearning.AI",
      link: null
    },
    {
      title: "300+ Solved Problems",
      org: "LeetCode & Codolio",
      link: "https://codolio.com/profile/adarshsoni"
    }
  ]
};
