import React from 'react';
import '../home/Home.css';
import mainPageBanner from '../../components/resources/mp2banner.png'
import pricing from '../../components/resources/pricing.png'
import Accordion from 'react-bootstrap/Accordion';
// import RegistrationForm from '../../components/registration-form/RegistrationForm';
import SignInRegistrationButton from '../../components/drawer/offCanvas';
import About from '../about/About';
import Faq from '../faq/Faq';
import NavBarComp from '../../components/header/NavBarComp';
import Footer from '../../components/footer/Footer'
import scanningPackage from '../../components/resources/scanning-package.jpg';
import scanningBox from '../../components/resources/close-up-scanning-box.jpg';
import growthArrow from '../../components/resources/hand-holding-growth-arrow-with-coins.jpg';
import responsive from '../../components/resources/responsive.png';


function Home() {
 
          
  return (
    <> 
                                          <NavBarComp />
      <div className=''>

                          {/* registrtion form and sign in button starts here*/}
            <div className="w-100">
                   <div className="d-flex justify-content-end w-75 d-block container-fluid flex-row"> 
                          <div className="pt-2" ><SignInRegistrationButton /></div>
                          {/* <div className="px-3"><RegistrationForm /></div>  */}
                   </div>      
            </div>
                           {/* home page body content starts here */}
        <div className="HomePagebackGroundColor">         
            <img src={mainPageBanner} alt="POS brochure" className="index-brochure w-100" fluid />
              {/* POS banner ends herelogo */}

                         {/* Features section starts here */}
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

                            {/* features section ends here */}
                           {/* <!-- starts of pricing section --> */}        
                   <section id="pricing" className=" bg-info-subtle">
                          <img src={pricing} alt="POS brochure" className="index-brochure w-100" fluid />
                   </section>
             </div> {/* background end tag */}
                   {/* <!-- End of pricing section here --> */}
                                {/* <!-- About us section starts here --> */}
                    <section id="about" className="firstLandingPage pt-5 ">
                                <h1 className="text-center">About us</h1>
                                {/* short content introduction below here */}
                                <div className='text-center'>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae  nam omnis numquam magnam harum quos debitis, vitae itaque a!
                                  </p>
                                </div>
                                    {/* to view more link below here */}
                                    <div className="p-0 d-flex justify-content-center">
                                           <a className="hrefLink" href="/about" onClick={About}>Learn more</a>
                                    </div>
                              
                    </section>
                    {/* about section ends here */}
                   {/* end of about us section */}
                   {/* <!-- FAQ section starts here --> */}
                      <section id="faqhome" className="pt-5"> 
                        <div className="text-center pt-5">
                          <div className="p-2">
                           <h2>Frequently Asked Questions</h2>
                            <div className=" faq d-flex d-block w-100 justify-content-center 100"> {/* <!--- flex container main start tag----> */}  
                              <div className="p-0 w-75 faq-accordion">  {/* <!------firt item start tag------> */}
                                {/* <!---------accrodion starts here---------> */}
                                <Accordion>
                                        <Accordion.Item eventKey="0">
                                          <Accordion.Header> Is this system is free?</Accordion.Header>
                                          <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                          </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                          <Accordion.Header>How many users are the limit per email?</Accordion.Header>
                                          <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                          </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                          <Accordion.Header> Are invetory and sales data are availbale to download?</Accordion.Header>
                                          <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                          </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                          <Accordion.Header> Is there a user manual?</Accordion.Header>
                                          <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                          </Accordion.Body>
                                        </Accordion.Item>
                                      </Accordion>
                                {/* <!---------accordion ends here------------> */}
                              </div> {/* <!------firt item end tag------> */}
                            </div> {/* <!--- flex container main end tag---->*/}
                          </div>
                        </div>
                                        {/* faq learn more button starts here */}
                                        <div className="p-0 d-flex justify-content-center pb-5">
                                             <a className="hrefLink" href="/faq" onClick={Faq}>Learn more</a>
                                         </div>
                                        {/* faq learn more button ends here */}
                                    
                      </section>{/* <!-- FAQ section ends here --> */}                 
       </div>  {/* main div end tag */}
               {/* footer section starts here */}
                          <Footer />
                {/* footer section ends here */}
        
    </>
  );
}

export default Home;

