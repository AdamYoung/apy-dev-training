import React, { useState, useEffect } from 'react';

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = ["img/slime_slide_1.png", "img/slime_slide_2.png", "img/slime_slide_3.jpg"]; // replace with your slide data

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % slides.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearTimeout(timer); // Clean up on component unmount
  }, [slideIndex, slides.length]);

  return (
    <div>
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index}`}
          style={{ display: index === slideIndex ? 'block' : 'none' }}
        />
      ))}
    </div>
  );
}

export default Slideshow;