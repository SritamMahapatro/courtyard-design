import React from "react";
import { Link } from "react-router-dom";
import "./Design.css";
import siteplan1 from '../Assets/Designicon/siteplan1.png';
import siteplan2 from '../Assets/Designicon/siteplan2.png';
import floorplan1 from '../Assets/Designicon/floorplan1.png';
import floorplan2 from '../Assets/Designicon/floorplan2.png';

const Design = () => {
  return (
    <div className="design-container">
      <h1>Blueprint of a perfect Home</h1>
      <div className="design-grid">
        <div className="design-item">
          <Link to="/siteplan">
            <div className="design-card">
              <div className="design-card-img">
                <img
                  src={siteplan1}
                  alt="Site Plan"
                  className="design-card-img-default"
                />
                <img
                  src={siteplan2}
                  alt="Site Plan Hover"
                  className="design-card-img-hover"
                />
              </div>
              <div className="design-card-desp">
                <h2>Site Plan</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="design-item">
          <Link to="/floorplan">
            <div className="design-card">
              <div className="design-card-img">
                <img
                  src={floorplan1}
                  alt="Floor Plan"
                  className="design-card-img-default"
                />
                <img
                  src={floorplan2}
                  alt="Floor Plan Hover"
                  className="design-card-img-hover"
                />
              </div>
              <div className="design-card-desp">
                <h2>Floor Plan</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Design;
