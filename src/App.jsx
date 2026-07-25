import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Timeline from './components/Timeline.jsx';
import Services from './components/Services.jsx';
import Content from './components/Content.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import AllProjects from './components/AllProjects.jsx';
import Resume from './components/Resume.jsx';

function HomePage({ theme, toggleTheme }) {
  /* IntersectionObserver for scroll-reveal animations */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.section-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Services />
      <Content />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/projects"
          element={
            <AllProjects theme={theme} toggleTheme={toggleTheme} />
          }
        />
        <Route
          path="/resume"
          element={
            <Resume theme={theme} toggleTheme={toggleTheme} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
