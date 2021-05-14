import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import '../Styles/Layout.css';
import Card from 'react-bootstrap/Card';
import logo from '../img/logo.png'


export default function Layouts() {
  return(
    <div className='background background--color-map'>
      <Container className='layout-container'>
        <Row>
          <h1>Layouts</h1>
          <h5 className="mt-3">Select a layout to view it</h5>
          <h5>Click the back button to return to this page, or the link in the navbar</h5>
          <h5>When viewing a layout, select the<span className="mark">"?"</span> for instructions and specifications</h5>
        </Row>
        <Row className="mt-5" style={{margin: "auto"}}>
          <Col lg={4}>
            <Card className="card-styles">
              <Card.Img variant="top" src={logo}/>
              <Card.Body>
                <Card.Title>Layout 1</Card.Title>
                <Card.Text>lorem ipsum about this layout its completley random placeholder txt bruh</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
          <Card className="card-styles">
              <Card.Img variant="top" src={logo}/>
              <Card.Body>
                <Card.Title>Layout 1</Card.Title>
                <Card.Text>lorem ipsum about this layout its completley random placeholder txt bruh</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
          <Card className="card-styles">
              <Card.Img variant="top" src={logo}/>
              <Card.Body>
                <Card.Title>Layout 1</Card.Title>
                <Card.Text>lorem ipsum about this layout its completley random placeholder txt bruh</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}