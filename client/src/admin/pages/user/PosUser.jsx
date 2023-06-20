import React, { useEffect } from 'react';
import PosNavBarComp from '../../component/header/PosNavBarComp';
import PosFooter from '../../component/footer/PosFooter'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedInUser } from '../../component/userReducer';

function PosUser() {   
            //////////////////////redux/reducer log in and time durtion code starts here///////////////////////// 
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
          //////////////////////redux/reducer log in and time durtion code ends here///////////////////////// 

  return (
       <>
          <div>
              <div><PosNavBarComp /></div> 
                   <main>
                        {/* main body header starts here */}
                        <div className="p-0 d-flex justify-content-center flex-column">
                          <h1 className="text-center my-4">User's Registration list</h1>
                            <div className="p-0 d-flex justify-content-center align-content-center">
                              <h2>Logged in as user:</h2>
                            </div>
                            <div className="p-0 d-flex justify-content-center align-content-center">
                              <h3>{loggedInUser}</h3>
                            </div>
                          </div>
                       {/* User table list starts here */}
                       <section className="pt-5">
                            <div className="table-container container-fluid d-flex justify-content-center w-100">
                              <div className="p-1 w-75 pt-5">
                                <thead>
                                  <table id="usersRegistrationList" className="display table table-striped table-hover w-100">
                                     <tr> 
                                       <th>Busines Name</th>
                                       <th>First Name</th>
                                       <th>Last Name</th>
                                       <th>User Name</th>
                                       <th>Email Address</th>
                                       <th>Password</th>
                                    </tr>
                                    <tbody>
                                  </tbody>
                                  </table>
                                </thead>
                              </div>
                            </div>
                       </section>

                        {/* user table list ends here */}
                   </main>
              <div><PosFooter /></div>
          </div>
      </>
  )
}

export default PosUser;
