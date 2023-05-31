import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../registration-form/RegistrationForm.css';
import Registration from '../../pages/Registration/Registration';

function RegistrationButton() {
  const [show, setShow] = useState(false);

  const handleClosehandleRegistrationForm = () => setShow(false);
  const handleShowRegistrationForm = () => setShow(true);

  return (
    <>
      <div>
          <Button className="registrationButton px-2 pt-2" onClick={handleShowRegistrationForm}>
            Register
          </Button>
      </div>
    
      <Offcanvas show={show} onHide={handleClosehandleRegistrationForm} scroll={true} backdrop={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Registration Form</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
               <div> <Registration /></div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default RegistrationButton;


    
