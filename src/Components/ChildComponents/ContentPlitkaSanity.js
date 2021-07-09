import React, { useState, useEffect } from 'react';
import sanityClient from '../../client.js';
import { Link } from 'react-router-dom';
import { Container, Tab, Row, Col, CardDeck, Card } from 'react-bootstrap';
import '../Shablon-style.css';


export default function ContentPlitkaSanity() {
  const BlueColor = {
    color: 'rgba(46, 39,209, 1)'
  }

  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post"]{
        title,
        slug,
        price,
        materialpost,
        virobnyk,
        idtovary,
        dopovnennya,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
      }`)
      .then((data) => {setPost(data); console.log(data);})    
      .catch(console.error);
  }, []);

  if(!postData) {
    return (
      <div><span className="error-style">Завантаження... або щось пішло не так</span></div>
    );
  };

  return (
    <>
    <Container className=" mb-3 d-flex flex-wrap">
         <Tab.Container id="left-tabs-example" defaultActiveKey="Clock">
           <Row>
             {postData && postData.map((post, index) => (
               <Col key={index} sm={12} md={8} lg={5}  className="plitka-collapse-content mt-3 style-cards">
               <span key={index} > 

             <Tab.Content>
                <Tab.Pane eventKey="Clock">
                  <CardDeck>
                    <Card className="cards-animation" border="0" >
                    <Link to={"/post" + post.slug.current} key={post.slug.current}>
                      <Card.Img 
                        variant="top" 
                        src={post.mainImage.asset.url}
                        height={350}
                        className="height-image-mobile"
                        />
                      </Link>
                      <Card.Body className="cards-background cards-border">
                        <Card.Title><strong>Номер Товару: <span style={ BlueColor } >{post.idtovary}</span></strong></Card.Title>
                            <Card.Text>
                              <strong>Назва: </strong><span className="card-fonts">{post.title}</span> 
                              <br/><strong>Ціна: </strong><span className="card-fonts">{post.price}</span>
                              <br/><strong>Матеріал: </strong><span className="card-fonts">{post.materialpost}</span>
                              <br/><strong>Вробник: </strong><span className="card-fonts">{post.virobnyk}</span>
                              <br/><span className="card-fonts">{post.dopovnennya}</span>
                            </Card.Text>
                      </Card.Body>
                    </Card>                  
                  </CardDeck>
                </Tab.Pane>
              </Tab.Content>

              </span>
            </Col>
              ))}
          </Row>
        </Tab.Container>
      </Container>

    </>
  );
}