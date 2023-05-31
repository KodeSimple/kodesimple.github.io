import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import posBrandLogo from '../../resources/mp2-brand-logo.jpg';


function PosNavBarComp() {
  return (
    <>
    <div>
    <div className="navBarColor d-flex justify-content-center ">
        <Navbar className="custom-navbar ml-auto " expand="lg">
          <Navbar.Brand className="navBarBrand ml-auto" href="features">
            <img src={posBrandLogo} height="70vh" alt="logo" fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="nav-link" as={Link} to="/online-pos">POS</Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/inventory">Inventory</Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/sales">Sales</Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/pos-user">User</Nav.Link> 
              <Nav.Link className="nav-link" as={Link} to="/pos-contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
    </>
  );
}

export default PosNavBarComp;














