import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiVite,
  SiFlutter,
  SiDart,
  SiExpo,
  SiPython,
  SiDjango,
  SiFlask,
  SiMysql,
  SiSqlite,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
} from 'react-icons/si';
import { FiCode } from 'react-icons/fi';
import '../styles/skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Vite', icon: <SiVite /> },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'Dart', icon: <SiDart /> },
      { name: 'Expo', icon: <SiExpo /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'Flask', icon: <SiFlask /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'SQLite', icon: <SiSqlite /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Supabase', icon: <SiSupabase /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Flet', icon: <FiCode /> },
    ],
  },
  {
    title: 'Dev Tools',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Figma', icon: <SiFigma /> },
      { name: 'VS Code', icon: <FiCode /> },
    ],
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container section-animate">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">
          Technologies I work with across web, mobile, and backend development
        </p>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-pills">
                {category.skills.map((skill) => (
                  <span className="skill-pill" key={skill.name}>
                    <span className="skill-pill-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
