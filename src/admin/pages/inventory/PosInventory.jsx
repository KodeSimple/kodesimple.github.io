import React, { useEffect, useState } from 'react';
import '../inventory/PosInventory.css';
import PosNavBarComp from '../../component/header/PosNavBarComp';
import PosFooter from '../../component/footer/PosFooter';
import InventoryTable from '../../component/inventoryTable/inventoryTable';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedInUser } from '../../component/userReducer';
import AddItemModal from '../../component/addItemModal/addItemModal';
import CurrentProductTable from '../../component/currentProductTable/currentProductTable';
import '../inventory/PosInventory.css';

function PosInventory() {
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showInventoryTable, setShowInventoryTable] = useState(true); ////// State to control which table to show
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

  const handleToggleTable = () => {
    setShowInventoryTable((prevValue) => !prevValue);
  };

  return (
    <>
      <div>
        <div>
          <PosNavBarComp />
        </div>
        <main className="posInventoryMain">
       
               <div className="d-flex d-inline-block justify-content-start pt-3 w-100 posInventoryButton">
                       <div className="mb-2">
                                <AddItemModal />
                       </div>
                      <div className="mb-2">
                             <div className="align-items-center container-fluid d-flex ">
                                <button className="showHideTableButton" onClick={handleToggleTable}>
                                      {showInventoryTable ? 'Show All History':'Show Current'}
                                </button>
                            </div>
                      </div>
               </div>

               <div className="table-container flex-col container-fluid d-flex justify-content-center w-100 pb-2">
                           {showInventoryTable && <CurrentProductTable />}
               </div>
                <div className="table-container flex-col container-fluid d-flex justify-content-center w-100 pb-2">
                            {!showInventoryTable && <InventoryTable />}
                </div>
        
        </main>
        <div>
          <PosFooter />
        </div>
      </div>
    </>
  );
}

export default PosInventory;



// import React, { useEffect } from 'react';
// import '../inventory/PosInventory.css';
// import PosNavBarComp from '../../component/header/PosNavBarComp';
// import PosFooter from '../../component/footer/PosFooter';
// import InventoryTable from '../../component/inventoryTable/inventoryTable';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setLoggedInUser } from '../../component/userReducer';
// import AddItemModal from '../../component/addItemModal/addItemModal';
// import CurrentProductTable from '../../component/currentProductTable/currentProductTable'



// function PosInventory() {
//   const loggedInUser = useSelector((state) => state.loggedInUser);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   console.log(loggedInUser);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('loggedInUser');
//     const expirationTime = localStorage.getItem('loggedInUserExpiration');

//     if (storedUser && expirationTime && Date.now() < parseInt(expirationTime, 10)) {
//       dispatch(setLoggedInUser(storedUser));
//     } else {
//       localStorage.removeItem('loggedInUser');
//       localStorage.removeItem('loggedInUserExpiration');
//       navigate('/home');
//     }
//   }, [dispatch, navigate]);

//   return (
//     <>
//       <div>
//         <div>
//           <PosNavBarComp />
//         </div>
//         <main>
//           {/* table contents starts here */}
//           <section>
//             {/* <!-----------input field end-------------> */}
//             <div className="d-flex d-block flex-wrap footerNavMobileRes container-fluid justify-content-start w-50">
//               <div className="mb-2 w-25 align-content-center">
//                 <AddItemModal />
//               </div>
//             </div>
//             <h1 className="text-center my-4">All Inventory History</h1>
//             <div className="table-container flex-col container-fluid d-flex justify-content-center w-100">
//               <div>
//                 <InventoryTable />
//               </div>
//             </div>
//             <h1 className="text-center my-4">Current Inventory</h1>
//             <div className="table-container flex-col container-fluid d-flex justify-content-center w-100">
//               <div>
//                 <CurrentProductTable />
//               </div>
//             </div>
                
//              </section>
//         </main>
//         <div>
//           <PosFooter />
//         </div>
//       </div>
//     </>
//   );
// }

// export default PosInventory;



// import React, { useEffect } from 'react';
// import '../inventory/PosInventory.css'
// import PosNavBarComp from '../../component/header/PosNavBarComp';
// import PosFooter from '../../component/footer/PosFooter'
// import InventoryTable from '../../component/inventoryTable/inventoryTable';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setLoggedInUser } from '../../component/userReducer';
// import AddItemModal from '../../component/addItemModal/addItemModal';

// function PosInventory() {
                        
//                   const loggedInUser = useSelector(state => state.loggedInUser);
//                   const dispatch = useDispatch();
//                   const navigate = useNavigate();
//                   console.log(loggedInUser);
//                   //////////////////////redux log in time durtion code starts here/////////////////////////  
//                   useEffect(() => {
//                     const storedUser = localStorage.getItem('loggedInUser');
//                     const expirationTime = localStorage.getItem('loggedInUserExpiration');
                
//                     if (storedUser && expirationTime && Date.now() < parseInt(expirationTime, 10)) {
//                       dispatch(setLoggedInUser(storedUser));
//                     } else {
//                       localStorage.removeItem('loggedInUser');
//                       localStorage.removeItem('loggedInUserExpiration');
//                       navigate('/home');
//                     }
//                   }, [dispatch, navigate]);
//                  //////////////////////redux log in time durtion code ends here///////////////////////// 
                     
//   return (
//        <>
//          <div>
//              <div><PosNavBarComp /></div> 
//                   <main>
                         
//                             {/* table contents starts here */}
//                         <section>   
//                                              {/* <!-----------input field end-------------> */}
//                                     <div className="d-flex d-block flex-wrap footerNavMobileRes container-fluid justify-content-start w-75">
//                                       <div className="mb-2 w-25 align-content-center">
//                                             <AddItemModal />
//                                         {/* <button type="submit" onClick="" id="addInventory">Add item</button> */}
//                                       </div>
                                          
//                                     </div>
//                                     {/* <!--------------inventory input table ends here-----------------------> */}
//                                     <h1 className="text-center my-4">Inventory history</h1>
//                                     <div className="table-container flex-col container-fluid d-flex justify-content-center w-100">
//                                          <div> <InventoryTable /> </div>
//                                     </div>
//                       </section>
//                              {/* table contents ends here */}
//                   </main>
//              <div><PosFooter /></div>
//          </div>
//       </>
//   )
// }

// export default PosInventory;


