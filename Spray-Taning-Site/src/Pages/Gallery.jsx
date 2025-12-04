import { useState, useEffect } from 'react';
import '../css/Gallery.css';
import ReviewCard from '../components/ReviewCard';
import GalleryModal from '../components/GalleryModal';

import SofiaJones from '../assets/images/Sofia_Jones.png';
import Sofia2 from '../assets/images/Sofia2.png';
import Amber from '../assets/images/Amber.png';
import Amber2 from '../assets/images/Amber2.png';
import Bride from '../assets/images/Bride.png'
import Bride2 from '../assets/images/Bride2.png';
import Bride3 from '../assets/images/Bride3.png';
import Charlotte from '../assets/images/Charlotte.png';
import Kate from '../assets/images/Kate.png';
import Abbie from '../assets/images/Abbie.png';
import Kaitlin from '../assets/images/Kaitlin.png'; 
import Kaitlin2 from '../assets/images/Kaitlin2.png';
import Wedding from '../assets/images/Wedding.png';
import Kerry from '../assets/images/Kerry.png';


function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mark Gallery page as active
  useEffect(() => {
    document.body.setAttribute('data-page', 'gallery');
    return () => document.body.removeAttribute('data-page');
  }, []);

  // Gallery items with MULTIPLE images per review
  const galleryItems = [
    {
      id: 1,
      images: [SofiaJones, Sofia2],
      reviewerName: 'Sofia J.',
      reviewerImage: SofiaJones,
      rating: 5,
      reviewText: 'Photos are in from the shoot a couple of weeks ago… If you’d told me a few years ago that I would ever do something like this I would have recoiled! But fast forward to today - 34 and feeling like I’m in the best shape of my life. Not just physically — but mentally, emotionally, and all around.',
      date: '18 MAY 2025'
    },
    {
      id: 2,
      images: [Amber, Amber2],
      reviewerName: 'Amber',
      reviewerImage: Amber,
      rating: 5,
      reviewText: 'Laura is always really friendly and I wouldn’t go to anyone else for my tan! She’s always professional but also has a laugh to! I’ve used her for so many different types of events whether that be weddings, graduations or festivals and have always been really happy with the results and I recommend her to everyone xx',
      date: '21 JUL 2023'
    },
    {
      id: 3,
      images: [Bride, Bride2, Bride3],
      reviewerName: '',
      reviewerImage: Bride,
      rating: 5,
      reviewText: 'Laura is amazing! The tan lasted over a week and faded so evenly. Will definitely be back!',
      date: '12 DEC 2023'
    },
    {
      id: 4,
      images: [Charlotte],
      reviewerName: 'Charlotte',
      reviewerImage: Charlotte,
      rating: 5,
      reviewText: 'Congratulations to my client Charlotte, she got married yesterday 💒. Charlotte had a spray tan with myself using sienna x FAST tan which she left on for 1 1/2 hours to give her a light glow. Absolutely beautiful 🎉',
      date: '30 APR 2022'
    },
    {
      id: 5,
      images: [Kate],
      reviewerName: 'Kate',
      reviewerImage: Kate,
      rating: 5,
      reviewText: 'Thank you to my client Kate for sharing her photos with me, she made a beautiful bridesmaid. #siennaxfasttan #siennaxofficial',
      date: '27 APR 2024'
    },
    {
      id: 6,
      images: [Abbie],
      reviewerName: 'Abbie',
      reviewerImage: Abbie,
      rating: 5,
      reviewText: '*Thank you for the lovely review Abbie* As someone who has never had a spray tan before (but needed to cover a stubborn chest tan line less than 2 weeks before her wedding…!) I was a bit nervous about getting one, but Laura was absolutely amazing! She was super friendly and immediately put me at ease, and she recommended a lovely subtle colour which looked stunning and completely natural 😍 safe to say I felt like the most most beautiful bride! Thank you Laura! 💍.',
      date: '1 SEP 2023'
    },
    {
      id: 7,
      images: [Kaitlin, Kaitlin2],
      reviewerName: 'Kaitlin',
      reviewerImage: Kaitlin,
      rating: 5,
      reviewText: 'Best tan I’ve ever had! Beautiful colour, fades evenly and lasts ages! Also didnt transfer on my dress at all and my wedding day was a hot 🥵 one!! Always get so many compliments! Xxx',
      date: '7 July 2022'
    },
    {
      id: 8,
      images: [Wedding],
      reviewerName: 'Sophie R.',
      reviewerImage: Wedding,
      rating: 5,
      reviewText: 'Laura did an incredible job with my wedding spray tan. I had the Sienna X fast tan which I washed off after 3 hours. I was absolutely thrilled with the results. Not only is Laura a pro but she’s also super friendly and made me feel comfortable from the moment I walked in.',
      date: '8 JUN 2023'
    },
    {
      id: 9,
      images: [Kerry],
      reviewerName: 'Kerry',
      reviewerImage: Kerry,
      rating: 5,
      reviewText: 'I think you would all agree Kerry looks incredible at her maternity shoot. Kerry leaves her tan on the maximum time of 4 hrs for a deep golden tan. #siennaxexpresstan #spraytanaylesbury #beautyaylesbury',
      date: '11 NOV 2023'
    }
  ];

  const openModal = (review) => {
    setScrollPosition(window.scrollY);
    setCurrentReview(review);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft' && currentReview) {
        setCurrentImageIndex((prev) =>
          prev === 0 ? currentReview.images.length - 1 : prev - 1
        );
      } else if (e.key === 'ArrowRight' && currentReview) {
        setCurrentImageIndex((prev) =>
          prev === currentReview.images.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentReview]);

  const ScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="gallery-page">
      {/* Gallery Header */}
      <section className="gallery-header">
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>Gallery & Reviews</h1>
          <p className="header-subtitle">See what our clients are saying about their experience</p>
        </div>

        {/* THIS IS SCROLL INDICATOR */}
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <h2 className='G-Title'>Gallery</h2>
        <p className='G-Info'>Click to enlarge & view details</p>
        <div className="gallery-container">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="gallery-card-container"
              >
                <div
                  className="gallery-card-wrapper clickable"
                  onClick={() => openModal(item)}
                >
                  <ReviewCard
                    image={item.images[0]}
                    name={item.reviewerName}
                    rating={item.rating}
                    reviewText={item.reviewText}
                  />

                  {item.images.length > 1 && (
                    <div className="multi-image-badge">
                      +
                    </div>
                  )}
                </div>

                {item.images.length > 1 && (
                  <div className="card-image-dots">
                    {item.images.map((_, index) => (
                      <div
                        key={index}
                        className={`image-dot ${index === 0 ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {isModalOpen && currentReview && (
        <GalleryModal
          review={currentReview}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          onClose={closeModal}
        />
      )}

      {/* CTA Section */}
      <section className="gallery-cta">
        <div className="cta-content">
          <h2>Ready for Your Glow?</h2>
          <p>Join our satisfied clients and experience the Laura's Spray Tanning difference</p>
          <button onClick={ScrollToBottom} className="cta-button">Book Your Appointment</button>
        </div>
      </section>
    </div>
  );
}

export default Gallery;