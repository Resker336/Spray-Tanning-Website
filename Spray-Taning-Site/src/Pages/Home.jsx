import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import ReviewGallery from '../components/ReviewGallery';

import heroImage from '../assets/images/luiz-rogerio-nunes-daAfiRiVv2U-unsplash.jpg';
import SocialsImage from '../assets/images/juli-kosolapova-HX3r8uRpm2E-unsplash.jpg';
import SiennaX from '../assets/images/SiennaX.png';
import Laura from '../assets/images/Laura.png'


function Home() {

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smooth scroll to About section
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth scroll to the bottom
    const ScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  // Smooth scroll to Reviews section
  const scrollToReviews = () => {
    const reviewsSection = document.querySelector('.review-gallery-section');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Testimonials data - 6 reviews total
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      stars: 5,
      platform: "Google Reviews",
      comment: "Amazing service! The tan looked so natural and lasted over a week. Laura is professional and makes you feel comfortable throughout the entire process."
    },
    {
      id: 2,
      name: "Emma Williams",
      stars: 5,
      platform: "Facebook",
      comment: "Best spray tan I've ever had! No streaks, no orange tones, just a beautiful golden glow. I've been coming back every month and it's always perfect!"
    },
    {
      id: 3,
      name: "Jessica Martinez",
      stars: 4,
      platform: "Instagram",
      comment: "Love my tan! Laura is so friendly and knowledgeable. The color was perfect for my skin tone and everyone asked where I got my gorgeous glow."
    },
    {
      id: 4,
      name: "Rachel Thompson",
      stars: 5,
      platform: "Google Reviews",
      comment: "I was nervous about getting a spray tan but Laura made the whole experience easy and comfortable. Results were absolutely flawless! Highly recommend."
    },
    {
      id: 5,
      name: "Amanda Davis",
      stars: 5,
      platform: "Facebook",
      comment: "Been coming to Laura for months now. Consistent quality every time. She's the only person I trust with my tans! Professional, friendly, and talented."
    },
    {
      id: 6,
      name: "Michelle Brown",
      stars: 5,
      platform: "Instagram",
      comment: "Obsessed with my results! The tan faded so evenly and naturally. Laura really knows what she's doing and uses high-quality products."
    }
  ];

  // State to track current review and animation direction
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(''); // 'left' or 'right'

  // Function to go to next review
  const nextReview = () => {
    setDirection('right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 50);
  };

  // Function to go to previous review
  const prevReview = () => {
    setDirection('left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }, 50);
  };

  // Function to render stars
  const renderStars = (count) => {
    return '⭐'.repeat(count);
  };

  // Get previous, current, and next testimonials for display
  const getPrevIndex = () => {
    return currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return (currentIndex + 1) % testimonials.length;
  };

  return (
    <div className="home-page">
      {/* Hero Section with Background Image */}
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Laura's Spray Tanning,<br />Golden Glow</h1>
          <p className="hero-subtitle">
            Glow with confidence at a trusted, home-based spray tanning studio right here in Paignton.
            Laura uses premium Sienna X products to create a flawless, natural tan tailored just for you.<br /><br />
            Weddings, proms, nights out, or year-round radiance - book your appointment and visit Laura from the comfort of her own home.
          </p>
          <div className="cta-buttons">
            <button onClick={ScrollToBottom} className="btn-primary">Book Now</button>
            <button onClick={scrollToAbout} className="btn-secondary">Learn More</button>
          </div>
        </div>

        {/* THIS IS SCROLL INDICATOR */}
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <h2>About Us</h2>

        {/* Top Row - Image Left, Text Right */}
        <div className="about-row">
          <div className="about-image">
            <div className="image-placeholder">
              <img src={SiennaX} alt="Sienna X Product" />
            </div>
          </div>
          <div className="about-text">
            <h3>Premium Sienna X Products</h3>
            <p>Sienna X is one of the UK's most trusted and popular spray tanning brands. It's known for delivering a beautifully natural-looking glow, with shades tailored to suit every skin tone. Formulated with skin-friendly, natural ingredients, Sienna X provides a safe alternative to sun exposure - helping you achieve a radiant tan without the risk of skin damage.</p>
            <p>Laura uses Sienna X in her Paignton home studio to ensure every client enjoys a professional, flawless finish. The brand is widely recognised and has been featured on major TV shows and in national magazines, giving you complete confidence in the quality and reputation behind your tan.</p>
          </div>
        </div>

        {/* Bottom Row - Text Left, Image Right */}
        <div className="about-row">
          <div className="about-text">
            <h3>Expert Care & Experience</h3>
            <p>With nearly a decade and a half of professional experience, Laura brings confidence, skill, and warmth to every appointment. Her friendly and welcoming approach has earned her many positive reviews from clients who trust her for beautifully natural, reliable results.</p>
            <p>As an approved partner using Sienna X products, Laura is authorised to work with and promote one of the UK's leading spray tanning brands. From her comfortable home studio in Paignton, she offers a professional and relaxing experience - ensuring you leave with a flawless glow every time.</p>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className='Re-shape'>
                <img src={Laura} alt="Laura at her best" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section className="socials-section" style={{ backgroundImage: `url(${SocialsImage})` }}>
        <div className="socials-overlay"></div>
        <div className="socials-content">
          <a
            href="https://www.instagram.com/laurasspraytanningsienna/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram-link"
          >
            <div className="social-icon-large">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <h3>Follow Us</h3>
            <p>@laurasspraytanningsienna</p>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100057061727479"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link facebook-link"
          >
            <div className="social-icon-large">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </div>
            <h3>Follow Us</h3>
            <p>Laura's Spray Tanning </p>
          </a>
        </div>
      </section>

      {/* Review Gallery with Customer Photos */}
      <ReviewGallery />

    </div >
  );
}

export default Home;