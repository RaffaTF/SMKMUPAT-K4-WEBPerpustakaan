import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Tamba from '../../img/Tamba.jpg';
import { NavDropdown } from 'react-bootstrap';


function Navi() {
  return (
    <Navbar bg="light" expand="lg" >
  <Col xs={6} md={4}>
  <a href="/"  rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none'}}>
    <Image src={Tamba} rounded style={{ width: '2rem', height: '2rem' }} />E-Libro 
  </a>
</Col>
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0"style={{ maxHeight: '50rem' }}navbarScroll>  
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            
            <NavDropdown title="Genre" id="basic-nav-dropdown">
            <NavDropdown.Item href="/edukasi">Sejarah</NavDropdown.Item>
            <NavDropdown.Item href="/war">Cerita Rakyat</NavDropdown.Item>
            <NavDropdown.Item href="/sf">Science Fiction</NavDropdown.Item>
            <NavDropdown.Item href="/agama">Agama</NavDropdown.Item>
            <NavDropdown.Item href="/advanture">Adventure</NavDropdown.Item>
            <NavDropdown.Item href="/horor">Horror</NavDropdown.Item>
            <NavDropdown.Item href="/fantasy">Fantasy</NavDropdown.Item>
            <NavDropdown.Item href="/action">Action</NavDropdown.Item>
          </NavDropdown> 
      </Nav>
      <Form className="d-flex">
        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default Navi;