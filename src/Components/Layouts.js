import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import '../Styles/Layout.css';


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
      </Container>
    </div>
  )
}