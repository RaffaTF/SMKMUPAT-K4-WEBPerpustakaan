import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Col xs={6} md={4}>
        <a href="a" rel="noopener noreferrer">
          <Image src={Tamba} rounded style={{ width: '4rem', height: '4rem' }} />
        </a>
        E-Libro
      </Col>

      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link onClick={() => handleNavigation('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavigation('/about')}>About</Nav.Link>
            <Nav.Link href="#action3">Store</Nav.Link>
            <Nav.Link onClick={() => handleNavigation('/login')}>Login</Nav.Link>
            <NavDropdown title="Genre" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => handleNavigation('/edukasi')}>Edukasi</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigation('/war')}>War</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigation('/sf')}>Science Fiction</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigation('/advanture')}>Advanture</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigation('/horor')}>Horror</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigation('/fantasy')}>Fantasy</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;
