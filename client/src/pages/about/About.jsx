import React from 'react'
import JoelProfile from '../../components/resources/picture.jpg'
import JinkyProfile from '../../components/resources/picture.jpg'
import RenzProfile from '../../components/resources/picture.jpg'

function About() {
  return (
    <>
      <div>
                           {/* insert code starts here */}
                          {/* <!--  flex container main --> */}
                    <div class="d-flex flex-row justify-content-center align-self-center bg-body-emphasis pt-5 flex-nowrap container-fluid">
                        <div class="pt-5 w-50 bg-body">
                                 <h1>About</h1>
                                 <hr class="hrLines" />
                        </div>
                    </div>
                             {/* about content starts here  */}
                      <div className="d-flex d-block f justify-content-center
                                               p-2 flex-row container-fluid about-responses w-50">
                        {/* <!--  flex item 1 starts here--> */}
                        <div className="w-100 bg-body flex-nowrap">     {/* <!--container item set 1 --> */}   
                          <div class="d-flex flex-column container-fluid bg-black ">
                            <div className="p-2 w-100">
                              <p>
                              <img src={JoelProfile} alt="Joel Profile" className="index-brochure w-100" fluid />
                              </p>
                            </div>
                            <div className="p-2  w-100 container-fluid">
                              <p>
                                joel's github account here
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* <!--  flex item 1 ends here--> */}
                        {/* <!--  flex item 2 stars here--> */}
                        <div className="w-100 bg-body-secondary flex-nowrap"> {/* <!--container item set 2 --> */}   
                          <div className="d-flex flex-column container-fluid bg-success">
                            <div className="p-2  w-100">
                              <p>
                              <img src={JinkyProfile} alt="Jinky Profile" className="index-brochure w-100" fluid />
                              </p>
                            </div>
                            <div className="p-2  w-100 container-fluid">
                              <p>
                                Jinky's github account here
                              </p>
                            </div>
                          </div>
                        </div> 
                        {/* <!--  flex item 2 ends here--> */}
                        {/* <!--  flex item 3 starts here--> */}
                        <div className="w-100 bg-body flex-nowrap">     {/* <!--container item set 1 --> */}   
                          <div className="d-flex flex-column container-fluid bg-black ">
                            <div className="p-2 w-100">
                              <p>
                              <img src={RenzProfile} alt="Joel Profile" className="index-brochure w-100" fluid />
                              </p>
                            </div>
                            <div className="p-2  w-100 container-fluid">
                              <p>
                                Renz github account here
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* <!--  flex item 3 ends here--> */}
                      </div>   
            {/* inserterted code ends here */}
      </div>
    </>
    
  )
}

export default About;

    //   modal code insert here
// import React, { useState } from 'react';
// // import Button from 'react-bootstrap/Button';    
// import { Button, Modal } from 'react-bootstrap';

// function About() {
//   const [showModal, setShowModal] = useState(false);

//   const handleButtonClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <Button variant="primary" onClick={handleButtonClick}>Learn more</Button>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>About</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {/* Add the content for the about page here */}
//           <p>This is the about page.</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default About;

