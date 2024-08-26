import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Floorplan.css";
import Footer from "../Footer/Footer";
import Tower from "../Assets/Plan/Tower.png";
import Tower1 from "../Assets/Plan/Tower1.png";
import Tower2 from "../Assets/Plan/Tower2.png";
import cross from "../Assets/cross.png";

const Floorplan = () => {
  const [currentImage, setCurrentImage] = useState(Tower);

  return (
    <div className="floorplan-container">
      <div className="header-container">
        <h1>Floor Plan</h1>
        <Link to="/" className="back-button">
          <img src={cross} alt="Back" />
        </Link>
      </div>
      
      <div className="floorplan-image-container">
        <img src={currentImage} alt="Floor Plan" className="floorplan-image" />
      </div>

      <div className="button-container">
        <button onClick={() => setCurrentImage(Tower1)}>Tower1</button>
        <button onClick={() => setCurrentImage(Tower2)}>Tower2</button>
      </div>
      
      <Footer />
    </div>
  );
};

export default Floorplan;
