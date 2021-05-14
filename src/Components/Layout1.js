import React, {useContext} from 'react';
import {AppContext} from './../AppContext';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './../Styles/Layout1.css'

export default function Layout1() {
  return(
    <div>
      <Container className="layout-1-container">
        <Navbar collapseOnSelect expand='md' fixed='top' id='navbar' className="navbar-dark">
          <Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id='responsive-navbar-nav' id="collapse-div">
            <Nav id='nav-alignment'>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Layouts</Nav.Link>
              <Nav.Link>Sign up</Nav.Link>
              <Nav.Link>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  )
}
