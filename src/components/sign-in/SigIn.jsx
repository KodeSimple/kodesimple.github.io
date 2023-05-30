import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../sign-in/SignIn.css'

function SignIn() {
  const [show, setShow] = useState(false);
  const handleCloseLogInForm= () => setShow(false);
  const handleShowLogInForm = () => setShow(true);

  return (
    <>
    <div>
      <div>
          <Button className="signInButton px-2 pt-2" onClick={handleShowLogInForm}>
            Sign-In
          </Button>
      </div>
    
      <Offcanvas show={show} onHide={handleCloseLogInForm} scroll={true} backdrop={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sign In</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
                     Form here
           </Offcanvas.Body>
          </Offcanvas>
       </div>
    </>
  );
}

export default SignIn;
