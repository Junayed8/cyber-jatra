import React, { useEffect, useState } from 'react';
import image from '../../../images/logo-black.png';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar  collapseOnSelect expand="lg" className="bg-body-tertiary nav-border fixed-top">
      <Container className='justify-between'>
        <Navbar.Brand>
          <Link to='/'>
            <img id='logo' src={image} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/service'>Services</Nav.Link>
            <Nav.Link as={Link} to='/review'>Reviews</Nav.Link>
            <Nav.Link as={Link} to='/team'>Team</Nav.Link>
            <Nav.Link as={Link} to='/career'>Career</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;