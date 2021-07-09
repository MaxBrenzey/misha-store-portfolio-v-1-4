import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Shablon-style.css';

import Clock1 from '../assets/Clock/clock-1.jpg';
import Clock2 from '../assets/Clock/clock-2.jpg';
import Clock8 from '../assets/Clock/clock-8.jpg';
import Collage2 from '../assets/Сollage/collage-2.jpg';
import Collage4 from '../assets/Сollage/collage-4.jpg';
import Collage3 from '../assets/Сollage/collage-3.jpg';
import NightLamp2 from '../assets/NightLamp/night-lamp-2.jpg';
import Cherhivtsi from '../assets/HomePage/Chernivtsi.jpg';
import KalynivskiyRynok from '../assets/HomePage/kalynivskiy-rynak.png';

function GridImages () {

  return (
    <>
    <Container className="mt-5 mb-1">
      {/* line 1 */}
      <Row >
        <Col style={{  paddingRight: 0 }} >
        <Card.Img 
          className="grid-images-mobile"
          src={Clock1}
          height={233}
        />
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Card.Img 
            className="grid-images-mobile"
            src={Collage4}
            height={233}
          />
        </Col>
        <Col style={{ paddingLeft: 0 }}>
          <Card.Img
            className="grid-images-mobile"
            src={NightLamp2}
            height={233}
          />
        </Col>
      </Row>
      {/* line 2 */}
      <Row >
        <Col style={{  paddingRight: 0 }}>
        <Card.Img 
          className="grid-images-mobile"
          src={Collage3}
          height={233}
        />
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Card.Img 
            className="grid-images-mobile"
            src={Cherhivtsi}
            height={233}
          />
        </Col>
        <Col style={{ paddingLeft: 0 }}>
          <Card.Img 
            className="grid-images-mobile"
            src={Clock8}
            height={233}
          />
        </Col>
      </Row>
      {/* line 3 */}
      <Row >
        <Col style={{  paddingRight: 0 }}>
        <Card.Img 
          className="grid-images-mobile"
          src={KalynivskiyRynok}
          height={233}
        />
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Card.Img 
            className="grid-images-mobile"
            src={Clock2}
            height={233}
          />
        </Col>
        <Col style={{ paddingLeft: 0 }}>
          <Card.Img 
            className="grid-images-mobile"
            src={Collage2}
            height={233}
          />
        </Col>
      </Row>
      
    </Container>
    </>
  );
};

export default GridImages;