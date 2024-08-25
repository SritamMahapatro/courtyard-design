import React from 'react';
import './Legacy.css';
import dsrblack from '../Assets/logo/dsrblack.png';

const Legacy = () => {
  return (
    <div className="legacy-container">
      <div className="legacy-text-content">
        <h1 className="legacy-h1">Our</h1>
        <h2 className="legacy-h2">LEGACY</h2>
        <div className="legacy-quote">
          <p>DSR Group was established in 1988 and has been a leading name in the industry for years. DSR has a diverse range of projects across residential, commercial and institutional typologies. The group has operations in South India, including Hyderabad, Bangalore and Chennai. DSR stands for quality, commitment, and innovation, and its workforce strives for perfection in customer satisfaction.</p>
          <p>- Board Of Directors</p>
        </div>
      </div>
      <div className="legacy-logo-content">
        <img src={dsrblack} alt="DSR Group Logo" />
      </div>
    </div>
  );
}

export default Legacy;
