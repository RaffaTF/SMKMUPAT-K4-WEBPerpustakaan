import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Nlogo from '../home/Nlogo.jpg';


function Navi() {
  return (
    <Navbar bg="light" expand="lg">
  <Col xs={6} md={4}>
  <a href="a"  rel="noopener noreferrer">
    <Image src={Nlogo} rounded style={{ width: '4rem', height: '4rem' }} />
  </a>
</Col>

  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action13">About</Nav.Link>
        <Nav.Link href="#action3">Stoer</Nav.Link>
        <Nav.Link href="#action2">Login</Nav.Link>
       
       
        
      </Nav>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default Navi;