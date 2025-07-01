import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav>
      <div className="nav-content">
        <div className="logo">
          <Link to="/">Artist Framework</Link>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tracks">Tracks</Link></li>
          <li><Link to="/content">Content</Link></li>
          <li><Link to="/bio">Bio</Link></li>
          <li><Link to="/bookings">Bookings</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyPress={e => { if (e.key === 'Enter') toggleMenu(); }}
        >
          <div />
          <div />
          <div />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="mobile-menu">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/tracks" onClick={() => setMenuOpen(false)}>Tracks</Link></li>
          <li><Link to="/content" onClick={() => setMenuOpen(false)}>Content</Link></li>
          <li><Link to="/bio" onClick={() => setMenuOpen(false)}>Bio</Link></li>
          <li><Link to="/bookings" onClick={() => setMenuOpen(false)}>Bookings</Link></li>
        </ul>
      )}
    </nav>
  );
}
