import Property from "../image/Propertyone.png"
import image2 from "../image/Propertytwo.png"
import Property2 from "../image/Propertythree.png"

import React, { useState, useEffect } from 'react';

const Carousel = () => {
    
    const images = [
         Property,
         image2,
         Property2
    ]
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div className="slide-container">
        <div
          className="slide"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide-item">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
