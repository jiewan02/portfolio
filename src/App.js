import React from 'react';
import './App.css';

function App() {
  const projects = [
    {
      id: 1,
      title: "Eat Smart!",
      category: "LLMs & Web Services",
      image: "/assets/eat-smart.png",
      description: "LLM + Neo4j graph RAG recipe recommender connecting a React Frontend, Node.js/Express backend, and Flask model server.",
      techStack: ["React", "Node.js", "Flask", "Neo4j", "LLM"],
      link: "https://docs.google.com/presentation/d/1u_-9a2Bz_JRHq_c1LveCPB-J_Uv3NUIX/edit?usp=sharing&ouid=101224762682372742528&rtpof=true&sd=true",
      linkText: "View Presentation"
    },
    {
      id: 2,
      title: "EduScope",
      category: "Computer Vision",
      image: "/assets/eduscope.png",
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
      image: "/assets/shine.png",
      description: "Implemented backend and brought in Google Maps API for location-based features. Connected markers with database information to frontend.",
      techStack: ["React", "Node.js", "SQL"],
      link: "https://github.com/leo09222022/SHINE.git",
      linkText: "View GitHub Repo"
    },
    {
      id: 5,
      title: "OneShotTwoKill",
      category: "Full Stack Web Application",
      image: "/assets/oneshot.png",
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
          <a href="https://github.com/jiewan02" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:jiewan2002@gmail.com">Email</a>
        </div>
      </nav>

      {/* 2. Hero Section (Intro) */}
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-title">Aspiring AI & <br /> Software Engineer.</h1>
          <p className="hero-description">
            I love to explore and build end-to-end systems that combine ML/DL models with production-ready web services.
            Currently studying Deep Learning techniques for Computer Vision and LLMs.
          </p>
          <div className="hero-buttons">
            <a href="/resume.pdf" target="_blank" className="btn-primary">Download Resume</a>
            <a href="#projects" className="btn-secondary">View Work</a>
          </div>
        </div>
        <div className="hero-image-container">
          <img src="/assets/profile.jpg" alt="Jiewan Hong" className="hero-img" />
        </div>
      </section>

      {/* 3. Projects Grid */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">My Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <div className="card-image-wrapper">
                <img src={project.image} alt={project.title} className="card-image" />
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

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">
                  {project.linkText} →
                </a>
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