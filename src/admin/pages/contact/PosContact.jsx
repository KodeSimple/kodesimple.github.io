import React, { useEffect } from 'react';
import PosNavBarComp from '../../component/header/PosNavBarComp';
import PosFooter from '../../component/footer/PosFooter'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedInUser } from '../../component/userReducer';
<<<<<<< HEAD

function PosContact() {
                  // 24 hour login duration code
                  const loggedInUser = useSelector(state => state.loggedInUser);
                  const dispatch = useDispatch();
                  const navigate = useNavigate();
=======
import '../contact/PosContact.css';
import ContactForm from '../../component/contactForm/contactForm'

function PosContact() {
                  ///// 24 hour login duration code
                  const loggedInUser = useSelector(state => state.loggedInUser);
                  const dispatch = useDispatch();
                  const navigate = useNavigate();
                  console.log(loggedInUser);
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
              //////////////////////redux log in time durtion code starts here/////////////////////////  
                  useEffect(() => {
                    const storedUser = localStorage.getItem('loggedInUser');
                    const expirationTime = localStorage.getItem('loggedInUserExpiration');
                
                    if (storedUser && expirationTime && Date.now() < parseInt(expirationTime, 10)) {
                      dispatch(setLoggedInUser(storedUser));
                    } else {
                      localStorage.removeItem('loggedInUser');
                      localStorage.removeItem('loggedInUserExpiration');
                      navigate('/home');
                    }
                  }, [dispatch, navigate]);
               //////////////////////redux log in time durtion code ends here///////////////////////// 

<<<<<<< HEAD
=======
          
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
              
  return (
    <>
         <div>
             <div><PosNavBarComp /></div> 
<<<<<<< HEAD
                  <main>
                      <div className="text-center">
                           <h1>Contact here</h1>
                           <h2>{loggedInUser}</h2>
                       </div>
=======
                  <main className="posConatactMain">
                           <div className="w-100 d-flex justify-content-center pt-5">
                            <div className="w-50 d-flex justify-content-center pos-contact-container">    
                                <div className="w-75 pt-4 pb-5">
                                      <ContactForm />
                               </div>
                            </div>
                        </div>
                      
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
                  </main>
             <div><PosFooter /></div>
         </div>
   </>
  )
}

export default PosContact;
