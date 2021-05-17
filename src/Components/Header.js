import React, {useContext} from 'react';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from './../img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppContext} from './../AppContext';
import './../Styles/Header.css';

function Header() {
  const {
    aboutVisible, 
    setAboutVisible, 
    homeVisible, 
    setHomeVisible, 
    layoutsVisible, 
    setLayoutsVisible, 
    animation1, 
    animation2,
    animation3,
    setAnimation1,
    setAnimation2,
    setAnimation3,
    setLayout1,
    setLayout2,
    setLayout3 } = useContext(AppContext)

  function handleAboutClick() {
    if(aboutVisible === false){
      setAboutVisible(true);
      setHomeVisible(false)
      setLayoutsVisible(false)
      setAnimation2(true);
      setAnimation1(true);
      setLayout1(false)
      setLayout2(false)
      setLayout3(false)
    }
  }

  function handleHomeClick() {
    if(homeVisible !== true) {
      setHomeVisible(true);
      setAboutVisible(false)
      setLayoutsVisible(false)
      setAnimation1(true);
      setLayout1(false)
      setLayout2(false)
      setLayout3(false)
    }
  }

  function handleLayoutsClick() {
    if(layoutsVisible === false) {
      setLayoutsVisible(true);
      setHomeVisible(false)
      setAboutVisible(false)
      setAnimation3(true);
      setAnimation1(true);
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
              <Nav.Link onClick={() => handleHomeClick()} className={homeVisible ? 'active' : animation1 ? "reduce" : ""}>Home</Nav.Link>
              <Nav.Link onClick={() => handleAboutClick()} className={aboutVisible ? 'active' : animation2 ? "reduce" : ""}>About</Nav.Link>
              <Nav.Link onClick={() => handleLayoutsClick()} className={layoutsVisible ? 'active' : animation3 ? "reduce" : ""}>Layouts</Nav.Link>
              <Nav.Link className='nav-link'>Sign up</Nav.Link>
              <Nav.Link className='nav-link'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  )
}


export default Header;