import React from 'react';
import './Footer.css';
import dsrlogo from '../Assets/logo/dsrlogo.svg';
import phoneIcon from '../Assets/icon/phone-icon.png';
import emailIcon from '../Assets/icon/email-icon.png';
import locationIcon from '../Assets/icon/location-icon.png';
import instagramIcon from '../Assets/icon/instagram-icon.png';
import linkedinIcon from '../Assets/icon/linkedin-icon.png';
import facebookIcon from '../Assets/icon/facebook-icon.png';
import credaiLogo from '../Assets/icon/credai-logo.png';
import yearsLogo from '../Assets/icon/35-years-logo.png';

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={dsrlogo} alt="DSR Group Logo" />
        </div>
        <div className="footer-newsletter">
          <p>For exclusive news and market updates sign up for our newsletter.</p>
          <input type="email" placeholder="Enter Your Email Address" />
          <button>SUBMIT</button>
        </div>
        <div className="footer-contact">
          <h3>CONTACT US</h3>
          <div className="contact-info">
            <img src={phoneIcon} alt="Phone Icon" />
            <p>+91 99641 92000</p>
          </div>
          <div className="contact-info">
            <img src={emailIcon} alt="Email Icon" />
            <p>www.dsrinfra.com</p>
          </div>
          <div className="contact-info">
            <img src={locationIcon} alt="Location Icon" />
            <p>DSR Techno Cube, Block C, BBMP Khata No. 639/6456/1, Thubarahalli, Varthur Main Road, Bengaluru, Karnataka - 560066</p>
          </div>
        </div>
        <div className="footer-social">
          <h3>FOLLOW US</h3>
          <img src={instagramIcon} alt="Instagram Icon" />
          <img src={linkedinIcon} alt="LinkedIn Icon" />
          <img src={facebookIcon} alt="Facebook Icon" />
        </div>
        <div className="footer-credai">
          <div className="footer-credai-container">
            <img src={credaiLogo} alt="CREDAI Logo" />
            <img src={yearsLogo} alt="35 Years Logo" />
          </div>
          <p>BENGALURU</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>RERA NUMBER: PRM/KA/RERA/1251/446/PR/280324/006754</p>
      </div>
    </div>
  );
}

export default Footer;
