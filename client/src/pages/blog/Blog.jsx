import React from 'react';
import NavBarComp from '../../components/header/NavBarComp';
import Footer from '../../components/footer/Footer';


function Blog() {
  return(
     <>
       
          {/* header section  starts here */}
               <NavBarComp />
          {/* header section ends here */}
      <main>
         <div>
              <secction class="blog">
                    <div class="d-flex flex-row justify-content-center align-self-center bg-body-emphasis pt-5 flex-nowrap container-fluid">
                        <div class="pt-5 w-50 bg-body">
                         <h1>Blog</h1>
                         <hr class="hrLines" />
                            {/* blogs contents start here */}

                              {/* blogs contents ends here */}
                        </div>
                    </div>
             </secction>
          </div>
     </main>
          {/* footer section starts here */}
                <Footer />
          {/* footer section ends here */}

     </>
   )
}

export default Blog;