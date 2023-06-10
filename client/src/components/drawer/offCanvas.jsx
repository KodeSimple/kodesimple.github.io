import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../components/drawer/offCanvas.css';
import LogIn from '../../pages/Login/LogIn';
import Registration from '../../pages/Registration/Registration';


function AuthenticationButton() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => {
    setShowSignIn(true);
    setShowRegistration(false);
  };

  const handleCloseRegistration = () => setShowRegistration(false);
  const handleShowRegistration = () => {
    setShowRegistration(true);
    setShowSignIn(false);
  };

  return (
    <>
      <div className="d-flex flex-row">
        <div className='px-2'>
          <Button className="offCanvasButton px-2 pt-2" onClick={handleShowSignIn}>
            Sign-In
          </Button>
        </div>
        <div className='px-2'>
          <Button className="offCanvasButton px-2 pt-2" onClick={handleShowRegistration}>
            Register
          </Button>
        </div>
      </div>

      <Offcanvas show={showSignIn} onHide={handleCloseSignIn} scroll={true} backdrop={true}>
        <Offcanvas.Header closeButton className="offCanvasHeader">
          <Offcanvas.Title>Sign In</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offCanvasBody">
          <div>
            <LogIn />
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={showRegistration} onHide={handleCloseRegistration} scroll={true} backdrop={true}>
        <Offcanvas.Header closeButton className="offCanvasHeader">
          <Offcanvas.Title>Registration Form</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offCanvasBody">
          <div>
            <Registration handleShowSignIn={handleShowSignIn} />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AuthenticationButton;



// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import '../../components/drawer/offCanvas.css';
// import LogIn from '../../pages/Login/LogIn';
// import Registration from '../../pages/Registration/Registration';

// function AuthenticationButton() {
//   const [showSignIn, setShowSignIn] = useState(false);
//   const [showRegistration, setShowRegistration] = useState(false);

//   const handleCloseSignIn = () => setShowSignIn(false);
//   const handleShowSignIn = () => {
//     setShowSignIn(true);
//     setShowRegistration(false);
//   };

//   const handleCloseRegistration = () => setShowRegistration(false);
//   const handleShowRegistration = () => {
//     setShowRegistration(true);
//     setShowSignIn(false);
//   };

//   return (
//     <>
//       <div className="d-flex flex-row">
//         <div className='px-2'>
//           <Button className="offCanvasButton px-2 pt-2" onClick={handleShowSignIn}>
//             Sign-In
//           </Button>
//         </div>

//         <div className='px-2'>
//           <Button className="offCanvasButton px-2 pt-2" onClick={handleShowRegistration}>
//             Register
//           </Button>
//         </div>
//       </div>

//       <Offcanvas show={showSignIn} onHide={handleCloseSignIn} scroll={true} backdrop={true}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Sign In</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <div>
//             <LogIn />
//           </div>
//         </Offcanvas.Body>
//       </Offcanvas>

//       <Offcanvas show={showRegistration} onHide={handleCloseRegistration} scroll={true} backdrop={true}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Registration Form</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <div>
//             <Registration />
//           </div>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// export default AuthenticationButton;




