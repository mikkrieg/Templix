import React, {useContext} from 'react';
import {AppContext} from './../AppContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import '../Styles/Layout.css';
import Card from 'react-bootstrap/Card';
import logo from '../img/logo.png'


export default function Layouts() {
  const { setLayout1, setLayout2, setLayout3, setLayoutsVisible  } = useContext(AppContext);
  
  function handleCard1Click() {
    setLayout1(true);
    setLayout2(false);
    setLayout3(false);
    setLayoutsVisible(false);
  }

  function handleCard2Click() {
    setLayout2(true);
    setLayout3(false);
    setLayout1(false);
    setLayoutsVisible(false);
  }

  function handleCard3Click() {
    setLayout3(true);
    setLayout2(false);
    setLayout1(false);
    setLayoutsVisible(false);
  }
  return(
    <div className='background background--color-map'>
      <Container className='layout-container'>
        <Row className="layout-info">
          <p className="layout-p">When viewing a layout, select the<span className="mark">"?"</span> for instructions and specifications</p>
        </Row>
        <Row className="mt-5 card-row">
          <Col lg={4}>
            <Card onClick={() => handleCard1Click()} className="card-styles" id="card-1">
              <Card.Img variant="top" src={logo}/>
              <Card.Body>
                <Card.Title>Layout 1</Card.Title>
                <Card.Text className="card-text">lorem ipsum about this layout its completley random placeholder txt bruh</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
          <Card onClick={() => handleCard2Click()} className="card-styles" id="card-2">
              <Card.Img variant="top" src={logo}/>
              <Card.Body>
                <Card.Title>Layout 1</Card.Title>
                <Card.Text className="card-text">lorem ipsum about this layout its completley random placeholder txt bruh</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
          <Card onClick={() => handleCard3Click()} className="card-styles" id="card-3">
              <Card.Img variant="top" src={logo}/>
              <Card.Body>
                <Card.Title>Layout 1</Card.Title>
                <Card.Text className="card-text">lorem ipsum about this layout its completley random placeholder txt bruh</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}