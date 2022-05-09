import React from "react";
import {  Navbar, Nav, Container, NavDropdown } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Insert fake company name here (+logo?)</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Workouts</Nav.Link>
            <Nav.Link href="#link">New Workout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
