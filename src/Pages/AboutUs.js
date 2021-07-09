import React from 'react';
import { Container, Card } from 'react-bootstrap';
import '../Components/Shablon-style.css';
import Footer from '../Components/Footer';


function AboutUS() {
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
    <>
    <Container>
      {/* div about us */}
      <Card style={ aboutUsStyle } className="mt-3 box-shadow-order">
        <Card.Header className="text-center"><h2>Про нас</h2></Card.Header>
        <Card.Body>
          <Card.Text>
          <p className="ml-1">
            <strong>Наш магазин пропонує широкий вибір товарів:</strong> годинники, світильники, лампи, глобус-бари, 
            статуетки на подарунок близьким,<br/>
            тому не зволікайте, обирайте продукт та насолоджуйтесь використанням. 
            <br/><strong>Місцезнаходження: </strong> 
            м.Чернівці Калинівський ринок
            <br/><strong>Телефон:</strong> +380664548458  
            <strong> Михайло</strong>
          </p>
          </Card.Text>
        </Card.Body>
      </Card>
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
            вкажіть <strong>адрес пошти та № відділення, </strong>
            також можете залишити <strong>ваш коментар, </strong> після цього
            з вами зв'яжется менеджер для уточнення замовлення.
          </p>
          <p className="ml-1">
            Якщо ви бажаєте замовити різні товари вкажіть
            <strong> номер товару</strong> в полі 
            <strong> Ваш коментар,</strong> або якщо бажаєте замовити кількість одиниць
            товару яких немає в полі, також напишіть це в полі 
            <strong> Ваш коментар </strong> 
            після цього з вами зв'яжется менеджер для уточнення
            замовлення.
          </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={ instactionStyle }  className="mt-3 mb-3 box-shadow-order">
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
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>

    <Footer />
    </>
  )
}

export default AboutUS;