import { useNavigate } from 'react-router-dom';
import {
  FiArrowLeft,
  FiDownload,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';
import { FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import '../styles/resume.css';

function Resume({ theme, toggleTheme }) {
  const navigate = useNavigate();

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="resume-page">
      {/* Top bar — hidden on print */}
      <div className="resume-topbar">
        <button className="resume-back" onClick={() => navigate('/')}>
          <FiArrowLeft /> Back to Home
        </button>
        <div className="resume-topbar-actions">
          <button className="resume-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <BsSun /> : <BsMoon />}
          </button>
          <button className="resume-download-btn" onClick={handleDownload}>
            <FiDownload /> Download PDF
          </button>
        </div>
      </div>

      {/* ─────────────────── CV DOCUMENT ─────────────────── */}
      <div className="cv">

        {/* Header */}
        <div className="cv-header">
          <div className="cv-name">Ibrahim Abdulbasit Ayomide</div>
          <div className="cv-title">
            Software Engineer
          </div>
          <div className="cv-contact-row">
            <a href="mailto:jstkiraofficials@gmail.com" className="cv-contact-item">
              <FiMail size={12} /> jstkiraofficials@gmail.com
            </a>
            <a href="tel:+2347018554322" className="cv-contact-item">
              <FiPhone size={12} /> +234 701 855 4322
            </a>
            <span className="cv-contact-item">
              <FiMapPin size={12} /> Kwara State, Nigeria
            </span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="cv-contact-item">
              <FiGithub size={12} /> github.com/jstkiraofficials
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cv-contact-item">
              <FiLinkedin size={12} /> linkedin.com/in/jstkiraofficials
            </a>
            <a href="https://www.youtube.com/@jstkiratutorials" target="_blank" rel="noopener noreferrer" className="cv-contact-item">
              <FaYoutube size={12} /> Jst Kira Tutorials
            </a>
            <a href="https://wa.me/2347018554322" target="_blank" rel="noopener noreferrer" className="cv-contact-item">
              <FaWhatsapp size={12} /> +234 7018 554 322
            </a>
          </div>
        </div>

        {/* Body */}
        <div className="cv-body">

          {/* ── Sidebar ── */}
          <div className="cv-sidebar">

            {/* Education */}
            <div className="cv-sidebar-section">
              <div className="cv-section-title">Education</div>
              <div className="cv-edu-degree">BSc Computer Science</div>
              <div className="cv-edu-school">Kwara State University (KWASU)</div>
              <div className="cv-edu-grade">Second Class Upper — 2:1</div>
              <div className="cv-edu-year">2021 – 2025</div>
            </div>

            {/* Technical Skills */}
            <div className="cv-sidebar-section">
              <div className="cv-section-title">Technical Skills</div>

              <div className="cv-skill-group">
                <div className="cv-skill-group-name">Frontend</div>
                <div className="cv-skill-tags">
                  {['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite'].map(s => (
                    <span className="cv-skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="cv-skill-group">
                <div className="cv-skill-group-name">Mobile</div>
                <div className="cv-skill-tags">
                  {['Flutter', 'Dart', 'Expo', 'React Native'].map(s => (
                    <span className="cv-skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="cv-skill-group">
                <div className="cv-skill-group-name">Backend</div>
                <div className="cv-skill-tags">
                  {['Python', 'Django', 'Flask', 'REST APIs'].map(s => (
                    <span className="cv-skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="cv-skill-group">
                <div className="cv-skill-group-name">Databases</div>
                <div className="cv-skill-tags">
                  {['PostgreSQL', 'MySQL', 'SQLite', 'Firebase', 'Supabase'].map(s => (
                    <span className="cv-skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="cv-skill-group">
                <div className="cv-skill-group-name">AI / ML</div>
                <div className="cv-skill-tags">
                  {['Scikit-learn', 'SVM', 'Naive Bayes', 'Logistic Regression', 'PSO'].map(s => (
                    <span className="cv-skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="cv-skill-group">
                <div className="cv-skill-group-name">Tools</div>
                <div className="cv-skill-tags">
                  {['Git', 'GitHub', 'Figma', 'VS Code', 'Flet'].map(s => (
                    <span className="cv-skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="cv-sidebar-section">
              <div className="cv-section-title">Languages</div>
              <ul className="cv-list">
                <li>English — Fluent</li>
                <li>Yoruba — Native</li>
              </ul>
            </div>

            {/* Interests */}
            <div className="cv-sidebar-section">
              <div className="cv-section-title">Interests</div>
              <ul className="cv-list">
                <li>Open Source Development</li>
                <li>AI & Machine Learning Research</li>
                <li>Technical Content Creation</li>
                <li>Mobile UX Design</li>
                <li>Developer Community Building</li>
              </ul>
            </div>

          </div>

          {/* ── Main Content ── */}
          <div className="cv-main">

            {/* Professional Summary */}
            <div className="cv-main-section">
              <div className="cv-section-title">Professional Summary</div>
              <p className="cv-summary">
                Self-driven and results-oriented software developer with 4+ years of hands-on
                experience designing and building production-grade web, mobile, and AI-powered
                applications. Graduate of Kwara State University with a BSc in Computer Science
                (Second Class Upper). Adept at translating business requirements into clean,
                maintainable code across the full stack — from React interfaces and Django APIs
                to Flutter mobile apps and machine learning models. Passionate about developer
                education through YouTube content creation and technical writing.
              </p>
            </div>

            {/* Work Experience */}
            <div className="cv-main-section">
              <div className="cv-section-title">Experience</div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <div className="cv-item-title">Freelance Software Developer</div>
                  <div className="cv-item-period">2022 – Present</div>
                </div>
                <div className="cv-item-subtitle">Self-Employed · Remote</div>
                <div className="cv-item-desc">
                  Delivered end-to-end web and mobile applications for clients across various industries.
                  Built responsive React frontends, Django/Flask REST APIs, and Flutter mobile apps.
                  Integrated third-party services including Supabase, Firebase, and payment gateways.
                  Maintained ongoing client relationships and provided technical consultation.
                </div>
              </div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <div className="cv-item-title">YouTube Content Creator — Jst Kira Tutorials</div>
                  <div className="cv-item-period">2023 – Present</div>
                </div>
                <div className="cv-item-subtitle">Self-Managed · YouTube & Social Media</div>
                <div className="cv-item-desc">
                  Produce programming tutorials, project walkthroughs, and developer tip videos covering
                  web development, mobile development, and AI/ML topics. Write accompanying technical
                  articles and blog posts to support the developer community.
                </div>
              </div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <div className="cv-item-title">Student Research — AI & Machine Learning</div>
                  <div className="cv-item-period">2024 – 2025</div>
                </div>
                <div className="cv-item-subtitle">KWASU Department of Computer Science</div>
                <div className="cv-item-desc">
                  Final-year research project: developed a heart disease prediction system using
                  Support Vector Machine (SVM) optimized with Particle Swarm Optimization (PSO),
                  achieving improved classification accuracy over baseline models. Implemented
                  full data preprocessing, feature selection, and model evaluation pipeline.
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="cv-main-section">
              <div className="cv-section-title">Key Projects</div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <div className="cv-item-title">Heart Disease Prediction — SVM &amp; PSO</div>
                  <div className="cv-item-period">AI/ML</div>
                </div>
                <div className="cv-item-desc">
                  ML model predicting heart disease using SVM optimized with Particle Swarm Optimization
                  for superior accuracy. Includes full data pipeline, feature engineering, and evaluation.
                </div>
                <div className="cv-item-tech">
                  {['Python', 'Scikit-learn', 'SVM', 'PSO', 'Pandas'].map(t => (
                    <span className="cv-item-tech-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <div className="cv-item-title">SMS Spam Classifier — NLP Tool</div>
                  <div className="cv-item-period">AI/ML</div>
                </div>
                <div className="cv-item-desc">
                  Real-time SMS spam classification using Naive Bayes and Logistic Regression with
                  Bag of Words and stemming. Achieved high precision and recall on benchmark datasets.
                </div>
                <div className="cv-item-tech">
                  {['Python', 'NLTK', 'Naive Bayes', 'Logistic Regression', 'BoW'].map(t => (
                    <span className="cv-item-tech-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <div className="cv-item-title">TaskFlow — Productivity App</div>
                  <div className="cv-item-period">Web</div>
                </div>
                <div className="cv-item-desc">
                  Full-stack Kanban task management app with real-time updates, user auth, and
                  collaborative boards — deployed with Supabase for backend-as-a-service.
                </div>
                <div className="cv-item-tech">
                  {['React', 'Django', 'PostgreSQL', 'Supabase'].map(t => (
                    <span className="cv-item-tech-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <div className="cv-item-title">ShopEase — Mobile E-Commerce App</div>
                  <div className="cv-item-period">Mobile</div>
                </div>
                <div className="cv-item-desc">
                  Cross-platform Flutter e-commerce application with product catalog, cart system,
                  and payment gateway integration for both Android and iOS.
                </div>
                <div className="cv-item-tech">
                  {['Flutter', 'Dart', 'Firebase'].map(t => (
                    <span className="cv-item-tech-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>

            </div>

            {/* Certifications / Extra */}
            <div className="cv-main-section">
              <div className="cv-section-title">Additional</div>
              <div className="cv-item">
                <div className="cv-item-header">
                  <div className="cv-item-title">Technical Writing &amp; Developer Education</div>
                </div>
                <div className="cv-item-desc">
                  Author of technical articles on web development, mobile engineering, and AI/ML.
                  Actively builds in public and shares knowledge through video and written content
                  to grow the developer community in Nigeria and beyond.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
