// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">

        {/* Contact Info */}
        <div className="contact-info">
          <p>📧 <a href="mailto:your.email@example.com">your.email@example.com</a></p>
          <p>📞 <a href="tel:+1234567890">+1 234 567 890</a></p>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>© {new Date().getFullYear()} Artist Framework. All rights reserved.</p>
      </div>
    </footer>
  );
}
