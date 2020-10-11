import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Navbar
        className="justify-content-center mt-4 pt-4 pb-3"
        bg="dark"
        variant="dark"
      >
        <Nav>
          <Nav.Link as={Link} to="/about">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/advertise">
            Advertise
          </Nav.Link>
          <Nav.Link as={Link} to="/press">
            Press
          </Nav.Link>
        </Nav>
        <Navbar.Brand className="ml-4 mr-4">GitHub Jobs</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/archives">
            Archives
          </Nav.Link>
          <Nav.Link as={Link} to="/privacy">
            Privacy
          </Nav.Link>
        </Nav>
      </Navbar>
      <Navbar className="justify-content-center" bg="dark" variant="dark">
        <p className="text-secondary">
          &#169; 2005 - {new Date().getFullYear()}, GitHub Jobs. All rights
          reserved.
        </p>
      </Navbar>
    </>
  );
}
