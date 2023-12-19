import React from 'react';
import petcat from '../Assert/img/petcat.jpg';
import img2 from '../Assert/img/img2.jpg';
import img3 from '../Assert/img/img3.jpg';
import { Carousel } from 'react-bootstrap';
import CarouselImage from './CarouselImage';

const MyCarousel = () => {

  const carouselContainerStyle = {
    paddingTop:'3rem',
    width: '1000px', 
    height: '500px', 
    margin: 'auto', 
    marginBottom:'6rem'
    
  };
  const arrowStyles = {
    fontSize: '80px',
    color: 'transparent',
    lineHeight: '1.5',
    borderRadius: '50%',
    display: 'inline-block',
    padding: '10px',
    transition: 'border-radius 0.3s ease'
  };

  return (
    <div style={carouselContainerStyle}>
      <Carousel interval={2000} nextIcon={<span style={arrowStyles}>&gt;</span>} prevIcon={<span style={arrowStyles}>&lt;</span>}>
        <Carousel.Item>
          <CarouselImage src={petcat} alt="First Image" />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage src={img2} alt="Second Image" />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage src={img3} alt="Third Image" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
