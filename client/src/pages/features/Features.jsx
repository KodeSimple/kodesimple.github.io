import React from 'react'
import scanningPackage from '../../components/resources/scanning-package.jpg';
import scanningBox from '../../components/resources/close-up-scanning-box.jpg';
import growthArrow from '../../components/resources/hand-holding-growth-arrow-with-coins.jpg';
import responsive from '../../components/resources/responsive.png'
import Footer from '../../components/footer/Footer';
import NavBarComp from '../../components/header/NavBarComp';

function Features() {
  return (
  <>  

    <main>
          {/* header section  starts here */}
               <NavBarComp />
          {/* header section ends here */}
         <div>
           {/* features content starts here */}
           <section className="features bg-success-subtle">  {/* <!-- starts of features section here*/}
                                   <div class="d-flex flex-row justify-content-center pt-5 flex-nowrap container-fluid">
                                          <div class=" w-75">
                                           <h2 class="text-center pt-5">Features</h2>
                                           <hr class="bs-secondary-color border-2 opacity-50" />
                                          </div>
                                   </div>     
                                   
                                      {/* flex container set-1 starts here  */}
                                            <div className="d-flex d-block flex-row container-fluid justify-content-center
                                                      features-responses w-75 pt-0">   
                                                      
                                                <div className="p-2 w-100 align-self-center">  {/* <!--  flex container main*/}                         
                                                    <h4>Selling is easy using your mobile as portable POS</h4>
                                                    <p class="text-start pt-3 container-fluid text-decoration-none">
                                                     <div className="">
                                                       <ul >    
                                                             <li>
                                                               <p>
                                                                 Paperless receipt.
                                                              </p> 
                                                            </li>  
                                                             <li>
                                                               <p>
                                                                 No installation and license required.
                                                              </p> 
                                                            </li>   
                                                            <li>
                                                             <p>
                                                               Easy to manage multiple shop's on a different location.
                                                            </p> 
                                                          </li>                          
                                                       </ul>
                                                     </div>
                                                    </p>
                                                </div>
                                                <div className="p-2  w-100">
                                                      <p>
                                                      <img src={scanningPackage} alt="scanning-package" className="index-brochure w-100" fluid />
                                                       <a href="https://www.freepik.com/free-photo/online-store-employee-scanning-information-product-package_31298535.htm#query=barcode&position=4&from_view=search&track=robertav1_2_sidr">Image by zinkevych</a> on Freepik
                                                     </p>
                                               </div>
                                          </div>
                                   
                                           {/* flex container set-1 ends here */}
                                            {/* <!--  flex container set-2 starts here-->           */}
                                              <div className="d-flex flex-row container-fluid justify-content-center
                                                    flex d-block flex-row w-75 features-responses">  {/* <!--  flex container main */}
                                                  <div class="p-2 w-100 align-self-center">
                                                      <h4>Inventory management</h4>
                                                      <p className="text-start pt-3 container-fluid">
                                                         <ul>
                                                              <li>
                                                                   <p>
                                                                     Quick and easy adding items to the inventory list. 
                                                                  </p> 
                                                              </li>
                                                              <li>
                                                                   <p>
                                                                     View and can retrieves inventories history. 
                                                                  </p> 
                                                             </li>
                                                             <li>
                                                                   <p>
                                                                     Show current stock status. 
                                                                  </p> 
                                                            </li>
                                                         </ul>
                                                     </p>
                                                  </div>
                                                  <div className="p-2  w-100">
                                                        <p>
                                                        <img src={scanningBox} alt="scanning-box" className="index-brochure w-100" fluid />
                                                         Image by <a href="https://www.freepik.com/free-photo/close-up-scanning-box_13450095.htm#query=barcode&position=3&from_view=search&track=robertav1_2_sidr">Freepik</a>
                                                       </p>
                                                 </div>
                                            </div>
                                  {/* <!--  flex container set-2 ends here-->  */}
                                          {/* <!--  flex container set-3 starts here--> */}
                                      <div className="d-flex d-block flex-row container-fluid justify-content-center
                                                        features-responses w-75 flex-nowrap ">
                                             <div className="p-2 w-100 align-self-center">  {/* <!--  flex container main --> */}         
                                               <h4>Sales Summary</h4>
                                                 <p className="text-start pt-3 container-fluid">
                                                 <ul>
                                                   <li>
                                                     <p>
                                                       Access records of all selling history.
                                                     </p>
                                                   </li>
                                                   <li>
                                                     <p>
                                                       Compute's the profit base on the declared selling price.
                                                     </p>
                                                   </li>
                                                   <li>
                                                     <p>
                                                       Project income ahead of time.
                                                     </p>
                                                   </li>
                                                 </ul>
                                                 </p>
                                             </div>
                                             <div className="p-2  w-100">
                                               <p>
                                                 <img src={growthArrow} alt="growth arrow" className="index-brochure w-100" fluid />
                                                 Image by <a
                                                   href="https://www.freepik.com/free-photo/hand-holding-growth-arrow-with-coins_11383316.htm#query=profit&position=0&from_view=search&track=sph">Freepik</a>
                                               </p>
                                             </div>
                                           </div>
                                           {/* <!--  flex container set-3 ends here--> */}
                                           {/* <!--  flex container set-4 starts here--> */}
                                           <div className="d-flex d-block flex-row container-fluid justify-content-center
                                                                     features-responses w-75 flex-nowrap">
                                             <div className="p-2 w-100 align-self-center"> {/* <!--  flex container main --> */}
                                               <h4>System's compatibility</h4>
                                               <p className="text-start pt-3 container-fluid">
                                               <ul>
                                                 <li>
                                                   <p>Compatible with bluetooth wireless barcode scanner.</p>
                                                 </li>
                                                 <li>
                                                   <p>Compatible with mobile wireless printer.</p>
                                                 </li>
                                                 <li>
                                                   <p>Mobile responsive system.</p>
                                                 </li>
                                               </ul>
                                               </p>
                                             </div>
                                             <div className="p-2  w-100">
                                               <p>
                                               <img src={responsive} alt="responsive" className="index-brochure w-100" fluid />
                                               <div className="text-center">
                                                 <a
                                                   href="https://www.freepik.com/free-vector/technology-devices-illustration_7057091.htm#query=mobile%20responsive&position=29&from_view=search&track=ais">Image
                                                   by studiogstock</a> on Freepik
                                               </div>
                                               </p>
                                             </div>
                                   </div>  {/* <!--  flex container set-4 ends here--> */}     
                      </section>

            {/* features content ends here */}
         </div>
            {/* footer section starts here */}
                     <Footer />
            {/* footer section ends here */}
    </main>         
  </>
    
  )
}

export default Features
