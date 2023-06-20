import React, { useEffect } from 'react';
import PosNavBarComp from '../../component/header/PosNavBarComp';
import PosFooter from '../../component/footer/PosFooter'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedInUser } from '../../component/userReducer';

function PosSales() {

               //////////////////////redux/reducer log in time durtion code starts here/////////////////////////  
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
              //////////////////////redux/reducer log in time durtion code ends here///////////////////////// 
  return (
        <>
           <div>
               <div><PosNavBarComp /></div> 
                    <main>
                         <div className="p-0 d-flex justify-content-center flex-column">
                            <div className="p-0 d-flex justify-content-center align-content-center">
                              <h1>Sales summary page</h1>
                            </div>
                            <div className="p-0 d-flex justify-content-center align-content-center">
                              <h2>Logged in as user:</h2>
                            </div>
                            <div className="p-0 d-flex justify-content-center align-content-center">
                              <h3>{loggedInUser}</h3>
                            </div>
                          </div>
                    </main>
               <div><PosFooter /></div>
           </div>
         </>
  )
}

export default PosSales;
