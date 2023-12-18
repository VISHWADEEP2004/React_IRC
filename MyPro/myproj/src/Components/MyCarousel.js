import React from 'react';
import { Carousel } from 'react-bootstrap';
import dog1 from '../Assert/img/dog1.png';
import dog from '../Assert/img/dog.gif';
import cat1 from '../Assert/img/cat1.png';
import img3 from '../Assert/img/img3.png'
import CarouselImage from './CarouselImage';

const MyCarousel = () => {
//   const carouselContainerStyle = {
//     maxWidth: '70rem',
//     m:'100%' ,
//     margin: 'auto',
//   };

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
    // <div style={carouselContainerStyle}>
    <Carousel interval={2000} nextIcon={<span style={arrowStyles}>&gt;</span>} prevIcon={<span style={arrowStyles}>&lt;</span>}>
      <Carousel.Item>
        <CarouselImage src={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pet-adoption-ads-design-template-27f7a03ad92a48603d30f64184b9052a_screen.jpg?ts=1651653142"} alt="First Image" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={cat1} alt="Second Image" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={img3} alt="Third Image" /> 
      </Carousel.Item>
    </Carousel>
    // </div>
  );
};

export default MyCarousel;
