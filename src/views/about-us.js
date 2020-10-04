import React from "react";
import { Container, Row } from "react-bootstrap";


const AboutUs = () => {
  
  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
      </Row>
      <h1>Why Ticket Faster?</h1>
      <ul>
          <li> One-stop-shop when purchasing tickets and concessions</li>
          <li> Provides services to multiple cities</li>
          <li> Less physical contact between customers and employees</li>
          <li> Fast and responsive</li>
      </ul>
      <br/>
      <h1>Our Features</h1>
      <ul>
          <li> User Login/Signup</li>
          <li> Search bar</li>
          <li> Unique dashboard for management, public, and registered users</li>
          <li> Maps integration</li>
      </ul>
      
      
    </Container>
  );
};


export default AboutUs;