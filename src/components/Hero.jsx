import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiChevronDown } from 'react-icons/fi';
import '../styles/hero.css';

const roles = [
  'Frontend Engineer',
  'Mobile App Developer',
  'Backend Developer',
  'AI & ML Enthusiast',
  'YouTuber',
  'Content Writer',
];

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="container hero-content">
        <span className="hero-label">👋 Hello, I&apos;m</span>
        <h1 className="hero-name">Ibrahim Abdulbasit Ayomide</h1>
        <p className="hero-nickname">( Jst Kira )</p>

        <div className="hero-typing">
          {displayText}
          <span className="hero-cursor" />
        </div>

        <p className="hero-pitch">
          I build fast, scalable, and beautiful digital products — from web apps
          to mobile experiences.
        </p>

        <div className="hero-cta">
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            <button className="btn btn-primary">View Projects</button>
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            <button className="btn btn-outline">Contact Me</button>
          </Link>
        </div>
      </div>

      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-70}
        className="hero-scroll"
      >
        <span>Scroll Down</span>
        <FiChevronDown className="hero-scroll-icon" />
      </Link>
    </section>
  );
}

export default Hero;
