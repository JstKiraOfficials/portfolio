import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
  FiInstagram,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/contact.css';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container section-animate">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let&apos;s build something impactful.
        </p>

        <div className="contact-grid">
          {/* Left Column — Info */}
          <div className="contact-info">
            <h3>Let&apos;s Connect</h3>
            <p className="contact-message">
              I&apos;m open to freelance work, collaborations, and full-time
              opportunities. Drop me a message or reach out via social media.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="contact-detail-icon">
                  <FiMail />
                </span>
                <a href="mailto:jstkiraofficials@gmail.com">jstkiraofficials@gmail.com</a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-icon">
                  <FiPhone />
                </span>
                <a href="tel:+2347018554322">+234 701 855 4322</a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-icon">
                  <FiMapPin />
                </span>
                <span>Nigeria</span>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/jstkiraofficials"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://x.com/jstkiraofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="Twitter / X"
              >
                <FiTwitter />
              </a>
              <a
                href="https://youtube.com/jstkiratutorials"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="YouTube"
              >
                <FiYoutube />
              </a>
              <a
                href="https://wa.me/2347018554322"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com/jstkiraofficials"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
            </div>
          </div>

          {/* Right Column — Form */}
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
