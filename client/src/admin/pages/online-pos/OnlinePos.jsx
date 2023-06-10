            import PosNavBarComp from '../../component/header/PosNavBarComp';
            import PosFooter from '../../component/footer/PosFooter';
            import React, { useEffect } from 'react';
            import { useSelector, useDispatch } from 'react-redux';
            import { useNavigate } from 'react-router-dom';
            import { setLoggedInUser } from '../../component/userReducer';
            import PosForm from '../../component/posForm/posForm';
           
           function OnlinePos() {
             const loggedInUser = useSelector(state => state.loggedInUser);
             const dispatch = useDispatch();
             const navigate = useNavigate();
           
           
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
                   <div>
                     <PosNavBarComp />
                   </div>
                   <main>
                        <div className="text-end w-100 pt-3">
                             <div className="w-100">
                                 {/* <LogoutButton />    */}
                          </div>              
                         </div>  
                         <div className="p-0 d-flex justify-content-center flex-column">
                            <div className="p-0 d-flex justify-content-center align-content-center">
                                 <h1>Welcome to Online POS</h1>
                            </div>
                             <div className="p-0 d-flex justify-content-center align-content-center">
                                 <h2>Logged in as user:</h2>
                                 <h3>{loggedInUser}</h3>
                            </div>
                            <div className="p-0 d-flex justify-content-center align-content-center">
                                
                                <PosForm />
                            </div>
                        </div>
                   </main>
                   <div>
                     <PosFooter />
                   </div>
                 </div>
               </>
             );
           }
           
           export default OnlinePos;