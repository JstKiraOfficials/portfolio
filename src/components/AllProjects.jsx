import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi';
import { BsSun, BsMoon } from 'react-icons/bs';
import { projects } from '../data/projects.js';
import '../styles/projects.css';
import '../styles/allprojects.css';

const categories = ['All', ...new Set(projects.map((p) => p.category))];

function AllProjects({ theme, toggleTheme }) {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="all-projects-page">
      <div className="container">
        <div className="all-projects-header">
          <div className="all-projects-topbar">
            <button className="all-projects-back" onClick={() => navigate('/')}>
              <FiArrowLeft /> Back to Home
            </button>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <BsSun /> : <BsMoon />}
            </button>
          </div>
          <h1 className="section-title">All Projects</h1>
          <p className="section-subtitle">
            Everything I&apos;ve built — filtered by category
          </p>

          <div className="all-projects-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="all-projects-grid">
          {filtered.map((project) => (
            <div className="project-card" key={project.title}>
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span className="project-tech-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FiGithub className="project-link-icon" />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <FiExternalLink className="project-link-icon" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
