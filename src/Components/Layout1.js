import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from './../Styles/Layout1.module.css'

export default function Layout1() {
  return(
    <div className={styles['layout-background']}>
    <Container className={styles['layout-container']}>
      <Navbar collapseOnSelect expand='md' className={`${styles['navbar-light']} ${styles['layout-1-nav']}`}>
        <Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' className={styles['layout-toggle']}/>
        <Navbar.Collapse id='responsive-navbar-nav' className={styles['layout-collapse']}>
          <Nav>
            <Nav.Link className={styles['layout-navs']}>Link 1</Nav.Link>
            <Nav.Link className={styles['layout-navs']}>Link 2</Nav.Link>
            <Nav.Link className={styles['layout-navs']}>Link 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    </div>
  )
}
