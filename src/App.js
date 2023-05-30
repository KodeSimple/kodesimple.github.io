import './App.css';
import * as React from "react";
import NavBarComp from './components/header/NavBarComp';
import Footer from './components/footer/Footer';
import AppRoutes from './components/routes/routes';


    function App() {
      return(
            <>
               <div>  
                  <div><NavBarComp /></div> 
                   <main>
                      <div><AppRoutes /></div> 
                   </main>
                   <div><Footer /></div>
               </div>
           </>
         )
      }

export default App;