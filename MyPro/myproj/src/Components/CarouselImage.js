// src/components/CarouselImage.js
import React from 'react';

const CarouselImage = ({ src, alt }) => {
  return <img src={src} alt={alt} style={{ width: '70vw', height: '70vh' }} />;
};

export default CarouselImage;