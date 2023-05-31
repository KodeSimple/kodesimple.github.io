import './App.css';
import * as React from "react";
// import NavBarComp from './components/header/NavBarComp';
// import Footer from './components/footer/Footer';
import AppRoutes from './components/routes/routes';
// import PosNavBarComp from './admin/component/header/PosNavBarComp';
// import PosFooter from './admin/component/footer/PosFooter' 

    function App() {
      return(
            <>
               <div>  
                  {/* <div><PosNavBarComp /></div>  */}
                   {/* <div><NavBarComp /></div>  */}
                   <main>
                      <div><AppRoutes /></div> 
                   </main>
                   {/* <div><Footer /></div> */}
                   {/* <div><PosFooter /></div> */}
               </div>
           </>
         )
      }

export default App;