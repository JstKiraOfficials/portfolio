import { FaYoutube } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';
import '../styles/content.css';

function Content() {
  return (
    <section className="content-section section" id="content">
      <div className="container section-animate">
        <h2 className="section-title">Content &amp; Writing</h2>
        <p className="section-subtitle">I don&apos;t just build — I teach</p>

        <div className="content-grid">
          {/* YouTube */}
          <div className="content-card">
            <div className="content-card-icon youtube">
              <FaYoutube />
            </div>
            <h3 className="content-card-title">YouTube</h3>
            <p className="content-card-channel">Jst Kira Tutorials</p>
            <p className="content-card-text">
              I create programming tutorials, project walkthroughs, and
              developer tips on YouTube.
            </p>
            <a
              href="https://youtube.com/jstkiratutorials"
              target="_blank"
              rel="noopener noreferrer"
              className="content-card-btn"
            >
              Visit Channel →
            </a>
          </div>

          {/* Blog */}
          <div className="content-card">
            <div className="content-card-icon blog">
              <FiEdit3 />
            </div>
            <h3 className="content-card-title">Blog / Articles</h3>
            <p className="content-card-channel">Jst Kira Publications</p>
            <p className="content-card-text">
              I write in-depth technical articles on web development, mobile
              apps, and AI tools.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="content-card-btn"
            >
              Read Articles →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
