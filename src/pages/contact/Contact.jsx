import React from 'react';
import NavBarComp from '../../components/header/NavBarComp';
import Footer from '../../components/footer/Footer';

function Contact() {
  return(
     <> 
         {/* header section  starts here */}
                  <NavBarComp />
         {/* header section ends here */}
     <main>   
         <secction class="contact">
              <div class="d-flex flex-row justify-content-center align-self-center bg-gradient pt-5 flex-nowrap container-fluid">
                <div class="pt-5 w-50 bg-body">
                     <h1>Contact information here</h1>
                      <hr class="hrLines" />
          {/* content starts here */}

           {/* contents ends here */}
                </div>
              </div>
        </secction>
     </main>
          {/* footer section starts here */}
                          <Footer />
          {/* footer section ends here */}
     </>
  )
}

export default Contact