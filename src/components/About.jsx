import { useNavigate } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiYoutube, FiInstagram, FiDownload } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/about.css';

function About() {
  const navigate = useNavigate();
  return (
    <section className="about section" id="about">
      <div className="container section-animate">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <img
                src="/profile.png"
                alt="Ibrahim Abdulbasit Ayomide"
                className="about-image"
              />
              <span className="about-badge" title="Available for work" />
            </div>
          </div>

          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-bio">
              I&apos;m Ibrahim — a self-driven software developer with 4+ years
              of hands-on experience building web, mobile, and AI-powered
              applications. I&apos;m passionate about solving real-world
              problems through clean code and thoughtful design.
            </p>
            <p className="about-bio">
              I recently graduated from Kwara State University with a BSc in
              Computer Science (Second Class Upper). Beyond coding, I create
              content on YouTube and write technical articles to teach and
              inspire other developers.
            </p>

            <div className="about-education">
              <span className="about-education-icon">🎓</span>
              <div>
                <div className="about-education-title">
                  BSc Computer Science — Kwara State University
                </div>
                <div className="about-education-sub">
                  Second Class Upper (2:1)
                </div>
              </div>
            </div>

            <div className="about-experience-row">
              <div className="about-experience">4+ Years Experience</div>
              <button
                className="btn btn-primary about-cv-btn"
                onClick={() => navigate('/resume')}
              >
                <FiDownload /> Download CV
              </button>
            </div>
            <div className="about-socials">
              <a
                href="https://github.com/jstkiraofficials"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://x.com/jstkiraofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link"
                aria-label="Twitter / X"
              >
                <FiTwitter />
              </a>
              <a
                href="https://youtube.com/jstkiratutorials"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link"
                aria-label="YouTube"
              >
                <FiYoutube />
              </a>
              <a
                href="https://wa.me/2347018554322"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com/jstkiraofficials"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
