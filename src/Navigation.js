import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          GitHub Jobs
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/features">
            Features
          </Nav.Link>
          <Nav.Link as={NavLink} to="/pricing">
            Pricing
          </Nav.Link>
        </Nav>
        <Button className="mr-2" variant="outline-info">
          Sign Up
        </Button>
        <Button variant="info">Log In</Button>
      </Container>
    </Navbar>
  );
}
