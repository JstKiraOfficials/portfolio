import { useNavigate } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/projects.js';
import '../styles/projects.css';

function Projects() {
  const navigate = useNavigate();

  return (
    <section className="projects section" id="projects">
      <div className="container section-animate">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Real work. Real problems solved.</p>

        <div className="projects-grid">
          {projects.slice(0, 3).map((project) => (
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

        <div className="projects-view-all">
          <button
            className="btn btn-outline"
            onClick={() => navigate('/projects')}
          >
            View All Projects <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
