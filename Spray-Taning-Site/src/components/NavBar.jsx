import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/NavBar.css";

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


// Smooth scroll to the bottom
    const ScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

    // Detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when link is clicked
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo/Brand */}
                <div className="navbar-brand">
                    <span className="brand-icon">🌞</span>
                    <Link to="/" className="brand-name">Laura's Spray Tanning</Link>
                </div>

                {/* Hamburger Menu Button - Mobile Only */}
                <button
                    className="hamburger-menu"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                </button>

                {/* Navigation Links */}
                <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
                    <Link to="/services" className="nav-link" onClick={handleLinkClick}>Services</Link>
                    <Link to="/gallery" className="nav-link" onClick={handleLinkClick}>Gallery</Link>
                   

                    {/* Book Now Button */}
                    <div className="navbar-cta">
                        <button onClick={ScrollToBottom} className="book-now-btn book-now-btn mobile-book">Book Now</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;