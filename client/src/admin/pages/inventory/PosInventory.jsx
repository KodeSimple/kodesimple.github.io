import React, { useEffect } from 'react';
import '../inventory/PosInventory.css'
import PosNavBarComp from '../../component/header/PosNavBarComp';
import PosFooter from '../../component/footer/PosFooter'
import InventoryTable from '../../component/inventoryTable/inventoryTable';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedInUser } from '../../component/userReducer';
import AddItemModal from '../../component/addItemModal/addItemModal';

function PosInventory() {
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
                         
                            {/* table contents starts here */}
                        <section>   
                                             {/* <!-----------input field end-------------> */}
                                    <div className="d-flex d-block flex-wrap footerNavMobileRes container-fluid justify-content-start w-75">
                                      <div className="mb-2 w-25 align-content-center">
                                            <AddItemModal />
                                        {/* <button type="submit" onClick="" id="addInventory">Add item</button> */}
                                      </div>
                                          
                                    </div>
                                    {/* <!--------------inventory input table ends here-----------------------> */}
                                    <h1 className="text-center my-4">Inventory history</h1>
                                    <div className="table-container flex-col container-fluid d-flex justify-content-center w-100">
                                         <div> <InventoryTable /> </div>
                                    </div>
                      </section>
                             {/* table contents ends here */}
                  </main>
             <div><PosFooter /></div>
         </div>
      </>
  )
}

export default PosInventory;
