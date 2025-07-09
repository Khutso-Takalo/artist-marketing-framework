import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🎶 ArtistSite</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tracks">Tracks</Link></li>
        <li><Link to="/content">Content</Link></li>
        <li><Link to="/boi">Boi</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
}
