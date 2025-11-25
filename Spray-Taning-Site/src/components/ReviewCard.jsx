import { useState } from 'react';
import '../css/ReviewCard.css';

function ReviewCard({ image, name, rating, reviewText }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsFlipped(!isFlipped);
    }
  };

  const renderStars = () => {
    return '⭐'.repeat(rating);
  };

  return (
    
      <div className="review-card">

        {/* FRONT */}
        <div className="review-card-front">
          <div className="review-image-wrapper">
            <img 
              src={image} 
              alt={`Review from ${name}`}
              loading="lazy"
              className="review-image"
            />
          </div>

          <div className="review-overlay">
            <div className="review-content">
              <div className="review-stars">{renderStars()}</div>
              <p className="review-text">{reviewText}</p>
              {name && <p className="review-name">— {name}</p>}
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="review-card-back">
          <div className="review-back-content">
            <div className="review-stars-back">{renderStars()}</div>
            <p className="review-text-back">{reviewText}</p>
            {name && <p className="review-name-back">— {name}</p>}
            <p className="tap-hint">Tap to flip back</p>
          </div>
        </div>

      </div>
    
  );
}

export default ReviewCard;
