import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel Image ${index}`}
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover' }} 
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
