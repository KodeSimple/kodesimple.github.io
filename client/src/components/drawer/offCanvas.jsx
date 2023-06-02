// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import '../sign-in/SignIn.css';
// import LogIn from '../../pages/Login/LogIn'
// import showRegistrationForm from '../registration-form/RegistrationForm';
// import showSignInForm from '../sign-in/SigIn'

// function OffCanvas() {

//   return (
//          <>
           
//            <div className="w-100">
//                    <div className="d-flex justify-content-end w-75 d-block container-fluid flex-row"> 
//                           <div className="px-3" ><SignIn /></div>
//                           <div className="px-3"><RegistrationForm /></div> 
//                    </div>      
//             </div>
//             <div>
//                 <Offcanvas show={show} onHide={handleCloseLogInForm} scroll={true} backdrop={true}>
//                   <Offcanvas.Header closeButton>
//                     <Offcanvas.Title>Sign In</Offcanvas.Title>
//                     </Offcanvas.Header>
//                          <Offcanvas.Body>
//                                     {/* sigin content starts here */}
//                                      <div><LogIn /></div> 
    
//                                     {/* registration form starts here */}
//                                      <div> <Registration /></div>                
//                          </Offcanvas.Body>
//                 </Offcanvas>
//            </div>
//          </>
//   );
// }

// export default OffCanvas;