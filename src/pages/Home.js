// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">

      {/* 🔥 Full-width DJ Banner */}
      <section className="banner-image">
        <img src="/dj-banner.png" alt="DJ on decks" />
      </section>

      {/* 🎧 Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>🎧 Artist Framework</h1>
          <p>Sound of the future. Exclusive drops. Built for listeners who feel.</p>
          <Link to="/tracks" className="cta-button">Explore My Tracks</Link>
        </div>
      </section>

      {/* 👤 About Preview */}
      <section className="about-preview">
        <h2>Who I Am</h2>
        <p>
          I blend sonic textures into unforgettable journeys. From underground energy to timeless melodies — this is more than music. It's my language.
        </p>
        <Link to="/bio" className="learn-more">Learn More About Me →</Link>
      </section>

      {/* 🔊 Latest Mix */}
      <section className="latest-preview">
        <h2>🔥 Latest Release</h2>
        <div className="latest-card">
          <p>🎵 Summer Vibes Vol. 1</p>
          <Link to="/tracks" className="listen-link">→ Listen Now</Link>
        </div>
      </section>
    </div>
  );
}
