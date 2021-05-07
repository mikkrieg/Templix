import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Mikey from './../img/mikey.jpeg';
import './../Styles/About.css';


export default function About() {
  return(
    <>
      <Container className='about-container'>
        <Row>
          <Col>
            <Image src={Mikey} id="creator-image"></Image>
          </Col>
          <Col>
            <p className="lower">Thanks for taking some time to learn more about me! I am an aspiring Software Developer with a focus on Front-End Development. This project is my capstone for Epicodus Coding Bootcamp.</p>
            <div className="border-div"></div>
            <p>
            I studied at Portland Community College(PCC) for two years. After completing my education at PCC and recieving and Associates of Applied Science in Web Development and Design, I decided to continue my education in software development at Epicodus Coding Bootcamp. Over six months I learned about HTML/CSS, JavaScript, jQuery, C#/.NET, MVC, Entity Framework ORM, Jest testing, React, Redux, Styled Components, Bootstrap, React-Bootstrap, MySQL, Firebase, API's and coding best practices. 
            </p>
            <div className="border-div"></div>
            <p>
            Now that I have graduated, I would like start a career in web design. This website was created with the focus of presenting my work; ranging from the website itself, curricular work and my own personal projects.
            </p>
          </Col>
        </Row>
        
      </Container>
    </>
  )
}