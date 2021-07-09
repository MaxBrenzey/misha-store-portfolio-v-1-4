import React, { useState } from 'react';
import { Container, Form, Button, Modal, Card } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Shablon-style.css';


function SinglePostOrder() {
  // send Email function
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_pb76bfq', e.target, 'user_bWaeG1kCZCjOZrty2jO9p')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  // modal window functions and hooks
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // styles for div instractions and about us
  const instactionStyle = {
    // backgroundColor: 'rgba(13, 198, 6, 0.9)',
    backgroundColor: 'rgb(245, 245, 245)',
    borderLeft: '10px solid #008000',
  };

  const aboutUsStyle = {
    // backgroundColor: 'rgb(245, 83, 83)',
    backgroundColor: 'rgb(245, 245, 245)',
    borderLeft: '10px solid rgb(228, 26, 11)',
  };


  return (

    <Container>
      {/* div Instractions  */}
      <Card style={ instactionStyle }  className="mt-3 box-shadow-order">
        <Card.Header className="text-center"><h2>Як зробити замовлення</h2></Card.Header>
        <Card.Body>
          <Card.Text>
          <p className="ml-1">
            Заповніть форму нижче, вкажіть своє <strong> ім'я та прізвище, 
            номер свого телефону </strong> для зв'язку, 
            оберіть <strong> номер товару, </strong>  
            оберіть <strong>кількість одиниць товару, </strong> 
            вкажіть <strong>адрес пошти та № вітділення, </strong>
            також можете залишити <strong>ваш коментар, </strong> після цього
            з вами зв'яжется менеджер для уточнення замовлення.
          </p>
          <p className="ml-1">
            Якщо ви бажаєте замовити різні товари вкажіть їх 
            <strong> номер товару</strong> в полі 
            <strong> Ваш коментар,</strong> або якщо бажаєте замовити кількість одиниць
            товару якого немає в полі, також напишіть це в полі 
            <strong> Ваш коментар </strong> 
            після цього з вами зв'яжется менеджер для уточнення
            замовлення.
          </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={ instactionStyle }  className="mt-3 box-shadow-order">
        <Card.Header className="text-center"><h2>Доставка та Оплата</h2></Card.Header>
        <Card.Body>
          <Card.Text>
          <p className="ml-1">
            <strong>Доставка безкоштовна</strong> - в межах м.Чернівці або самовиніс.<br/>
            <strong>Нова Пошта</strong> - наложеним платежем, або покупець оплочує повну ціну замовлення + 
            вартість пересилки згідно чинних тарифів компанії Нова Пошта.<br/>
            <strong>Укр. Пошта</strong> - наложеним платежем, або покупець оплочує повну ціну замовлення + 
            вартість пересилки згідно чинних тарифів компанії Укр. Пошта.
          </p>
          <p className="ml-1">
            
          </p>
          </Card.Text>
        </Card.Body>
      </Card>

      {/* div about us */}
      <Card style={ aboutUsStyle } className="mt-3 box-shadow-order">
        <Card.Header className="text-center"><h2>Про нас</h2></Card.Header>
        <Card.Body>
          <Card.Text>
          <p className="ml-1">
            <strong>Місцезнаходження: </strong> 
            м.Чернівці Калинівський ринок
          </p>
          <p className="ml-1">
            <strong>Телефон:</strong> +380664548458  
            <strong> Михайло</strong>
          </p>
          </Card.Text>
        </Card.Body>
      </Card>

      {/* submit form */}
      <Form onSubmit={sendEmail} className="mb-4 mt-3">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="text-color">Ім'я та Прізвище</Form.Label>
          <Form.Control type="text" placeholder="Ім'я" name="name" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label className="text-color">Телефон</Form.Label>
          <Form.Control type="text" placeholder="Телефон" name="phone" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label className="text-color">Номер товару</Form.Label>
          <Form.Control type="text" name="idGoods" placeholder="1"></Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label className="text-color">Кількість одиниць товара</Form.Label>
          <Form.Control as="select" name="numberOfGoods">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>10</option>
            <option>10+</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-color">Адреса Нової Пошти або Укр.Пошти</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Адреса" 
            name="postAdress"
            />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea2">
          <Form.Label className="text-color">Ваш коментар</Form.Label>
          <Form.Control 
          as="textarea" 
          rows={3} 
          placeholder="Ваш коментар" 
          name="message"
          />
        </Form.Group>

        <Button 
          variant="primary" 
          type="submit" 
          onClick={handleShow}
        >
          Замовити
        </Button>
      </Form>

      {/* modal window */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Замовлення прийнято</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Замовлення прийнято найближчим часом менеджер 
          передзвонить вам для уточнення замовлення. 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Закрити
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  )
}

export default SinglePostOrder;



