// src/pages/Bio.jsx
import './Bio.css';

export default function Bio() {
  return (
    <div className="bio-page">
      <div className="bio-header">
        <img src="/profile.png" alt="Artist" className="bio-image" />
        <div className="bio-intro">
          <h2>About the Artist</h2>
          <p className="tagline">"Music is not what I do. It’s who I am."</p>
        </div>
      </div>

      <div className="bio-content">
        <p>
          I’m an independent DJ and producer pushing boundaries with genre-bending sets and immersive audio journeys. With roots in deep house and a soul soaked in rhythm, I blend underground vibes with future-forward soundscapes.
        </p>
        <p>
          From local residencies to international collaborations, my mission is simple: make people feel something real through music. Whether it’s a chilled Sunday set or a festival main stage, I deliver energy with intention.
        </p>
      </div>

      <div className="bio-highlights">
        <div className="highlight"><strong> Genre:</strong> Afro Tech / Deep House</div>
        <div className="highlight"><strong> Based In:</strong> South Africa</div>
        <div className="highlight"><strong>Years Active:</strong> 5+</div>
      </div>

      <div className="bio-cta">
        <a href="/bookings" className="bio-button">Book Me</a>
      </div>
    </div>
  );
}
