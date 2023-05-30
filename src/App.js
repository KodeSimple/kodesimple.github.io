import './App.css';
import * as React from "react";
import NavBarComp from './components/NavBarComp';
import Footer from './components/Footer';
import AppRoutes from './components/routes';
import RegistrationForm from './components/RegistrationForm';
import SignIn from './components/SigIn';


    function App() {
      return(
            <>
               <div>  
                  <div><NavBarComp /></div> 
                   <main>
                     <div className="d-flex justify-content-end d-block container-fluid flex-row w-75">
                        <div className="px-3" ><SignIn /></div>
                        <div className="px-3"><RegistrationForm /></div> 
                     </div>
                      <div><AppRoutes /></div> 
                   </main>
                   <div><Footer /></div>
               </div>
           </>
         )
      }

export default App;