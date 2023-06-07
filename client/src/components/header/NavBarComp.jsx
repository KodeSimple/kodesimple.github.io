import '../header/NavBarComp.css';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import brandLogo from '../resources/mp2-brand-logo.jpg';
// import { Container } from 'react-bootstrap';


function NavBarComp() {
  return (
    <div>
        {/* <Container fluid>    */}
               <div className="navBarColor d-flex container-fluid justify-content-center ">
                 <Navbar className="custom-navbar ml-auto " expand="lg">
                   <Navbar.Brand className="navBarBrand ml-auto" href="features">
                     <img src={brandLogo} height="70vh" alt="logo" fluid />
                   </Navbar.Brand>
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="ml-auto">
                       <Nav.Link className="nav-link" as={Link} to="/home">Home</Nav.Link>
                       <Nav.Link className="nav-link" as={Link} to="/about">About</Nav.Link>
                       <Nav.Link className="nav-link" as={Link} to="/faq">Faq</Nav.Link>
                       <Nav.Link className="nav-link" as={Link} to="/blog">Blog</Nav.Link>
                       <Nav.Link className="nav-link" as={Link} to="/contact">Contact</Nav.Link>
                     </Nav>
                   </Navbar.Collapse>
                 </Navbar>
               </div>
        {/* </Container> */}
    </div>
  );
}

export default NavBarComp;















