import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Services.css';

import GreenPop from '../assets/images/pexels-mikhail-nilov-8158564.jpg'
import Pool from '../assets/images/pexels-mikhail-nilov-8158560.jpg'
import PoolGorl from '../assets/images/pexels-mikhail-nilov-8158580.jpg'
import BodyPos from '../assets/images/STsign.png'
import LauraImage from '../assets/images/LauraIMG.png'


function Services() {
  const [activeTab, setActiveTab] = useState('fullBody');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToPrices = () => {
    const pricesSection = document.querySelector('.pricing-showcase');
    if (pricesSection) {
      pricesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExpectation = () => {
    const expectSection = document.querySelector('.appointment-journey');
    if (expectSection) {
      expectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSafety = () => {
    const safetySection = document.querySelector('.safety-hygiene-section');
    if (safetySection) {
      safetySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBook = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  // Pricing tiers
  const pricingOptions = [
    {
      id: 'fullBody',
      name: 'Full Body',
      price: '£30',
      description: 'Complete head-to-toe spray tan',
      features: ['Full coverage', 'Premium Sienna X', 'Professional finish', 'Lasting 7-10 days']
    },
    {
      id: 'halfBody',
      name: 'Half Body',
      price: '£20',
      description: 'Waist down coverage',
      features: ['Lower body', 'Premium Sienna X', 'Professional finish', 'Lasting 7-10 days']
    }
  ];

  // Safety features
  const safetyFeatures = [
    {
      category: 'PPE & Protection',
      icon: '🛡️',
      items: ['Medical-grade visor', 'Professional face mask', 'Disposable apron & gloves', 'Hand sanitiser available'],
      highlight: 'Your safety is our priority'
    },
    {
      category: 'Health Screening',
      icon: '🏥',
      items: ['Pre-appointment checklist', 'Recent travel verification', 'COVID-19 status check', 'NHS Test & Trace compliant'],
      highlight: 'Fully compliant with regulations'
    },
    {
      category: 'Studio Standards',
      icon: '🧼',
      items: ['Enhanced cleaning between appointments', 'Social distancing maintained', 'Single-client sessions', 'Premium products only'],
      highlight: 'Immaculate hygiene standards'
    }
  ];

  return (
    <div className="services-page-improved">
      {/* Enhanced Header with Hero Section */}
      <section className="hero-header-improved">
        <div className="hero-overlay"></div>
        <div className="hero-content-improved">
          <div className="hero-text">
            <h1>Professional Care <br /> & Services</h1>
            <p className="hero-description">Experience a flawless, natural-looking glow with Sienna X premium products in our comfortable home studio</p>
            <div className="header-buttons-improved">
              <button onClick={scrollToPrices} className="btn-primary">View Pricing</button>
              <button onClick={scrollToExpectation} className="btn-secondary">Our Process</button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Pricing Showcase Section */}
      <section className="pricing-showcase">
        <div className="pricing-container">
          <div className="Psection-header">
            <h2>Simple, Transparent Pricing</h2>
            <p>Professional results at competitive rates. Available in different strengths – ask about our custom options</p>
          </div>

          <div className="pricing-grid">
            {pricingOptions.map((option) => (
              <div key={option.id} className="pricing-card-improved">
                <div className="pricing-header">
                  <h3>{option.name}</h3>
                  <p className="pricing-desc">{option.description}</p>
                </div>

                <div className="price-display">
                  <span className="currency">£</span>
                  <span className="amount">{option.price.replace('£', '')}</span>
                </div>

                <ul className="features-list">
                  {option.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <button onClick={scrollToBook} className="btn-primary booking-btn">Book Now</button>
              </div>
            ))}
          </div>

          <div className="pricing-note">
            <p>💡 <strong>Tip:</strong> Different strengths available depending on your desired tan intensity. Contact us for custom recommendations!</p>
          </div>
        </div>
      </section>

      {/* Appointment Journey Timeline */}
      <section className="appointment-journey" style={{ backgroundImage: `url(${GreenPop})` }}>
        <div className="journey-container">
          <div className="section-header">
            <h2>What to Expect at Your Appointment</h2>
            <p>A step-by-step guide through your spray tan experience</p>
          </div>

          <div className="journey-content">
            <div className="journey-item">
              <h3>Personal Consultation</h3>
              <p>Personal consultation to discuss your desired result. Face wipes provided for makeup removal. Sticky feet, disposable hair cap, and thong supplied.</p>
            </div>

            <div className="journey-item">
              <h3>Preparation</h3>
              <p>Barrier cream applied to dry areas (ankles, knees, elbows, etc.). Professional spray tan using a pop-up cubicle and MAXI MIST machine.</p>
            </div>

            <div className="journey-item">
              <h3>Application</h3>
              <p>Fresh towels and a lightweight cotton dress provided for immediate wear. Professional finish tailored to your preferences.</p>
            </div>

            <div className="journey-item">
              <h3>Complete</h3>
              <p>You leave with a flawless, natural-looking glow. Your tan will last 7-10 days with proper care and moisturising.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="included-steps">
        <div className="included-steps-container">
          <h2>What’s Included in Your Appointment</h2>

          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Pre-Appointment Consultation</h3>
              <p>
                A personalised chat to understand your skin tone, tanning goals, and any concerns.
                Laura ensures you feel comfortable and fully informed before we begin.
              </p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Skin Preparation Guidance</h3>
              <p>
                Gentle advice on exfoliation, shaving, hydration and what to avoid before your session
                so your tan applies smoothly and evenly.
              </p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Professional Tanning Application</h3>
              <p>
                A flawless, natural-looking spray tan using premium Sienna X products, customised
                for your undertone, occasion, and desired depth.
              </p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Drying, Finishing & Comfort Care</h3>
              <p>
                Quick-dry techniques, barrier cream where needed, and comfortable studio atmosphere
                so you feel relaxed throughout.
              </p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Aftercare Guidance</h3>
              <p>
                Easy-to-follow aftercare tips so your glow lasts longer — from shower timings to
                moisturising, clothing choices and maintenance.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Safety & Hygiene Section */}
      <section className="safety-hygiene-section" style={{ backgroundImage: `url(${PoolGorl})` }}>
        <div className="safety-container">
          <div className="section-header">
            <h2>Safety & Hygiene Standards</h2>
            <p>Your health and safety are our top priorities. We exceed industry standards</p>
          </div>

          <div className="safety-grid">
            {safetyFeatures.map((safety, idx) => (
              <div key={idx} className="safety-feature-card">
                <div className="safety-icon">{safety.icon}</div>
                <h3>{safety.category}</h3>
                <p className="safety-highlight">{safety.highlight}</p>
                <ul className="safety-list">
                  {safety.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Health Checklist */}
          <div className="health-checklist-box">
            <h3>📋 Pre-Appointment Health Checklist</h3>
            <p>Please reschedule if you answer yes to any:</p>
            <ul className="checklist">
              <li>Have you travelled abroad recently?</li>
              <li>Have you tested positive for COVID-19 in the past 14 days?</li>
              <li>Do you have symptoms (dry cough, body aches, headache, sore throat, shortness of breath)?</li>
              <li>Are you or anyone close to you considered high risk?</li>
            </ul>
          </div>

          {/* On Arrival & Departure */}
          <div className="arrival-departure">
            <div className="arrival-box">
              <h4>🚪 On Arrival</h4>
              <ul>
                <li>Social distancing observed (one client at a time)</li>
                <li>Hand sanitiser provided</li>
                <li>Face covering required (provided if needed)</li>
                <li>Apply barrier cream yourself</li>
              </ul>
            </div>

            <div className="departure-box">
              <h4>✓ When You Leave</h4>
              <ul>
                <li>Contactless card payments accepted</li>
                <li>Dispose of single-use items</li>
                <li>Enhanced cleaning before next appointment</li>
                <li>Fully COVID-secure practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="choose-section">
        <h2>Why Clients Choose Laura’s Spray Tanning</h2>

        {/* Top Row - Image Left, Text Right */}
        <div className="choose-row">
          <div className="choose-image">
            <div className="image-placeholder">
              <img src={BodyPos} alt="Body positivity message" />
            </div>
          </div>

          <div className="choose-text">
            <h3>Tanning Rules — No Self-Deprecation</h3>
            <p>
              You never need to apologise for your body.
              Not for skin folds, cellulite, wrinkles, stretch marks, scars,
              pigmentation, unpainted nails, body hair, eczema, or anything else
              that makes you beautifully human.
            </p>
            <p>
              This is a judgement-free space.
              Your body is welcome exactly as it is.
            </p>
          </div>
        </div>

        {/* Bottom Row - Text Left, Image Right */}
        <div className="choose-row"> {/* Removed the 'reverse' class */}
          <div className="choose-text">
            <h3>15+ Years of Experience You Can Trust</h3>
            <p>
              With over a decade and a half of professional spray-tanning expertise,
              Laura brings confidence, precision, and warmth to every appointment.
            </p>
            <p>
              Her friendly, supportive approach ensures clients feel safe,
              comfortable, and cared for - resulting in hundreds of satisfied,
              glowing customers who return time and time again.
            </p>
          </div>
          <div className="choose-image">
            <div className="image-placeholder">
              <img src={LauraImage} alt="Laura helping customers feel confident" />
            </div>
          </div>
        </div>

      </section>

      {/* FAQ Section */}
      <section className="faq-section" style={{ backgroundImage: `url(${Pool})` }}>
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>❓ How long does a spray tan last?</h4>
              <p>Your tan typically lasts 7-10 days, fading gradually and naturally. Daily moisturising helps extend the results.</p>
            </div>

            <div className="faq-item">
              <h4>❓ Can you customise the tan intensity?</h4>
              <p>Absolutely! Sienna X offers multiple strengths. During your consultation, we'll recommend the perfect shade for your skin tone.</p>
            </div>

            <div className="faq-item">
              <h4>❓ What should I wear to my appointment?</h4>
              <p>Wear loose, comfortable clothing. We provide sticky feet, hair cap, and thong. Come makeup-free if possible.</p>
            </div>

            <div className="faq-item">
              <h4>❓ Do you offer packages or discounts?</h4>
              <p>Get in touch! We're happy to discuss package options for regular bookings or special events.</p>
            </div>

            <div className="faq-item">
              <h4>❓ What's the difference between Full and Half Body?</h4>
              <p>Full Body (£30) covers head to toe. Half Body (£20) covers from waist down—perfect for specific events.</p>
            </div>

            <div className="faq-item">
              <h4>❓ Can I book for a special event?</h4>
              <p>Yes! Weddings, proms, photoshoots—we tailor timing and intensity for your event. Book early for best availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="Services-cta">
        <div className="cta-content">
          <h2>Ready for Your Glow?</h2>
          <p>Join our satisfied clients and experience the Laura's Spray Tanning difference</p>
          <button onClick={scrollToBook} className="cta-button">
            Book Your Appointment
          </button>
        </div>
      </section>

    </div>
  );
}

export default Services;