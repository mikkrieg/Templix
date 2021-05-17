import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from './../Styles/Layout1.module.css'
import Button from 'react-bootstrap/Button';

// The two imports below can be deleted on download
import {useContext} from 'react'
import {AppContext} from './../AppContext';

export default function Layout1() {
  // This function and state hook can be deleted on download
  const {setLayoutsVisible, setLayout1} = useContext(AppContext);
  function handleBackClick() {
    setLayoutsVisible(true);
    setLayout1(false);
  }

  return(
    <div className={styles['layout-background']}>
    <Container className={styles['layout-container']}>
      <Navbar collapseOnSelect expand='md' className={styles['layout-1-nav']} fixed='top'>
        <Navbar.Brand>
          {/* This button can be deleted on download and replaced with a logo */}
          <Button className={styles['button-styling']}onClick={() => handleBackClick()}>Go Back</Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' className={styles['layout-toggle']}/>
        <Navbar.Collapse id='responsive-navbar-nav' className={styles['layout-collapse']}>
          <Nav className={styles['navbar-style']}>
            <Nav.Link className={styles['layout-navs']}>Link 1</Nav.Link>
            <Nav.Link className={styles['layout-navs']}>Link 2</Nav.Link>
            <Nav.Link className={styles['layout-navs']}>Link 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <body className={styles['layout-body']}>
        <h1 className={styles['layout-heading']}>Hello</h1>
        <footer className={styles['footer-position']}>&copy;2021</footer>
      </body>
    </Container>
    </div>
  )
}
