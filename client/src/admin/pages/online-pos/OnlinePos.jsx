import React from 'react'
import PosNavBarComp from '../../component/header/PosNavBarComp';
import PosFooter from '../../component/footer/PosFooter'


function OnlinePos() {
  return (

       <>
          <div>
              <div><PosNavBarComp /></div> 
                   <main>
                       <h1>Online POS here</h1>
                   </main>
              <div><PosFooter /></div>
          </div>
      </>
  )
}

export default OnlinePos;
