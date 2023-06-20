import React from 'react'
import '../footer/Footer.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import facebookLogo from '../resources/icons8-facebook-64.png';
import gmailLogo from '../resources/Gmail_icon_(2020).svg.webp';
import messengerLogo from '../resources/messenger-logo-removebg-preview.png';

function Footer() {
  return ( 
     <>  
     <footer>   
        <div className="page-footer justify-content-center d-flex container-fluid w-100"> 
           <p>
                {/* //////////////insert footer from mp2 here///////////////////////////// */}

                         {/* modification here */}
                         <footer class="footerBgColor container-fluid mb-0 ">
                               {/* <!-----footer container set 1 starts here------> */}
                               <div class="d-flex flex-row mb-0 footerNavMobileRes w-100 justify-content-center">
                                 <div class="p-0">
                                      <Navbar>
                                         <Nav.Link className="" as={Link} to="/home">Home</Nav.Link>
                                     </Navbar> 
                                 </div>
                                 <div class="p-0">
                                     <Navbar>
                                        <Nav.Link className="" href="Features">Features</Nav.Link>
                                     </Navbar> 
                                 </div>
                                 <div class="p-0">
                                     <Navbar>
                                         <Nav.Link className="" href="About">About</Nav.Link>
                                     </Navbar> 
                                 </div>
                                 <div class="p-0">
                                     <Navbar>
                                          <Nav.Link className="" href="Blog">Blog</Nav.Link>  
                                     </Navbar> 
                                 </div>
                                 <div class="p-0">
                                    <Navbar>
                                       <Nav.Link className="" href="Contact">Contact</Nav.Link> 
                                    </Navbar> 
                                 </div>
                                 <div class="p-0">
                                   <Navbar>
                                     <Nav.Link className="" href="faq">Frequently asked questions</Nav.Link>   
                                   </Navbar> 
                                 </div>
                               </div>
                               {/* <!-----footer container set 1 ends here---------> */}
                               {/* <!-----footer container set 2 starts here--------> */}
                         
                               <div class="d-flex d-block w-100 align-self-center">  {/* <!------flex main container start tag-------> */}
                                 <div class=" d-flex container-fluid p-0 flex-wrap justify-content-around align-self-center w-75">
                                   {/* <!--------flex item 2 start tag-------------> */}
                                   <div class="d-flex align-self-center d-inline-block"> {/* <!--------flex item 1 start tag-------------> */}   
                                     {/* <Span> */}
                                       <p>© 2023 KodeSimple</p>
                                     {/* </Span> */}
                                   </div> {/* <!--------flex item 1 end tag-------------> */}
                                   {/* <!--------flex item 3 start tag-------------> */}
                                   <div class="p-0 d-flex d-block flex-row flex-wrap">
                                     <div class="p-2">
                                              <Button
                                                    variant="outline-primary"
                                                    className="m-2 footerButton"
                                                    href="https://www.facebook.com/profile.php?id=100092405686394"
                                                    target="_blank"
                                                    role="button"
                                                     >
                                                      <img src={facebookLogo} height="20px" alt="logo" fluid />
                                              </Button>
                                     </div>
                                     <div class="p-2 ">  
                                              <Button
                                                    variant="outline-primary"
                                                    className="m-2 footerButton"
                                                    href="mailto:kodesimple57@gmail.com"
                                                    target="_blank"
                                                    role="button"
                                                      >
                                                    <img src={gmailLogo} height="20px" alt="logo" fluid />
                                              </Button>
                                     </div>
                                     <div class="p-2 ">
                                     <Button
                                                // variant="outline-primary"
                                                className="m-2 footerButton"
                                                href="https://www.messenger.com/t/117956294624198/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0"
                                                target="_blank"
                                                role="button"
                                              >
                                              <img src={messengerLogo} height="20px" alt="logo" fluid />
                                          </Button>
                                   </div>
                                 </div>
                               </div>  {/* <!--------flex item 3 end tag-------------> */}
                               </div> {/* <!------flex main container end tag-------> */}      
                               {/* <!----------------copyright---------------------> */}
                             </footer>
                                                  {/* modification ends here */}
                 </p>
            </div>  
         </footer>
      </>

  )
}

export default Footer
