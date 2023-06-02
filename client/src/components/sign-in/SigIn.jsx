import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../sign-in/SignIn.css';
import LogIn from '../../pages/Login/LogIn'

function SignIn() {
  const [show, setShow] = useState(false);
  const handleCloseLogInForm= () => setShow(false);
  const handleShowLogInForm = () => setShow(true);
  console.log(handleShowLogInForm);

  return (
    <>
    <div >
      <div >
          <Button className="signInButton px-2 pt-2" onClick={handleShowLogInForm}>
            Sign-In
          </Button>
      </div>
         <div> 
             <Offcanvas show={show} onHide={handleCloseLogInForm} scroll={true} backdrop={true}>
               <Offcanvas.Header closeButton>
       
                 <Offcanvas.Title >Sign In</Offcanvas.Title>
       
               </Offcanvas.Header>
               <Offcanvas.Body >
                             {/* sigin content starts here */}
                              <div ><LogIn /></div> 
                  </Offcanvas.Body>
                 </Offcanvas>
           </div> 
       </div>
    </>
  );
}

export default SignIn;


                  //  code reference

                  // <div>
                  // <div>
                  //     <Button className="signInButton px-2 pt-2" onClick={handleShowLogInForm}>
                  //       Sign-In
                  //     </Button>
                  // </div>
                   
                  // <Offcanvas show={show} onHide={handleCloseLogInForm} scroll={true} backdrop={true}>
                  //   <Offcanvas.Header closeButton>
            
                  //     <Offcanvas.Title>Sign In</Offcanvas.Title>
                      
                  //   </Offcanvas.Header>
                  //   <Offcanvas.Body>
                  //                 {/* sigin content starts here */}
                  //                  <div><LogIn /></div> 
                  //      </Offcanvas.Body>
                  //     </Offcanvas>
                  //  </div>
