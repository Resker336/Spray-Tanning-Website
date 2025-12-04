import '../css/Footer.css';
import { FaInstagram } from "react-icons/fa";
import FooterImage from "../assets/images/ryan-jubber-i7cr9kkDhAc-unsplash.jpg";

function Footer() {

    const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

  return (
    <footer className="footer" style={{ backgroundImage: `url(${FooterImage})` }}>
      <div className='Overlay'></div>
      <div className="footer-top-accent"></div>

      <div className="footer-wrapper">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Phone Section */}
          <div className="footer-section">
            <div className="footer-icon-wrapper phone">
              <span className="footer-icon">📱</span>
            </div>
            <h3 className="footer-title">Phone</h3>
            <a href="tel:+447930439004" className="footer-link">
              07930 439004
            </a>
            <p className="footer-description">Call for bookings & inquiries</p>
          </div>

          {/* Location Section */}
          <div className="footer-section">
            <div className="footer-icon-wrapper location">
              <span className="footer-icon">📍</span>
            </div>
            <h3 className="footer-title">Location</h3>
            <p className="footer-text">Paignton, Devon</p>
            <p className="footer-description">Professional home studio</p>
          </div>

          {/* Email Section */}
          <div className="footer-section">
            <div className="footer-icon-wrapper email">
              <span className="footer-icon">✉️</span>
            </div>
            <h3 className="footer-title">Email</h3>
            <a href="mailto:deanandlaura21@hotmail.co.uk" className="footer-link">
              deanandlaura21@hotmail.co.uk
            </a>
            <p className="footer-description">We'll respond within 24 hours</p>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="copyright">© 2025 Laura's Spray Tanning. All rights reserved.</p>
          </div>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=100057061727479"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
              aria-label="Facebook"
              title="Facebook"
            >
              f
            </a>
            <a
              href="https://www.instagram.com/laurasspraytanningsienna/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="footer-bottom-right">
            <button onClick={scrollToTop} className="back-to-top">Back to top ↑</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
