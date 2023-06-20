import React from 'react';
import NavBarComp from '../../components/header/NavBarComp';
import Footer from '../../components/footer/Footer';
import AiFillFacebook from '../../components/resources/fb-icon.png';
import AiFillInstagram from '../../components/resources/insta-icon.png';
import { Form, Button} from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import '../contact/contact.css';
import { Container, Row, Col } from 'react-bootstrap';
// import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

function Contact() {
  
  return(
     <> 
         {/* header section  starts here */}
                  <NavBarComp />
         {/* header section ends here */}
     <main>   
         <secction class="contact">
              <div class="d-flex flex-row justify-content-center align-self-center bg-gradient pt-5 flex-nowrap container-fluid">
                <div class="pt-5 w-50 bg-body">
                     <h1>Contact Us</h1>
                     <p class="mt-4 mb-4">
                     Fill out the form and a member from our sales team will get back to you within 24 hours, or scroll down for more ways to get in touch.
                     </p>
                      {/* <hr class="hrLines" /> */}
          {/* content starts here */}

          {/* <div className="contact-container">
            

          <Form className="contact-item w-75">
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                </Form.Group>

                <Button p- variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              
              
              </div> */}

<Container>
      <Row className="container-row">
        {/* First Column */}
        <Col className="col-contact" sm={6} style={{ background: 'lightblue', padding: '20px' }}>

        <h4>Contact Business Solution Sales</h4>
         
          <p className="p-contact">
            Already a customer or need help with a Mobile POS? Contact Support
          </p>

          <div>
          <Badge variant="secondary">📞</Badge> +1234567890
          </div>

          <div className="iframe-contact">
          <iframe
            title="Map"
            width="100%"
            height="300"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.987654!3d40.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sYour%20Business%20Address%20Here!5e0!3m2!1sen!2sus!4v1234567890123"
            allowFullScreen
          />
          </div>

          {/* <p>Phone: +1234567890</p> */}
          <div className="image-contact">
          <a href="https://www.facebook.com">
            <img src={AiFillFacebook} size={30} height="50px" alt="fb icon" fluid/>
          </a>

          <a href="https://www.instagram.com">
            <img src={AiFillInstagram} size={30} height="40px" alt="insta icon" fluid/>
          </a>
           
          </div>
        </Col>

        {/* Second Column */}
        <Col sm={6} style={{ padding: '20px' }}>
         
          <Form className="contact-item">
            <Row>
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter first name" style={{ marginBottom: '10px' }}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter last name" style={{ marginBottom: '10px' }}/>
                </Form.Group>
              </Col>
            </Row>

            <Row>
            <Col>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" style={{ marginBottom: '10px' }}/>
            </Form.Group>
            </Col>

            <Col>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" style={{ marginBottom: '10px' }}/>
            </Form.Group>
            </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="company">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter company name" style={{ marginBottom: '10px' }}/>
                </Form.Group>
             </Col>

              <Col>
                <Form.Group controlId="industry">
                  <Form.Label>Industry</Form.Label>
                  <Form.Control type="text" placeholder="Enter industry" style={{ marginBottom: '10px' }}/>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="revenue">
                  <Form.Label>Annual Revenue</Form.Label>
                  <Form.Control type="text" placeholder="Select Revenue" style={{ marginBottom: '10px' }}/>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control type="text" placeholder="Enter country" style={{ marginBottom: '25px' }}/>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="newsletter">
              <Form.Check type="checkbox" label="Yes, I would like to receive news and offers from KodeSimple via email" style={{ marginBottom: '10px' }}/>
            </Form.Group>

            <Form.Group controlId="phoneCall">
              <Form.Check type="checkbox" label="Yes, I agree to receive phone calls from KodeSimple" style={{ marginBottom: '15px' }}/>
            </Form.Group>

            <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your message" style={{ marginBottom: '10px' }}/>
            </Form.Group>

            <Button className="button-form" variant="primary" type="submit">
                  Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
 


           {/* contents ends here */}
                </div>
              </div>
        </secction>
     </main>
          {/* footer section starts here */}
                          <Footer />
          {/* footer section ends here */}
     </>
  )
}

export default Contact