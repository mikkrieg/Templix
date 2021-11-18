import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Styles/Home.scss';
import {AppContext} from './../AppContext';

export default function Home() {
  const {layoutsVisible, setLayoutsVisible, setHomeVisible} = useContext(AppContext);
  
  function handleLayoutsClick() {
    if(layoutsVisible === false) {
      setLayoutsVisible(true);
      setHomeVisible(false)
    }
  }

  return(
    <>
      <div className='background background--color-map'>
        <Container className='home-container'>
          <h1 className='fade-in'>Welcome</h1>
          <Button onClick={() => handleLayoutsClick()} id='fade-button' className='background--color-map mt-5 text-color' variant='outline-dark' size='lg'>Browse Layouts</Button>
        </Container>
      </div>
    </>
  )
}
