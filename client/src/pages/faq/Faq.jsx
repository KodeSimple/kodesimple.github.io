import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Faq() {
  return (
    <div>
           {/* faq content starts here */}
               {/* <!-- FAQ section starts here --> */}
               <section id="faqhome" className="pt-1"> 
                      <div class="d-flex flex-row justify-content-center align-self-center bg-body-emphasis pt-5 flex-nowrap container-fluid">
                              <div class="pt-5 w-75 bg-body">
                                    <h2>Frequently Asked Questions</h2>
                                    <hr class="hrLines" />
                              </div>
                        </div>
                        <div className="text-center pt-1">
                          <div className="p-2">
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
                      </section>{/* <!-- FAQ section ends here --> */}
           {/* faq contents ends here */}
    </div>
  )
}

export default Faq
