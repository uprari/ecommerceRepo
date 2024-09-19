import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from 'react-router-bootstrap'


function Header() {
  return (
    <header>
      <Navbar bg="dark" expand="lg" className="bg-body-tertiary">
        <Container>
            <LinkContainer to="/"><Navbar.Brand>Ecom Proj</Navbar.Brand></LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <LinkContainer to='/cart'><Nav.Link href="/cart"><i className="fa-solid fa-cart-shopping"></i>Cart</Nav.Link></LinkContainer>
            <LinkContainer to='/login'><Nav.Link href="/login"><i className="fa-solid fa-right-to-bracket"></i>Login</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      export default BasicExample;
    </header>
  );
}

export default Header;
