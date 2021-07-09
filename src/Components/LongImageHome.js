import React from 'react';
import { Card } from 'react-bootstrap';

import ChernivtsiLongImage from '../assets/HomePage/Chernivtsi-long-image.Jpg';

function LongImageHome () {

  return (
    <>
      <Card className="text-white mt-5 mb-5">
        <Card.Img 
          src={ChernivtsiLongImage} 
          alt="Card image" 
          height={450} 
          className="image-home lonf-image-mobile"
        />
        <Card.ImgOverlay className="image-home-text">
          <Card.Title className="image-home-text-font"><h2 className="image-home-text-font">Чернівці</h2></Card.Title>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default LongImageHome;




