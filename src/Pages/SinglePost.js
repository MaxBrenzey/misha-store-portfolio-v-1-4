import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import { Container, Card } from 'react-bootstrap';
import '../Components/Shablon-style.css';
import SinglePostOrder from '../Components/SinglePostOrder';



const BlueColor = {
  color: 'rgba(46, 39,209, 1)'
}


export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient.fetch(`*[slug.current == "${slug}"]{
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
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`).then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if(!singlePost) {
    return (
      <div><span className="error-style">Завантаження... або щось пішло не так</span></div>
    );
  };

  return (
    <>
    <Container className="card-center">
      <Card className="single-post-card" border="0">
        <Card.Img 
          variant="top" 
          src={singlePost.mainImage.asset.url}
          height="auto"
        />
        <Card.Body className="cards-border">
          <Card.Title><strong>Номер Товару: <span style={ BlueColor } >{singlePost.idtovary}</span></strong></Card.Title>
          <Card.Text>
            <strong>Назва: </strong><span className="card-fonts">{singlePost.title}</span> 
            <br/><strong>Ціна: </strong><span className="card-fonts">{singlePost.price}</span>
            <br/><strong>Матеріал: </strong><span className="card-fonts">{singlePost.materialpost}</span>
            <br/><strong>Вробник: </strong><span className="card-fonts">{singlePost.virobnyk}</span>
            <br/><span className="card-fonts">{singlePost.dopovnennya}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container> 

    <SinglePostOrder />
    </>
  )
}
