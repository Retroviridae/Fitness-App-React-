import React from "react";
import {  Navbar, Nav, Container, NavDropdown } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, NavLink, Switch } from "react-router-dom";

let marginBottom = {
  marginBottom: 50 }

function Header() {
  return (
    <Navbar bg="light" expand="lg" style={marginBottom}>
      <Container>
        <Navbar.Brand href="/">
        <img
          alt=""
          src="https://ih1.redbubble.net/image.1000561856.0547/pp,840x830-pad,1000x1000,f8f8f8.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Dwight Schrute Gym for Muscles 
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/workouts">Workouts</NavLink>
            <NavLink to="/new">New</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
