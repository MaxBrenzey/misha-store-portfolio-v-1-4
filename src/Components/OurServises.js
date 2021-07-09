import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import './Shablon-style.css';

import KalynivskiyRynok from '../assets/HomePage/kalynivskiy-rynak.png';  
import Cherhivtsi from '../assets/HomePage/Chernivtsi.jpg';


function OurServises () {

  const [textOpen, setTextOpen] = useState(false);
  const [textOpen2, setTextOpen2] = useState(false);

  return (
    <>
    <Container>
      <Row className="card-text-homepage-header">
        <h2 className="mt-3">Про Нас</h2>
      </Row>
      <Row className="card-position">
        <Col sm={12} md={6} className="mt-3 ">
          <Card border="none"  className="card-style">
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col sm={6}>
                    <h3>
                      Калинівський <br/>
                      ринок
                    </h3>
                  <Button
                    onClick={() => setTextOpen(!textOpen)}
                    aria-controls="collapse-text-card-1"
                    aria-expanded={textOpen}
                  >
                    Читати більше
                  </Button>
                  </Col>
                  <Col sm={6} >
                  <Card.Img 
                    variant="top" 
                    src={KalynivskiyRynok}
                    height={150}
                  />
                  </Col>
                </Row>
              </Card.Title>
              <Card.Text>
                <Collapse in={textOpen}>
                  <div id="collapse-text-card-1" className="card-text-homepage">
                    Він займає площу понад 35 га, формує значну частину міського бюджету <br/>
                    Знаходится за адресою: Чернівці вулиця Калинівська, 13а <br/>
                    З Чернівців добратись можна: тролейбус: № 5 <br/>
                    автобуси: № 10, 14, 22, 25, 30, 31, 32, 33, 35, 40, 41
                  </div>
                </Collapse>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} className="mt-3">
          <Card border="none"  className="card-style">
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col sm={6}>
                    <h3>
                      Місто<br/>
                       Чернівці
                    </h3>
                  <Button
                    onClick={() => setTextOpen2(!textOpen2)}
                    aria-controls="collapse-text-card-2"
                    aria-expanded={textOpen2}
                  >
                    Читати більше
                  </Button>
                  </Col>
                  <Col sm={6} >
                  <Card.Img 
                    variant="top" 
                    src={Cherhivtsi}
                    height={150}
                  />
                  </Col>
                </Row>
              </Card.Title>
              <Card.Text>
                <Collapse in={textOpen2}>
                  <div id="collapse-text-card-2" className="card-text-homepage">
                    Чернівці мальовниче місто на сході України <br/>
                    де проживає багато національностей, найбільше Українців та Румунів.
                    У 2008 році Чернівцям виповнилось 600 років. <br/>
                    Чернівчани привітні, та раді вітати гостей міста.
                  </div>
                </Collapse>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};


export default OurServises;
