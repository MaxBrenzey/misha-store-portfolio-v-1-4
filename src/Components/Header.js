import React, { Component } from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import './Shablon-style.css';

import Home from '../Pages/Home';
import SinglePost from '../Pages/SinglePost';
import Post from '../Pages/Post';
import AboutUS from '../Pages/AboutUs';

export default class Header extends Component {
  render () {
    return (
      <div>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            {/* logo */}
            <Navbar.Brand href="/">
              Misha Store
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Дім</Nav.Link>
                <Nav.Link href="/Post">Товар</Nav.Link>
                <Nav.Link href="/AboutUS">Про Нас</Nav.Link>
              </Nav>
               <Form inline >
              {/* <a 
                target="_blank" 
                href='https://mishastoreportfolio.sanity.studio' 
                className="admin-link"
              >
                Admin
              </a> */}

                <SocialIcon 
                  url="https://www.linkedin.com/in/maxim-brenzey-639005190/" 
                  className="icon-linkedin"
                  target="_blank"
                  style={{ height: 32, width: 32 }}
                  bgColor="white"
                  // fgColor="white"
                />
                
                <SocialIcon 
                  url="https://github.com/MaxBrenzey" 
                  className="icon-linkedin"
                  target="_blank"
                  style={{ height: 32, width: 32 }}
                  bgColor="white"
                />
              </Form> 
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path="/" component={Home}  exact />
            <Route exact path="/post" component={Post} />
            <Route exact path="/post:slug" component={SinglePost} />
            <Route exact path="/AboutUS" component={AboutUS} />
          </Switch>
        </Router>
      </div>
    )
  }
}
