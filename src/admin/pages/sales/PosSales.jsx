import React, { useEffect } from 'react';
import PosNavBarComp from '../../component/header/PosNavBarComp';
<<<<<<< HEAD
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
=======
import PosFooter from '../../component/footer/PosFooter';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedInUser } from '../../component/userReducer';
import SalesListTable from '../../component/salesListTable/salesListTable';
import '../sales/PosSales.css';

function PosSales() {
  const loggedInUser = useSelector((state) => state.loggedInUser);
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
        <div>
          <PosNavBarComp />
        </div>
        <main className="posSalesMain">
            <div className="p-3 d-flex justify-content-center align-content-center">
              <h1>Sales History</h1>
            </div>
            <div>
              <SalesListTable />
            </div>
        </main>
        <div>
          <PosFooter />
        </div>
      </div>
    </>
  );
}

export default PosSales;

>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
