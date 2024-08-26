import React from 'react';
import './Navbar.css';
import dsrlogo from '../Assets/logo/dsrlogo.svg';
import logocourtyard from '../Assets/logo/logocourtyard.png';
import backgroundleft from '../Assets/logo/background1.png';
import backgroundright from '../Assets/logo/background2.png';

const Navbar = ({ legacyRef, courtyardRef, contactRef, footerRef }) => {

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

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
          <button className="nav-link" onClick={() => scrollToSection(legacyRef)}>Home</button>
          <button className="nav-link" onClick={() => scrollToSection(courtyardRef)}>About</button>
          <button className="nav-link" onClick={() => scrollToSection(contactRef)}>Contact</button>
          <button className="nav-link" onClick={() => scrollToSection(footerRef)}>Enquire</button>
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
