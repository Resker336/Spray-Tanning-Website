import { useState, useRef, useEffect } from 'react';
import ReviewCard from '../components/ReviewCard.jsx';
import '../css/ReviewGallery.css';

function ReviewGallery() {
  const reviews = [
    {
      id: 1,
      image: '/src/assets/images/Kerry.png',
      name: 'Sarah M.',
      rating: 5,
      reviewText: 'Absolutely stunning results! Laura made me feel so comfortable and the tan looks incredibly natural. Best spray tan I\'ve ever had!'
    },
    {
      id: 2,
      image: '/src/assets/images/Amber.png',
      name: 'Emma L.',
      rating: 5,
      reviewText: 'Professional, friendly service and a flawless golden glow. I get compliments every time! Highly recommend.'
    },
    {
      id: 3,
      image: '/src/assets/images/Abbie.png',
      name: 'Jessica T.',
      rating: 5,
      reviewText: 'Laura is amazing! The tan lasted over a week and faded so evenly. Will definitely be back!'
    },
    {
      id: 4,
      image: '/src/assets/images/Bride.png',
      name: 'Rachel D.',
      rating: 5,
      reviewText: 'Finally found someone who gets the perfect shade for my skin tone. No streaks, no orange - just gorgeous!'
    },
    {
      id: 5,
      image: '/src/assets/images/Kate.png',
      name: 'Amanda K.',
      rating: 5,
      reviewText: 'The most natural-looking spray tan ever. Laura\'s technique is perfection and she uses the best products.'
    },
    {
      id: 6,
      image: '/src/assets/images/Sofia_Jones.png',
      name: 'Michelle B.',
      rating: 5,
      reviewText: 'Love my glow! Professional setup, relaxing atmosphere, and stunning results. Worth every penny!'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const carouselRef = useRef(null);

  // Hide hint after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isAnimating]);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDragStart = (e) => {
    if (isAnimating) return;
    
    // Prevent default to stop text selection and image dragging
    e.preventDefault();
    
    setIsDragging(true);
    setShowHint(false);
    
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    setStartX(clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const diff = clientX - startX;
    
    // Smooth drag with reasonable limit
    const maxDrag = 250;
    const limitedDiff = Math.max(-maxDrag, Math.min(maxDrag, diff));
    
    setDragOffset(limitedDiff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Threshold for triggering card change
    const threshold = 70;
    
    if (dragOffset > threshold) {
      // Dragged right - go to previous
      goToPrevious();
    } else if (dragOffset < -threshold) {
      // Dragged left - go to next
      goToNext();
    }
    
    setDragOffset(0);
  };

  // Get indices for infinite loop
  const getLeftIndex = () => {
    return currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
  };

  const getRightIndex = () => {
    return (currentIndex + 1) % reviews.length;
  };

  return (
    <section className="review-gallery-section">
      <h2>Happy Customers</h2>
      <h3>See what our clients are saying about their experience!</h3>
      
      {/* Drag Hint */}
      {showHint && (
        <div className="drag-hint">
          <span className="drag-text">Drag</span>
          <div className="drag-arrows">
            <span className="arrow-left">←</span>
            <span className="arrow-right">→</span>
          </div>
        </div>
      )}

      {/* Carousel Container */}
      <div 
        className="review-carousel-container"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        ref={carouselRef}
      >
        <div 
          className="review-carousel-track"
          style={{
            transform: `translateX(${dragOffset}px)`,
            transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          {/* Left Card (Previous) */}
          <div className="review-card-wrapper side-card left-card">
            <ReviewCard
              image={reviews[getLeftIndex()].image}
              name={reviews[getLeftIndex()].name}
              rating={reviews[getLeftIndex()].rating}
              reviewText={reviews[getLeftIndex()].reviewText}
            />
          </div>

          {/* Center Card (Current) - Featured */}
          <div className="review-card-wrapper center-card">
            <ReviewCard
              image={reviews[currentIndex].image}
              name={reviews[currentIndex].name}
              rating={reviews[currentIndex].rating}
              reviewText={reviews[currentIndex].reviewText}
            />
          </div>

          {/* Right Card (Next) */}
          <div className="review-card-wrapper side-card right-card">
            <ReviewCard
              image={reviews[getRightIndex()].image}
              name={reviews[getRightIndex()].name}
              rating={reviews[getRightIndex()].rating}
              reviewText={reviews[getRightIndex()].reviewText}
            />
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="carousel-controls">
        {/* Arrow Buttons */}
        <button 
          className="carousel-arrow-btn left"
          onClick={goToPrevious}
          disabled={isAnimating}
          aria-label="Previous review"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="review-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`review-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to review ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          className="carousel-arrow-btn right"
          onClick={goToNext}
          disabled={isAnimating}
          aria-label="Next review"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default ReviewGallery;