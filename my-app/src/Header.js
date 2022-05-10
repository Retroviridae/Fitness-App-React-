import React from "react";
import {  Navbar, Nav, Container, NavDropdown } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Insert fake company name here (+logo?)</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/workouts">Workouts</Link>
            <Link to="/workouts/new">New Workout</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
