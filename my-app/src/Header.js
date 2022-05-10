import React from "react";
import {  Navbar, Nav, Container, NavDropdown } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, NavLink, Switch } from "react-router-dom";


function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/FIA_F1_Austria_2021_Nr._55_Sainz.jpg/1920px-FIA_F1_Austria_2021_Nr._55_Sainz.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Insert fake company name here
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/workouts">Workouts</Nav.Link>
            <Nav.Link href="/new">New</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
