import React from "react";
import { Container, Row } from "react-bootstrap";


const ContactUs = () => {
  
  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left"></Row>
      <h1>Contact Information</h1>
      <ul>
          <li> Kimberly Crevecoeur : krcrevec@iu.edu </li>
          <li> Louis Labuzienski : llabuzie@iu.edu</li>
          <li> Niranjan Abhyankar : nvabhyan@iu.edu</li>
          <li> Sub Raizada : sraizada@iu.edu</li>
      </ul>
    </Container>
  );
};

export default ContactUs;