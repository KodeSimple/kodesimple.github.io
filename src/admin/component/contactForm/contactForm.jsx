import React, { useState } from 'react';
import { Form, Button, Spinner, Modal } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import '../contactForm/contactForm.css';

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const emailData = {
      To_email: 'kodesimple57@gmail.com',
      email_contact: event.target.email.value,
      client_phone: event.target.contactNumber.value,
      email_subject: event.target.subject.value,
      from_name: event.target.fullName.value,
      concern_message: event.target.concernMessage.value
    };

    emailjs
      .send('service_dshiyj8', 'template_ojh2eca', emailData, 'y8KcAyItpP1kCao23')
      .then((response) => {
        console.log('Email sent successfully!', response);
        setLoading(false);
        setShowModal(true);
        event.target.reset();
        setTimeout(() => {
          setShowModal(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setLoading(false);
      });
  };

  return (
    <>
    <div>
    <div className="text-center pt-2 pb-2">
            <h1>Contact Us</h1>
    </div>
    <Form onSubmit={handleSubmit}>
      <div className="pb-3">
      <Form.Group controlId="email">
        <Form.Label>Email:</Form.Label>
        <Form.Control className="contact-item-field" type="email" placeholder="Enter your email" required />
      </Form.Group>
      </div>
      <div className="pb-3">
      <Form.Group controlId="fullName">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control className="contact-item-field" type="text" placeholder="Enter your full name" required/>
      </Form.Group>
       </div>
       <div className="pb-3">
      <Form.Group controlId="contactNumber">
        <Form.Label>Contact No:</Form.Label>
        <Form.Control className="contact-item-field" type="text" placeholder="Enter your phone number" required />
      </Form.Group>
        </div>
        <div className="pb-3">
      <Form.Group controlId="subject">
        <Form.Label>Subject:</Form.Label>
        <Form.Control className="contact-item-field" type="text" placeholder="Enter email subject" required/>
      </Form.Group>
       </div>
       <div className="pb-3">
      <Form.Group controlId="concernMessage">
        <Form.Label>Concern Message:</Form.Label>
        <Form.Control as="textarea" rows={3} className="contact-item-field" placeholder="Enter your concern message"  required/>
      </Form.Group>
        </div>
      <Button className="submit-concern-buton" type="submit" disabled={loading}>
        {loading ? (
          <>
            <Spinner className="contact-button-spinner" animation="border" size="sm" /> Submitting...
          </>
        ) : (
          'Submit'
        )}
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Email Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your email has been sent successfully. Thank you!
        </Modal.Body>
      </Modal>
    </Form>
    </div>
    </>
  );
}

export default ContactForm;

