import React from 'react';
import './Navbar.css';
import dsrlogo from '../Assets/logo/dsrlogo.svg';
import logocourtyard from '../Assets/logo/logocourtyard.png';
import backgroundleft from '../Assets/logo/background1.png';
import backgroundright from '../Assets/logo/background2.png';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-background-container">
        <div className="nav-background-left" style={{ backgroundImage: `url(${backgroundleft})` }} />
        <div className="nav-background-right" style={{ backgroundImage: `url(${backgroundright})` }} />
      </div>
      <div className="nav-bar">
        <div className="nav-logo-left">
          <img src={dsrlogo} alt="Logo" className="nav-logo" />
        </div>
        <div className="nav-links-right">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#enquire" className="nav-link">Enquire</a>
        </div>
      </div>
      <div className="nav-main-logo">
        <img src={logocourtyard} alt="Logocourtyard" className='nav-logo-courtyard'/>
        <h2>Where life unfolds</h2>
        <h2>Gunjur . Bengaluru</h2>
        <h2>Know More</h2>
      </div>
    </div>
  );
};

export default Navbar;
