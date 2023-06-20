import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import posBrandLogo from '../../resources/mp2-brand-logo.jpg';
import Logout from '../../component/logoutButton/Logout';
import { Container } from 'react-bootstrap';

function PosNavBarComp() {
  return (
    <>
              <div className="navBarColor d-flex justify-content-around flex-wrap container-fluid ">
                        <div className="px-5 d-flex">
                            <Container fluid>
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
                            </Container>
                         </div>                 
                         <div className="self-align-center pt-5">
                             <Logout />
                         </div>                                                                             
               </div>
    </>
  );
}

export default PosNavBarComp;














