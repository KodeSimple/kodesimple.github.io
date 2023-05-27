import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Footer from './components/Footer';
// import NavBarComp from './components/NavBarComp';

// const navbarMain = ReactDOM.createRoot(document.getElementById('navbarMain'));
// navbarMain.render(
//   <>
//   <React.StrictMode>
//     <NavBarComp />
//   </React.StrictMode>
//   </>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>
);

// const footerMain = ReactDOM.createRoot(document.getElementById('footerMain'));
// footerMain.render(
//   <>
//   <React.StrictMode>
//     <Footer />
//   </React.StrictMode>
//   </>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
