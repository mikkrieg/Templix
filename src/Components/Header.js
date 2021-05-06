import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from './../img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Styles/App.css';

function Header(props) {
  return (
    <>
    <Container>
      <Navbar collapseOnSelect expand='md' fixed='top' id='navbar' className="navbar-dark">
        <Navbar.Brand href='#'>
            <Image src={logo} className='logo' alt='Templix logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav' id="collapse-div">
          <Nav id='nav-alignment'>
            <Nav.Link href='#' className='nav-links'>Home</Nav.Link>
            <Nav.Link href='#' className='nav-links'>About</Nav.Link>
            <Nav.Link href='#' className='nav-links'>Layouts</Nav.Link>
            <Nav.Link href='#' className='nav-links'>Sign up</Nav.Link>
            <Nav.Link href='#' className='nav-links'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
      
    </>
  )
}

export default Header;