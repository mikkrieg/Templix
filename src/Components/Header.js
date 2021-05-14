import React, {useContext} from 'react';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from './../img/logo.png';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppContext} from './../AppContext';
import './../Styles/Header.css';

function Header() {
  const {aboutVisible, setAboutVisible, homeVisible, setHomeVisible, layoutsVisible, setLayoutsVisible} = useContext(AppContext)
  function handleAboutClick() {
    if(aboutVisible === false){
      setAboutVisible(true);
      setHomeVisible(false)
      setLayoutsVisible(false)
    }
  }

  function handleHomeClick() {
    if(homeVisible !== true) {
      setHomeVisible(true);
      setAboutVisible(false)
      setLayoutsVisible(false)
    }
  }

  function handleLayoutsClick() {
    if(layoutsVisible === false) {
      setLayoutsVisible(true);
      setHomeVisible(false)
      setAboutVisible(false)
    }
  }
  return (
    <>
    <Container>
      <Navbar collapseOnSelect expand='md' fixed='top' id='navbar' className="navbar-dark">
        <Navbar.Brand href='#'>
            <Image onClick={() => handleHomeClick()} src={logo} className='logo' alt='Templix logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav' id="collapse-div">
          <Nav id='nav-alignment'>
            <Nav.Link onClick={() => handleHomeClick()} className='nav-links link-active'>Home</Nav.Link>
            <Nav.Link onClick={() => handleAboutClick()} className='nav-links link-active'>About</Nav.Link>
            <Nav.Link onClick={() => handleLayoutsClick()} className='nav-links link-active'>Layouts</Nav.Link>
            <Nav.Link className='nav-links'>Sign up</Nav.Link>
            <Nav.Link className='nav-links'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
      
    </>
  )
}


export default Header;