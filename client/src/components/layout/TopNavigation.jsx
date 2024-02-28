import React from 'react';
import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const TopNavigation = () => {
  return (
    <>
    <Navbar sticky="top" bg="light" variant="light" className="mb-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-semibold">
          Simple Client
        </Navbar.Brand>
        <Nav className="flex-grow-1 justify-content-end">
          <Nav.Link as={NavLink} to="/create" className="fw-bold badge bg-primary text-wrap">
            Create User
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);
}

export default TopNavigation;
