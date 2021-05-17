import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from './../Styles/Layout1.module.css'

export default function Layout1() {
  function animationClick() {
    
  }
  return(
    <div className={styles['layout-background']}>
    <Container className={styles['layout-container']}>
      <Navbar collapseOnSelect expand='md' className={styles['layout-1-nav']} fixed="top">
        <Navbar.Brand>
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
