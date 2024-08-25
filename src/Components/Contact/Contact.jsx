import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left">
        <h1>Planning to Visit</h1>
        <button>Schedule a Visit</button>
        <button>Contact Us</button>
      </div>
      <div className="right">
        <h1>Register Your Interest</h1>
        <input type="text" placeholder="Your Full Name" />
        <div className="input-group">
          <input type="email" placeholder="Enter Your Email" />
          <input type="number" placeholder="Enter Phone Number" />
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">Agree to Terms and Conditions</label>
        </div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
