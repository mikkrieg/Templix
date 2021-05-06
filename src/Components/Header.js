import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from "./../img/logo.png";
import './../Styles/App.css';

function Header(props) {
  return (
    <>
    <Container>
      <Navbar fixed="top" id="navbar">
        <Navbar.Brand href='#'>
            <img src={logo} className="logo" alt='Templix logo'/>
        </Navbar.Brand>
      </Navbar>
    </Container>
      
    </>
  )
}

export default Header;