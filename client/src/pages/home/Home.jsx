import React from 'react';
import '../home/Home.css';
import mainPageBanner from '../../components/resources/mp2banner.png'
import pricing from '../../components/resources/pricing.png'
import Accordion from 'react-bootstrap/Accordion';
import RegistrationForm from '../../components/registration-form/RegistrationForm';
import SignIn from '../../components/sign-in/SigIn';
import About from '../about/About';
import Faq from '../faq/Faq';
import Features from '../features/Features';



function Home() {
 

  return (
    <>
      
      <div className=''>
                          {/* registrtion form and sign in button starts here*/}
      <div className="w-100">
                   <div className="d-flex justify-content-end w-75 d-block container-fluid flex-row"> 
                        <div className="px-3" ><SignIn /></div>
                        <div className="px-3"><RegistrationForm /></div> 
                    </div>      
                </div>
                           {/* home page body content starts here */}
        <div className="HomePagebackGroundColor">         
            <img src={mainPageBanner} alt="POS brochure" className="index-brochure w-100" fluid />
              {/* POS banner ends herelogo */}

                         {/* Features section starts here */}
                            <Features />   
                            {/* features section ends here */}
                           {/* <!-- starts of pricing section --> */}        
                   <section id="pricing" className=" bg-info-subtle">
                          <img src={pricing} alt="POS brochure" className="index-brochure w-100" fluid />
                   </section>
             </div> {/* background end tag */}
                   {/* <!-- End of pricing section here --> */}
                                {/* <!-- About us section starts here --> */}
                    <section id="about" className="firstLandingPage pt-5 ">
                                <h1 className="text-center">About us</h1>
                                {/* short content introduction below here */}
                                <div className='text-center'>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae  nam omnis numquam magnam harum quos debitis, vitae itaque a!
                                  </p>
                                </div>
                                    {/* to view more link below here */}
                                    <div className="p-0 d-flex justify-content-center">
                                           <a className="hrefLink" href="/about" onClick={About}>Learn more</a>
                                    </div>
                    </section>
                                    {/* about section ends here */}
                   {/* end of about us section */}
                   {/* <!-- FAQ section starts here --> */}
                      <section id="faqhome" className="pt-5"> 
                        <div className="text-center pt-5">
                          <div className="p-2">
                            <h2>Frequently Asked Questions</h2>
                            <div className=" faq d-flex d-block w-100 justify-content-center 100"> {/* <!--- flex container main start tag----> */}  
                              <div className="p-0 w-75 faq-accordion">  {/* <!------firt item start tag------> */}
                                {/* <!---------accrodion starts here---------> */}
                                <Accordion>
                                        <Accordion.Item eventKey="0">
                                          <Accordion.Header> Is this system is free?</Accordion.Header>
                                          <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                          </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                          <Accordion.Header>How many users are the limit per email?</Accordion.Header>
                                          <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                          </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                          <Accordion.Header> Are invetory and sales data are availbale to download?</Accordion.Header>
                                          <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                          </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                          <Accordion.Header> Is there a user manual?</Accordion.Header>
                                          <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                          </Accordion.Body>
                                        </Accordion.Item>
                                      </Accordion>
                                {/* <!---------accordion ends here------------> */}
                              </div> {/* <!------firt item end tag------> */}
                            </div> {/* <!--- flex container main end tag---->*/}
                          </div>
                        </div>
                                        {/* faq learn more button starts here */}
                                        <div className="p-0 d-flex justify-content-center pb-5">
                                             <a className="hrefLink" href="/faq" onClick={Faq}>Learn more</a>
                                         </div>
                                        {/* faq learn more button ends here */}
                                    
                      </section>{/* <!-- FAQ section ends here --> */}
                             
       </div>  {/* main div end tag */}
    </>
  );
}

export default Home;

