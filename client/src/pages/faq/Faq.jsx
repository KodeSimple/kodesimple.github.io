import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import NavBarComp from '../../components/header/NavBarComp';
import Footer from '../../components/footer/Footer';

function Faq() {
  return (
    <>
      
    <div> 
                      { /* header section  starts here */}
                             <NavBarComp />
                       {/* header section ends here */}
      <main>
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
                                          <Accordion.Header> Is mobile POS suitable for all types of businesses?</Accordion.Header>
                                          <Accordion.Body>
                                          Mobile POS is suitable for various businesses, including retail stores, restaurants, and service-oriented businesses, as it offers flexibility, mobility, and enhanced inventory management capabilities.
                                          </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                          <Accordion.Header>Can mobile POS handle large inventories??</Accordion.Header>
                                          <Accordion.Body>
                                          Yes, mobile POS systems can handle large inventories by providing real-time tracking, efficient search capabilities, and advanced reporting features.
                                          </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                          <Accordion.Header> How secure is inventory data on mobile POS systems?</Accordion.Header>
                                          <Accordion.Body>
                                          Reputable mobile POS vendors prioritize data security and employ measures such as encryption, access controls, and regular system updates to protect inventory data.
                                          </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                          <Accordion.Header> Can mobile POS help with multi-location inventory management?</Accordion.Header>
                                          <Accordion.Body>
                                          Yes, mobile POS systems enable businesses to manage inventory across multiple locations, providing real-time visibility and centralizing data for efficient multi-location inventory management.
                                          </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                          <Accordion.Header> What are the costs associated with implementing mobile POS for inventory management?</Accordion.Header>
                                          <Accordion.Body>
                                          The costs of implementing mobile POS for inventory management can vary depending on the chosen system and business requirements. Costs may include hardware, software licensing, training, and ongoing support fees.
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
       </main>
    </div>  
                    {/* footer section starts here */}
                            <Footer />
                    {/* footer section ends here */}
    </>
  )
}

export default Faq
