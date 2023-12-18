// src/components/CarouselImage.js
import React from 'react';

const CarouselImage = ({ src, alt }) => {
  return <img src={src} alt={alt} style={{ width: '100vw', height: '90vh' }} />;
};

export default CarouselImage;