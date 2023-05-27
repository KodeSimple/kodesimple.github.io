import React from 'react'
import './Footer.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Features from './Features';
import Home from '../pages/Home';
// import About from './About';
// import Pricing from '.';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';


function Footer() {
  return (
        <div className="page-footer justify-content-center d-flex container-fluid w-100"> 
           <p>
                {/* //////////////insert footer from mp2 here///////////////////////////// */}
                           {/* <!-----footer container set 1 starts here------> */}
                   <Router>        
                     <Navbar>
                           <div class="d-flex flex-row mb-1 footerNavMobileRes w-100 justify-content-center">
                             <div class="p-2">
                                 <Nav.Link className="" as={Link} to="/home">Home</Nav.Link>
                             </div>
                             <div class="p-2">
                                 <Nav.Link className="" href="Product">Product</Nav.Link>
                             </div>
                             <div class="p-2">
                                 <Nav.Link className="" href="Features">Feautes</Nav.Link>
                             </div>
                             <div class="p-2">
                                 <Nav.Link className="" href="About">About</Nav.Link>
                             </div>
                             <div class="p-2">
                                <Nav.Link className="" href="Pricing">Pricing</Nav.Link>
                             </div>
                             <div class="p-2">
                                 <Nav.Link className="" href="Blog">Blog</Nav.Link>  
                             </div>
                             <div class="p-2">
                                <Nav.Link className="" href="Contact">Contact</Nav.Link>  
                             </div>
                             <div class="p-2">
                               <Nav.Link className="" href="faq">Frequently asked questions</Nav.Link>    
                             </div>
                           </div>
                        </Navbar>  
                           {/* <!-----footer container set 1 ends here--------->
                           <!-----footer container set 2 starts here--------> */}
                     
                           <div class="d-flex d-block w-100 align-self-center"> 
                                 {/* <!------flex main container start tag-------> */}
                             <div class=" d-flex container-fluid p-0 flex-wrap justify-content-around align-self-center w-75">
                               {/* <!--------flex item 2 start tag-------------> */}
                               <div class="d-flex align-self-center d-inline-block">
                                   {/* <!--------flex item 1 start tag-------------> */}
                                 <span>
                                   <p>© 2023 KodeSimple</p>
                                 </span>
                               </div>
                               {/* <!--------flex item 1 end tag-------------> */}
                     
                               {/* <!--------flex item 3 start tag-------------> */}
                               <div class="p-0 d-flex d-block flex-row flex-wrap">
                                 <div class="p-0 "> <p>facebook</p>
                                   {/* <a class="btn btn-outline-primary m-2" href="https://www.facebook.com/profile.php?id=100092405686394/"
                                     target="_blank" role="button">
                                     <img src="./resources/icons8-facebook-64.png" alt="facebook logo" style="width:25px; height:25px;">
                                   </a> */}
                                 </div>
                                 <div class="p-0 "><p>gmail</p>
                                   {/* <a class="btn btn-outline-primary m-2" href="mailto:kodesimple57@gmail.com" target="_blank" role="button">
                                     <img src="./resources/Gmail_icon_(2020).svg.webp" alt="gmail logo" style="width:20px;height:20px;">
                                   </a> */}
                                 </div>
                                 <div class="p-0 "><p>messenger</p>
                                 {/* <a class="btn btn-outline-primary m-2" href="https://www.google.com/" target="_blank" role="button">
                                   <img src="./resources/messenger-logo-removebg-preview.png" alt="messenger logo"
                                     style="width:20px;height:20px;">
                                 </a> */}
                               </div>
                             </div>
                           </div>
                            {/* <!--------flex item 3 end tag-------------> */}
                           </div> 
                           {/* <!------flex main container end tag-------> */}
                           {/* <!----------------copyright---------------------> */}
                         
                {/* ////////////////////////////Routes//////////////////////////////// */}
                       <Routes>
                            {/* <Route path="/features" element={<Features />} /> */}
                            <Route path="/home" element={<Home />} />
                            {/* <Route path="/about" element={<About />} /> */}
                            {/* <Route path="/pricing" element={<Pricing />} /> */}
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/contact" element={<Contact />} />
                          </Routes>
                </Router>
            </p>
        </div>  
  )
}

export default Footer
