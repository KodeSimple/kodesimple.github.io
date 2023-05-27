// // import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './components/Footer';
// // import AppRoutes from './components/routes';
// import NavBarComp from './components/NavBarComp';

// function App() {
//   return (
//     <>   
//          <div className="NavBar">
//              <NavBarComp/>
//          </div>
//          <div className="Footer">
//              <Footer/>
//          </div>
//     </>
//   );
// }

// export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBarComp from './components/NavBarComp';
import Container from 'react-bootstrap'


function App() {
  return (
    <>
          <NavBarComp />
         <main>
            <Container>
               <h1>Body</h1>
            </Container>
        </main>
          <Footer />
   </>
  );
}

export default App;

