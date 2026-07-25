import '../styles/timeline.css';

const timelineData = [
  {
    year: '2021',
    title: 'Started My Coding Journey',
    description:
      'Picked up HTML, CSS, and JavaScript. Built my first websites and fell in love with development.',
  },
  {
    year: '2022',
    title: 'Went Full Stack',
    description:
      'Learned Python, Django, and started building backend APIs. First database-connected app.',
  },
  {
    year: '2023',
    title: 'Entered Mobile Development',
    description:
      'Discovered Flutter and Dart. Built cross-platform mobile apps from scratch.',
  },
  {
    year: '2024',
    title: 'Explored AI & Machine Learning',
    description:
      'Started learning ML fundamentals, built prediction models, and integrated AI into web projects.',
  },
  {
    year: '2025',
    title: 'Graduated & Went Deeper',
    description:
      'Completed BSc Computer Science at KWASU (2:1). Doubled down on React, backend systems, and real-world projects.',
  },
  {
    year: '2026',
    title: 'Building & Sharing',
    description:
      'Freelancing, creating YouTube content, writing technical blogs, and building in public.',
  },
];

function Timeline() {
  return (
    <section className="timeline section" id="timeline">
      <div className="container section-animate">
        <h2 className="section-title">My Journey</h2>
        <p className="section-subtitle">
          4+ years of building, learning, and shipping
        </p>

        <div className="timeline-wrapper">
          {timelineData.map((item) => (
            <div className="timeline-item" key={item.year}>
              <span className="timeline-dot" />
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
