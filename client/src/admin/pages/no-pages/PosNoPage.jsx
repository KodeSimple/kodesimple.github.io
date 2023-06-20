import React from 'react'
import PosNavBarComp from '../../component/header/PosNavBarComp';
import PosFooter from '../../component/footer/PosFooter'

function NoPage() {

           
  return (
    <>   
              {/* header section  starts here */}
                     <PosNavBarComp />
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
                    <PosFooter />
             {/* footer section ends here */}
    </>   
  )

    
}

export default NoPage
