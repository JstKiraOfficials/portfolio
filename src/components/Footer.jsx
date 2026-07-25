import { Link } from 'react-scroll';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">Jst Kira</div>

        <div className="footer-links">
          <Link to="about" smooth={true} duration={500} offset={-70}>
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} offset={-70}>
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            Projects
          </Link>
          <Link to="services" smooth={true} duration={500} offset={-70}>
            Services
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            Contact
          </Link>
        </div>

        <p className="footer-copy">
          &copy; 2025 Ibrahim Abdulbasit Ayomide. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
