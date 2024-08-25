import React, { useState } from 'react';
import './Review.css'; // Ensure you have this CSS file for styling

const reviews = [
  {
    name: 'Simar',
    review: 'I have been associated with DSR Group for over five years, and it has been a truly exceptional experience. Their commitment to delivering premium luxury homes with top-notch facilities is unmatched. From the quality of construction to the attention to detail in every aspect, DSR Group consistently exceeds expectations. Their customer-centric approach and professionalism make them stand out in the industry. DSR Group truly defines luxury living, and I am proud to be a part of their community',
    rating: 4
  },
  {
    name: 'Aishwary Agrawal',
    review: 'Choosing a home with DSR Group has been one of the best decisions we’ve made. Their commitment to luxury and attention to detail is truly unparalleled. From the moment we stepped into our new home, we were captivated by the premium quality and thoughtful design that reflects both elegance and comfort. The entire experience, from consultation to handover, was seamless and professional. DSR Group has set a new standard in luxury living, and we couldn’t be happier with our decision to invest in a home that truly exemplifies the highest level of craftsmanship and sophistication',
    rating: 4,
    largest: true
  },
  {
    name: 'Ishika',
    review: 'As a long-standing member of the DSR Group community for several years, I can confidently say that their luxury and premium apartments set the benchmark for quality living. DSR Group has consistently delivered on its promise of excellence, combining superior craftsmanship with modern amenities that cater to every need. The attention to detail, luxury finishes, and commitment to customer satisfaction have made my experience nothing short of exceptional. Their dedication to maintaining the highest standards year after year is truly commendable',
    rating: 4
  }
];

function Review() {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const pageNumbers = [];
  const totalPageCount = 5; // Display at least 5 pages
  for (let i = 1; i <= totalPageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="reviews">
      <h1>What Our Clients Say</h1>
      <div className="review-cards">
        {currentReviews.map((review, index) => (
          <div
            className={`review-card ${review.largest ? 'largest' : ''}`}
            key={index}
          >
            <h3>{review.name}</h3>
            <p>{review.review}</p>
            <div className="review-name">
              <div>{review.name}</div>
              <div className="client-label">DSR Client</div>
              <div className="review-rating">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`page-button ${currentPage === number ? 'active' : ''}`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Review;
