import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// images
import ClockImg1 from '../assets/clock-1.jpg';
import ClockImg12 from '../assets/clock-12.jpg';
import photoCollagImag2 from '../assets/collage-2.jpg';



function CarouselBox() {

  return (
    <Carousel className="mb-1">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-height carousel-mobile"
          src={photoCollagImag2}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-height carousel-mobile"
          src={ClockImg1}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-height carousel-mobile"
          src={ClockImg12}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselBox; 

