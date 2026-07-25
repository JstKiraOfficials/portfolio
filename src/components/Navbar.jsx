import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { BsSun, BsMoon } from 'react-icons/bs';
import '../styles/navbar.css';

const navItems = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'timeline', label: 'Timeline' },
  { to: 'services', label: 'Services' },
  { to: 'content', label: 'Content' },
  { to: 'contact', label: 'Contact' },
];

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="navbar-brand"
          onClick={closeMenu}
        >
          Jst Kira
        </Link>

        <div className="navbar-links">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <BsSun /> : <BsMoon />}
          </button>

          <button
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active"
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
