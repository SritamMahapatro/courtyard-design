import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallary.css'; 

import slide1 from '../Assets/Slide/slide1.png';
import slide2 from '../Assets/Slide/slide2.png';
import slide3 from '../Assets/Slide/slide3.png';
import slide4 from '../Assets/Slide/slide4.png';
import slide5 from '../Assets/Slide/slide5.png';
import slide6 from '../Assets/Slide/slide6.png';
import slide7 from '../Assets/Slide/slide7.png';
import slide8 from '../Assets/Slide/slide8.png';

function Gallary() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

  return (
    <div className="gallery">
      <h1>All the heart of it all</h1>
      <Carousel activeIndex={index} onSelect={handleSelect} className="gallery-carousel">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Gallary;
