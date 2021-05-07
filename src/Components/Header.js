import React from 'react';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from './../img/logo.png';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Styles/Header.css';

function Header(props) {
  return (
    <>
    <Container>
      <Navbar collapseOnSelect expand='md' fixed='top' id='navbar' className="navbar-dark">
        <Navbar.Brand href='#'>
            <Image onClick={() => props.homeClick()} src={logo} className='logo' alt='Templix logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav' id="collapse-div">
          <Nav id='nav-alignment'>
            <Nav.Link onClick={() => props.homeClick()} className='nav-links'>Home</Nav.Link>
            <Nav.Link onClick={() => props.aboutClick()} className='nav-links'>About</Nav.Link>
            <Nav.Link onClick={() => props.layoutClick()} className='nav-links'>Layouts</Nav.Link>
            <Nav.Link className='nav-links'>Sign up</Nav.Link>
            <Nav.Link className='nav-links'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
      
    </>
  )
}

Header.propTypes = {
  homeClick: PropTypes.func,
  aboutClick: PropTypes.func,
  layoutClick: PropTypes.func
}

export default Header;