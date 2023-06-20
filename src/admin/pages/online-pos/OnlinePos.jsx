import PosNavBarComp from '../../component/header/PosNavBarComp';
import PosFooter from '../../component/footer/PosFooter';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedInUser } from '../../component/userReducer';
import PosForm from '../../component/posForm/posForm';
import '../online-pos/OnlinePos.css';
import BusinessName from '../../component/businessName/BusinessName';

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
        
        <main className="posMain">
         
               
          <div className="p-0 d-flex justify-content-start flex-column">
                <div className="d-flex flex-row justify-content-center flex-wrap flex-column-reverse w-100 ">
                    <div className="pt-4 px-4 d-flex flex-column justify-content-start align-content-center ">
                         <div className="px-1">
                             <BusinessName />
                         </div>  
                         <div className="px-5 d-flex align-content-center">
                             <h3 className="text-start px-1"><span className="tagName">User Name: </span>{loggedInUser}</h3>
                         </div>
                    </div>
                    <div className="w-100 container-fluid text-center pt-2">
                         <h1>Online POS</h1>
                    </div>
               </div>
            <div className="p-3 d-flex justify-content-center align-content-center">
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
