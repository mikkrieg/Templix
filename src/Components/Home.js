import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Styles/Home.scss';

export default function Home() {
  return(
    <>
      <div className="background background--color-map">
        <Container class="body-container">
          <h1>Hello</h1>
        </Container>
      </div>
    </>
  )
}
