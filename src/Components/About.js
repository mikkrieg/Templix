import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Mikey from './../img/mikey.jpeg';
import './../Styles/About.scss';


export default function About() {
  return(
    <>
    <div className='background background--color-map'>
      <Container className='about-container'>
        <Row>
          <Col lg={6}>
            <Image src={Mikey} id='creator-image'></Image>
          </Col>
          <Col lg={6}>
            <p className='lower p1'>Thanks for taking some time to learn more about me! I am an aspiring Software Developer with a focus on Front-End Development. This project is my capstone for Epicodus Coding Bootcamp.</p>
            <div className='border-div d1'></div>
            <p className='p2'>
            I studied at Portland Community College(PCC) for two years. After completing my education at PCC and recieving and Associates of Applied Science in Web Development and Design, I decided to continue my education in software development at Epicodus Coding Bootcamp. Over six months I learned about HTML/CSS, JavaScript, jQuery, C#/.NET, MVC, Entity Framework ORM, Jest testing, React, Redux, Styled Components, Bootstrap, React-Bootstrap, MySQL, Firebase, API's and coding best practices. 
            </p>
            <div className='border-div d2'></div>
            <p className='p3'>
            Upon graduating Epicodus, I would like begin a career in Front-End Development. This website was built with React, JSX, CSS, SCSS and React-Bootstrap
            </p>
          </Col>
        </Row>  
      </Container>
      </div>
    </>
  )
}