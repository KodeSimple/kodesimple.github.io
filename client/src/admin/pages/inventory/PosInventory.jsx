import React from 'react'
import '../inventory/PosInventory.css'
import PosNavBarComp from '../../component/header/PosNavBarComp';
import PosFooter from '../../component/footer/PosFooter'
import InventoryTable from '../../component/inventoryTable/inventoryTable';
// import ProductList from '../productList/ProductList';

function PosInventory() {
  return (
       <>
         <div>
             <div><PosNavBarComp /></div> 
                  <main>
                            {/* table contents starts here */}
                        <section>   
                                    {/* <!---------input field start---------------> */}
                                   {/* <form id="inventory-input-form" className="pt-5">  */}
                                    <div className="d-flex d-block pt-5 container-fluid  justify-content-center w-75 text-xl-start">
                                      <form id="inventory-input-form">
                                        <div className="d-flex flex-row flex-wrap footerNavMobileRes ">
                                          {/* <!-------------------input 1---------------------------> */}
                                          <div className="tableToHide">
                                            <label for="item-userName ">Username</label>
                                            <input type="text" id="item-userName" name="item-userName" />
                                          </div>
                                          {/* <!-------------------input 2---------------------------> */}
                                          <div className="tableToHide">
                                            <label for="item-date">Entry date</label>
                                            <input type="number" id="item-date" name="item-date" />
                                          </div>
                                          {/* <!-------------------input 3---------------------------> */}
                                          <div className="mb-0">
                                            <label for="item-serial"><span className="fontStyling">Serial No.</span>:</label>
                                            <input type="number" id="item-serial" name="item-serial" />
                                          </div>
                                          {/* <!-------------------input 4---------------------------> */}
                                          <div className="mb-0">
                                            <label for="item-category"><span className="fontStyling">Category</span></label>
                                            <input type="text" id="item-category" name="item-category " required />
                                          </div>
                                          {/* <!-------------------input 5---------------------------> */}
                                          <div className="mb-0">
                                            <label for="item-description"><span className="fontStyling">Description</span></label>
                                            <input type="text" id="item-description" name="item-description" required />
                                          
                                          </div>
                                          {/* <!-------------------input 6---------------------------> */}
                                          <div className="mb-0">
                                            <label for="item-quantity"><span className="fontStyling">Quantity</span></label>
                                            <input type="number" id="item-quantity" name="item-quantity" required />
                                           
                                          </div>
                                          {/* <!-------------------input 7---------------------------> */}
                                          <div className="mb-0">
                                            <label for="item-buyPrice"><span className="fontStyling">Buy Price</span></label>
                                            <input type="number" id="item-buyPrice" name="item-buyPrice" required />
                                            
                                          </div>
                                          {/* <!-------------------input 8---------------------------> */}
                                          <div className="mb-0">
                                            <label for="item-sellPrice"><span className="fontStyling">Sell Price</span></label>
                                            <input type="number" id="item-sellPrice" name="item-sellPrice" required /> 
                                           
                                          </div>
                                          {/* <!-------------------input 9--------------------------> */}
                                          <div className="tableToHide">
                                            <label for="item-profit">Profit</label>
                                            <input type="number" id="item-profit" name="item-profit" />
                                          </div>
                                          {/* <!--------------------End of input----------------------> */}
                                        </div>
                                    
                                      </form>
                                      {/* <!---------------------End of form-----------------------> */}
                                    </div> 
                                             {/* <!-----------input field end-------------> */}
                                    <div className="d-flex d-block flex-wrap footerNavMobileRes container-fluid justify-content-start w-75">
                                      <div className="mb-2 w-25 align-content-center">
                                        <button type="submit" id="addInventory">Add item</button>
                                      </div>
                                          
                                    </div>
                                    {/* <!--------------inventory input table ends here-----------------------> */}
                                    <h1 className="text-center my-4">Inventory Management here</h1>
                                    <div className="table-container flex-col container-fluid d-flex justify-content-center w-100">
                                         <div> <InventoryTable /> </div>
                                         {/* <div> <ProductList /> </div> */}
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
