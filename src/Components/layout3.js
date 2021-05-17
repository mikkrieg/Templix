import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Layout3(props) {
  return(
    <>
    <h1>Hello</h1>
    <Button onClick={() => props.handleBackClick()}>Go Back</Button>
    </>
  )
}