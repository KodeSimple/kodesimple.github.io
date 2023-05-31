import React from 'react'
import Footer from '../../components/footer/Footer'
import NavBarComp from '../../components/header/NavBarComp'

function NoPage() {
  return (
    <>   
              {/* header section  starts here */}
                     <NavBarComp />
               {/* header section ends here */}
       <main>       
            <div class="d-flex justify-content-center align-self-center pt-5 container-fluid">
                 <div class="pt-5 w-50 bg-body text-center">
                   <h1>Error 404: Page not found</h1>
                   {/* no page content starts here */}
      
                  </div>
             </div>
      </main>  
            <div>       
       </div>
     
             {/* footer section starts here */}
                    <Footer />
             {/* footer section ends here */}
    </>   
  )

    
}

export default NoPage
