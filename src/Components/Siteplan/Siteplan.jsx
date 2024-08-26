import React from "react";
import { Link } from "react-router-dom";
import "./Siteplan.css";
import Footer from "../Footer/Footer";
import SitePlan from "../Assets/Plan/SitePLan.png";
import cross from "../Assets/cross.png";

const Siteplan = () => {
  return (
    <div className="siteplan-container">
      <div className="header-container">
        <h1>Site Plan</h1>
        <Link to="/" className="back-button">
          <img src={cross} alt="Back" />
        </Link>
        
      </div>
      
      <div className="siteplan-image-container">
        <img src={SitePlan} alt="Site Plan" className="siteplan-image" />
      </div>
      <Footer />
    </div>
  );
};

export default Siteplan;
