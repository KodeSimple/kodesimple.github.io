import './NavBarComp.css';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Features from './Features';
import Home from '../pages/Home';
// import About from './About';
// import Pricing from '.';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import brandLogo from './resources/mp2-brand-logo.jpg';

export default class NavBarComp extends Component {
  render() {
    return (
      <>
        <div>
          <Router >
               <div className="navBarColor d-flex justify-content-center">
                   <Navbar className="custom-navbar " expand="lg">
                      <Container fluid className="">
                        <Navbar.Brand className="navBarBrand" href="features">
                        <img src={brandLogo} height="70px" alt="logo" fluid />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="me-auto">
                          <Nav.Link className="nav-link" as={Link} to="/home">Home</Nav.Link>
                           <Nav.Link className="nav-link" href="about">About</Nav.Link>
                           <Nav.Link className="nav-link" href="pricing">Pricing</Nav.Link>
                           <Nav.Link className="nav-link" as={Link} to="/blog">Blog</Nav.Link>
                           <Nav.Link className="nav-link" as={Link} to="/contact">Contact</Nav.Link>  
                          </Nav>
                        </Navbar.Collapse>
                      </Container>
                    </Navbar>
            </div>
            {/* <div> */}
              {/* <Routes> */}
                {/* <Route path="/features" element={<Features />} /> */}
                {/* <Route path="/home" element={<Home />} /> */}
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/pricing" element={<Pricing />} /> */}
                {/* <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div> */}
          </Router>
        </div>
      </>
    );
  }
}








