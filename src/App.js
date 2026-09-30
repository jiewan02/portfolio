import React from 'react';
import './App.css';

function App() {
  const experience = [
    {
      id: 1,
      role: "Undergraduate Research Assistant",
      org: "GLINT Lab, Johns Hopkins University",
      type: "Research",
      dates: "Sep 2026 – Present",
      points: [
        "Building a benchmark of LLM color knowledge with Profs. Jennifer Hu and Marina Bedny, adapted from studies of blind and sighted adults."
      ]
    },
    {
      id: 2,
      role: "Undergraduate Researcher — Intersection Safety",
      org: "Johns Hopkins University × Prince George's County DPW&T",
      type: "Research",
      dates: "May 2026 – Present",
      points: [
        "Analyzed roadside LiDAR data covering millions of vehicle movements to surface recurring near-collision patterns before serious crashes occur.",
        "Presented findings and signal-timing recommendations to county staff, backed by an automated pipeline that re-runs as new data arrives.",
        "Leading a Fall 2026 independent study applying FHWA/AASHTO sight-distance criteria to link limited visibility to near-miss clusters."
      ]
    },
    {
      id: 3,
      role: "Software Engineering Intern",
      org: "Manyfast · Seoul",
      type: "Industry",
      dates: "Jun 2026 – Aug 2026",
      points: [
        "Shipped 30+ improvements to an AI-powered, real-time collaborative wireframing platform across product, admin tools, and server (TypeScript, React, NestJS).",
        "Redesigned shared project links so outside viewers see the same live canvas as editors, with updates and comments appearing instantly.",
        "Built the platform's overload protection — request throttling, per-team usage limits, and graceful degradation when infrastructure fails."
      ]
    },
    {
      id: 4,
      role: "AI Project Developer Trainee",
      org: "Alpaco Campus · Seoul",
      type: "Training",
      dates: "Aug 2025 – Dec 2025",
      points: [
        "Designed and built two AI products end to end — EduScope and Eat Smart! (see Projects)."
      ]
    },
    {
      id: 5,
      role: "Full-Stack Developer Trainee",
      org: "Korea Software Technology Association · Seoul",
      type: "Training",
      dates: "Feb 2025 – Jul 2025",
      points: [
        "Delivered frontend, backend, and database features for three team-built web applications — REST APIs, authentication, content creation, and search."
      ]
    },
    {
      id: 6,
      role: "Military Researcher, Sergeant",
      org: "ROK Army Logistics Command · Daejeon",
      type: "Service",
      dates: "Jun 2023 – Dec 2024",
      points: [
        "Contributed to AI and data-analysis tools for logistics resource allocation, and built text-analysis workflows to categorize and summarize civilian complaints."
      ]
    },
    {
      id: 7,
      role: "Research Assistant",
      org: "Isik Lab, Johns Hopkins University",
      type: "Research",
      dates: "Jan 2023 – Jun 2023",
      points: [
        "Preprocessed and analyzed EEG and intracranial neural recordings for studies of human cognition and social perception."
      ]
    }
  ];

  const projects = [
    {
      id: 0,
      title: "From Raw LiDAR to Real Recommendations",
      category: "Research · Data Analysis",
      image: "assets/lidar.jpg",
      description: "Traffic-safety study for Prince George's County DPW&T. Using 4.5M LiDAR-tracked vehicle movements, traced 94% of recorded near-misses to two permissive left turns — and none during the protected arrow. Presented to county staff to support protected-only left turns at peak hours.",
      techStack: ["LiDAR", "Data Analysis", "Statistics", "Traffic Safety"]
    },
    {
      id: 1,
      title: "Eat Smart!",
      category: "LLMs & Web Services",
      image: "assets/eat-smart.png",
      description: "LLM + Neo4j graph RAG recipe recommender connecting a React Frontend, Node.js/Express backend, and Flask model server.",
      techStack: ["React", "Node.js", "Flask", "Neo4j", "LLM"],
      link: "https://docs.google.com/presentation/d/1u_-9a2Bz_JRHq_c1LveCPB-J_Uv3NUIX/edit?usp=sharing&ouid=101224762682372742528&rtpof=true&sd=true",
      linkText: "View Presentation"
    },
    {
      id: 2,
      title: "EduScope",
      category: "Computer Vision",
      image: "assets/eduscope.png",
      description: "AI-based classroom engagement system using YOLO detectors to track phone use, gaze, and hand-raising.",
      techStack: ["Python", "YOLO", "Computer Vision", "AI"],
      link: "https://drive.google.com/file/d/1HzUh_vOLSXdveSOjR65IhVcNUrBcM4tw/view?usp=sharing",
      linkText: "View Portfolio PDF"
    },
    {
      id: 3,
      title: "GameCut (Final Project)",
      category: "Full Stack Web Service",
      description: "Full-stack web application final project. My responsibility was backend implementation and database design for the web game and ranking system.",
      techStack: ["Node.js", "SQL", "Express", "Backend"],
      link: "https://github.com/Sonjulking/GameCut_final_backend.git",
      linkText: "View GitHub Repo"
    },
    {
      id: 4,
      title: "SHINE",
      category: "Full Stack Web Application",
      image: "assets/shine.png",
      description: "Implemented backend and brought in Google Maps API for location-based features. Connected markers with database information to frontend.",
      techStack: ["React", "Node.js", "SQL"],
      link: "https://github.com/leo09222022/SHINE.git",
      linkText: "View GitHub Repo"
    },
    {
      id: 5,
      title: "OneShotTwoKill",
      category: "Full Stack Web Application",
      image: "assets/oneshot.png",
      description: "First full-stack team project. Implemented backend and database connectivity.",
      techStack: ["HTML/CSS", "JavaScript", "SQL"],
      link: "https://github.com/leo09222022/OneShotTwoKill.git",
      linkText: "View GitHub Repo"
    }
  ];

  return (
    <div className="container">
      {/* 1. Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Jiewan Hong</div>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="https://github.com/jiewan02" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:jiewan2002@gmail.com">Email</a>
        </div>
      </nav>

      {/* 2. Hero Section (Intro) */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Computer Science + Cognitive Science · Johns Hopkins</p>
          <h1 className="hero-title">Aspiring AI & <br /> Software Engineer.</h1>
          <p className="hero-description">
            I build end-to-end systems that combine ML models with production-ready web services,
            and I use data to explain what is actually happening in the world — from near-misses at a
            busy intersection to what language models know about color.
          </p>
          <ul className="now-list">
            <li><span>Now</span>Building an LLM color-knowledge benchmark at GLINT Lab</li>
            <li><span>Now</span>Leading an independent study on intersection sight distance and near-misses</li>
          </ul>
          <div className="hero-buttons">
            <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">Download Resume</a>
            <a href="#projects" className="btn-secondary">View Work</a>
          </div>
        </div>
        <div className="hero-image-container">
          <img src="assets/profile.jpg" alt="Jiewan Hong" className="hero-img" />
        </div>
      </section>

      {/* 3. Experience */}
      <section id="experience" className="experience-section">
        <h2 className="section-title">Experience & Research</h2>
        <div className="timeline">
          {experience.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-meta">
                <span className="timeline-dates">{item.dates}</span>
                <span className={`type-badge type-${item.type.toLowerCase()}`}>{item.type}</span>
              </div>
              <div className="timeline-body">
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-org">{item.org}</p>
                <ul className="timeline-points">
                  {item.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Projects Grid */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">My Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <div className="card-image-wrapper">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="card-image" />
                ) : (
                  <div className="card-image-placeholder">{project.title.charAt(0)}</div>
                )}
                <span className="category-badge">{project.category}</span>
              </div>

              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>

                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>

                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">
                    {project.linkText} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Jiewan Hong. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
