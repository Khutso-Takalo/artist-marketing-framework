import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-content">
        <div className="logo">
          <Link to="/">Artist Framework</Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tracks">Tracks</Link></li>
          <li><Link to="/content">Content</Link></li>
          <li><Link to="/bio">Bio</Link></li>
          <li><Link to="/bookings">Bookings</Link></li>
        </ul>
      </div>
    </nav>
  );
}
