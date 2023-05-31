import React from 'react'
import PosNavBarComp from '../../component/header/PosNavBarComp';
import PosFooter from '../../component/footer/PosFooter'

function PosSales() {
  return (
        <>
           <div>
               <div><PosNavBarComp /></div> 
                    <main>
                        <h1>sales Summary</h1>
                    </main>
               <div><PosFooter /></div>
           </div>
         </>
  )
}

export default PosSales;
