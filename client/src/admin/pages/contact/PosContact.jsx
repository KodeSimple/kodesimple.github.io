import React, { useEffect } from 'react';
import PosNavBarComp from '../../component/header/PosNavBarComp';
import PosFooter from '../../component/footer/PosFooter'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedInUser } from '../../component/userReducer';

function PosContact() {
                  // 24 hour login duration code
                  const loggedInUser = useSelector(state => state.loggedInUser);
                  const dispatch = useDispatch();
                  const navigate = useNavigate();
                  console.log(loggedInUser);
                
                
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

              
  return (
    <>
         <div>
             <div><PosNavBarComp /></div> 
                  <main>
                      <h1>Contact here</h1>
                  </main>
             <div><PosFooter /></div>
         </div>
   </>
  )
}

export default PosContact;
