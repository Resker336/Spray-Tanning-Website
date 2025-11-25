import { useEffect, useRef } from 'react';
import '../css/GalleryModal.css';

function GalleryModal({ review, currentImageIndex, setCurrentImageIndex, onClose }) {
  const descriptionRef = useRef(null);

  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal-backdrop') {
      onClose();
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? review.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === review.images.length - 1 ? 0 : prev + 1
    );
  };

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  const hasMultipleImages = review.images.length > 1;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="gallery-modal">
        {/* Close Button */}
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {/* Left Side - Image */}
        <div className="modal-image-section">
          <div className="image-container">
            <img
              src={review.images[currentImageIndex]}
              alt={`${review.reviewerName} - image ${currentImageIndex + 1}`}
              className="modal-image"
            />

            {/* Image Counter */}
            {hasMultipleImages && (
              <div className="image-counter">
                {currentImageIndex + 1} / {review.images.length}
              </div>
            )}
          </div>

          {/* Arrow Navigation */}
          {hasMultipleImages && (
            <>
              <button
                className="modal-arrow left"
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                className="modal-arrow right"
                onClick={handleNextImage}
                aria-label="Next image"
              >
                →
              </button>
            </>
          )}
        </div>

        {/* Right Side - Review Panel */}
        <div className="modal-info-section">
          {/* Header - Sticky */}
          <div className="modal-header">
            <div className="reviewer-header">
              <img
                src={review.reviewerImage}
                alt={review.reviewerName}
                className="reviewer-avatar"
              />
              <div className="reviewer-info">
                <h3 className="reviewer-name">{review.reviewerName}</h3>
                {review.date && <p className="review-date">{review.date}</p>}
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="modal-content" ref={descriptionRef}>
            {/* Rating */}
            <div className="review-rating">
              <span className="stars">{renderStars(review.rating)}</span>
            </div>

            {/* Review Text */}
            <p className="review-description">
              {review.reviewText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryModal;