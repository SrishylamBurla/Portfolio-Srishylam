import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavbarComp() {
  return (
    <div>
    <Navbar variant={"dark"} collapseOnSelect expand="lg" className="navbar mb-5">
      <Container>
        <Navbar className='font-sans font-bold text-red-500 text-4xl' href="/">SRISHYLAM</Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link id='nav-item' as={Link} to="/">Home</Nav.Link>
            <Nav.Link id='nav-item' as={Link} to="/about">About</Nav.Link>
            <Nav.Link id='nav-item' as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link id='nav-item' as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link id='nav-item' as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </div>
  )
}

export default NavbarComp
