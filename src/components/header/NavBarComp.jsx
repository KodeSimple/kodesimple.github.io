import '../header/NavBarComp.css';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import brandLogo from '../resources/mp2-brand-logo.jpg';
import { Link as ScrollLink } from 'react-scroll';

function NavBarComp() {
  return (
    <div>
      <div className="navBarColor d-flex justify-content-center">
        <Navbar className="custom-navbar ml-auto" expand="lg">
          <Navbar.Brand className="navBarBrand ml-auto" href="features">
            <img src={brandLogo} height="70vh" alt="logo" fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="nav-link" as={Link} to="/home">Home</Nav.Link>
                {/* insert starts here */}
                  <ScrollLink
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="nav-link"
                      >
                      About
                    </ScrollLink>
                    <ScrollLink
                      activeClass="active"
                      to="pricing"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="nav-link"
                      >
                      Pricing
                    </ScrollLink>
                {/* insert ends here */}
              {/* <Nav.Link className="nav-link" href="pricing">Pricing</Nav.Link> */}
              <Nav.Link className="nav-link" as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBarComp;















