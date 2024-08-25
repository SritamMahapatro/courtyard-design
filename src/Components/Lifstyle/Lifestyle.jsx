import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Lifestyle.css'; 

import slide1 from '../Assets/LifestyleSlide/slide1.jpg';
import slide2 from '../Assets/LifestyleSlide/slide2.jpg';
import slide3 from '../Assets/LifestyleSlide/slide3.jpg';
import slide4 from '../Assets/LifestyleSlide/slide4.png';
import slide5 from '../Assets/LifestyleSlide/slide5.png';
import slide6 from '../Assets/LifestyleSlide/slide6.png';
import slide7 from '../Assets/LifestyleSlide/slide7.png';

function Lifestyle() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const images = [
    { src: slide1, caption: 'Bedroom' },
    { src: slide2, caption: 'Kitchen Room' },
    { src: slide3, caption: 'Living Room' },
    { src: slide4, caption: 'Children Park' },
    { src: slide5, caption: 'Apartment' },
    { src: slide6, caption: 'Games' },
    { src: slide7, caption: 'Hangout Spot' }
  ];

  return (
    <div className="lifestyle">
      <h1>Lifestyle</h1>
      <Carousel activeIndex={index} onSelect={handleSelect} className="lifestyle-carousel">
        {images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100" src={image.src} alt={`Slide ${idx + 1}`} />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Lifestyle;
