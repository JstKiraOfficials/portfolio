import { Link } from 'react-scroll';
import {
  FiMonitor,
  FiSmartphone,
  FiServer,
  FiDatabase,
  FiCpu,
  FiEdit3,
} from 'react-icons/fi';
import '../styles/services.css';

const services = [
  {
    icon: <FiMonitor />,
    title: 'Frontend Development',
    description:
      'Pixel-perfect, responsive web interfaces using React and modern CSS.',
  },
  {
    icon: <FiSmartphone />,
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile apps for Android and iOS using Flutter and Expo.',
  },
  {
    icon: <FiServer />,
    title: 'Backend & API Development',
    description:
      'Scalable REST APIs and server-side systems using Python, Django, and Flask.',
  },
  {
    icon: <FiDatabase />,
    title: 'Database Design',
    description:
      'Efficient relational database schemas using PostgreSQL, MySQL, and SQLite.',
  },
  {
    icon: <FiCpu />,
    title: 'AI-Powered Solutions',
    description:
      'Basic ML models and AI-integrated applications for smarter products.',
  },
  {
    icon: <FiEdit3 />,
    title: 'Technical Writing',
    description:
      'Clear, practical technical articles, tutorials, and documentation.',
  },
];

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container section-animate">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">What I can build for you</p>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <p className="services-cta-text">
            Available for freelance projects &amp; collaborations
          </p>
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            <button className="btn">Let&apos;s Talk</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
