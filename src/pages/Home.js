import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const events = [
    {
      id: 1,
      title: 'Sunset Beach Party – July 20, 2025',
      mediaType: 'image',
      mediaSrc: '/events/beach-party.jpg',
    },
    {
      id: 2,
      title: 'Deep House Underground – August 5, 2025',
      mediaType: 'video',
      mediaSrc: '/events/underground.mp4',
    },
    {
      id: 3,
      title: 'Chill Beats Night – September 12, 2025',
      mediaType: 'image',
      mediaSrc: '/events/chill-night.jpg',
    },
  ];

  return (
    <div className="home">
      {/* 🎧 Hero Section */}
      <section className="hero-section">
        <div className="overlay">
          <div className="hero-content">
            <h1>Feel The Sound.</h1>
            <p>Exclusive tracks & live sets crafted for the bold.</p>
            <Link to="/tracks" className="cta-button">Listen Now</Link>
          </div>
        </div>
      </section>

      {/* 🗓️ Events Section */}
      <section className="events-section">
        <h2>Upcoming Events 🗓️</h2>
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              {event.mediaType === 'image' ? (
                <img src={event.mediaSrc} alt={event.title} />
              ) : (
                <video controls>
                  <source src={event.mediaSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <h3>{event.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 Latest Release Preview */}
      <section className="featured-track">
        <h2>Latest Drop 🔥</h2>
        <div className="track-card">
          <img src="/tracks/summer-vibes-cover.jpg" alt="Summer Vibes Cover" />
          <div className="track-info">
            <p>🎵 Summer Vibes Vol. 1</p>
            <audio controls>
              <source src="/tracks/summer-vibes-preview.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <Link to="/tracks" className="listen-link">→ Full Track & More</Link>
          </div>
        </div>
      </section>

      {/* 👤 About Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I’m an artist dedicated to pushing boundaries in music.
          From deep house to chill beats, my mission is to create soundtracks for your life.
        </p>
        <Link to="/bio" className="learn-more">Discover My Story →</Link>
      </section>
    </div>
  );
}
