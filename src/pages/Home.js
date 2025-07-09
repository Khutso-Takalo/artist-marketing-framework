import { Link } from 'react-router-dom';
import MusicPlayer from '../components/MusicPlayer';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>🎧 Welcome to My Music World</h1>
        <p>Exclusive music, videos & more!</p>
        <Link to="/login" className="btn">Artist Login</Link>
      </header>
      <section>
        <h2>Featured Track</h2>
        <MusicPlayer />
      </section>
    </div>
  );
}

