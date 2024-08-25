import React from 'react';
import '../Details/Details.css';

const Details = () => {
  return (
    <section className="details-section">
      <header className="details-header">
        <h1 className="details-title">The world at your door step</h1>
      </header>
      <div className="details-cards">
        <article className="details-card">
          <div className="details-card-item">2.72</div>
          <div className="details-card-description">ACRES OF SITE AREA</div>
        </article>
        <article className="details-card">
          <div className="details-card-item">70%</div>
          <div className="details-card-description">OPEN SPACE</div>
        </article>
        <article className="details-card">
          <div className="details-card-item">G+14</div>
          <div className="details-card-description">FLOOR PLUS BASEMENT</div>
        </article>
        <article className="details-card">
          <div className="details-card-item">252</div>
          <div className="details-card-description">UNITS ACROSS 2 TOWERS</div>
        </article>
        <article className="details-card">
          <div className="details-card-item">2 BHK</div>
          <div className="details-card-description">1140 SQ FT TO 1600 SQ FT</div>
        </article>
        <article className="details-card">
          <div className="details-card-item">3 BHK</div>
          <div className="details-card-description">1740 SQ FT TO 1800 SQ FT</div>
        </article>
        <footer className="details-footer">
          <button className="details-know-more-button">Know More</button>
        </footer>
      </div>
    </section>
  );
};

export default Details;
