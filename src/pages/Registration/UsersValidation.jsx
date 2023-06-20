import React, { useState, useEffect } from 'react';
import apiService from '../../api-service/apiService';
import './UsersValidation.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '../../admin/component/userReducer';
import { Spinner } from 'react-bootstrap';

function UsersValidation() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const errorMessages = {
    user: 'Username or password is not valid',
    password: 'Username or password is not valid',
  };

  const [isSubmitted, setSubmit] = useState(false);
  const [errors, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const { userName, password } = event.target.elements;
    setLoading(true);
    setError({}); ////// Clear existing errors

    apiService
      .post('/users/login', { userName: userName.value, password: password.value })
      .then(res => {
        const response = res.data.message;
        const resUser = res.data.userName;
        if (response === 'Login successful') {
          dispatch(setLoggedInUser(resUser));
          setSubmit(true);
          const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
          localStorage.setItem('loggedInUser', resUser);
          localStorage.setItem('loggedInUserExpiration', expirationTime);
          navigate('/online-pos'); ////// Navigate to next page
        } else {
          setError({
            user: errorMessages.user,
            password: errorMessages.password,
          });
        }
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setError(prevErrors => ({ ...prevErrors, [name]: '' }));
    console.log(value);
  };
   
  const errorHandler = name => {
    return errors[name] && <div className="error">{errors[name]}</div>;
  };

  useEffect(() => {
    if (isSubmitted) {
      navigate('/online-pos'); //// Navigate to next page
    }
  }, [isSubmitted, navigate]);

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username</label>
            <input type="text" name="userName" required onChange={handleChange} />
            {/* {errorHandler('user')} */}
          </div>
          <div className="input-container">
            <label>Password</label>
            <input type="password" name="password" required onChange={handleChange} />
            {errorHandler('password')}
          </div>

          {isLoading ? (
            <div className="spinner-container">
              <div className="spinner">
                <Spinner animation="border" role="status">
                  <span className="sr-only center">Loading...</span>
                </Spinner>
              </div>
            </div>
          ) : (
            <div className="button-container">
              <button className="login-btn" type="submit">
                Login
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default UsersValidation;








// import React, { useState } from 'react';
// import apiService from '../../api-service/apiService';
// import './UsersValidation.css';
// import { useNavigate } from "react-router-dom";
// import LogIn from '../Login/LogIn';
// import { useDispatch } from 'react-redux';
// import { setLoggedInUser } from '../../admin/component/userReducer';
// import { Spinner } from 'react-bootstrap';
// import '../Registration/UsersValidation.css';

// function UsersValidation() {
//   const dispatch = useDispatch();
//   const [isLoading, setLoading] = useState(false);
//   const errorMessages = {
//     user: 'Username or password is not valid',
//     password: 'Username or password is not valid',
//   };
  
//   const [isSubmitted, setSubmit] = useState(false);
//   const [errors, setError] = useState({});
//   const [loggedInUser, setUser] = useState('');
//   // const setShowRegistration = useState(false);
//   const navigate = useNavigate();

//  // ...

// const handleSubmit = event => {
//   setLoading(true); // Set loading state to true
//   event.preventDefault();
//   const { userName, password } = event.target.elements;
//   console.log({ userName, password });
//   // Send a POST request to the server
//      apiService
//     .post('/users/login', { userName: userName.value, password: password.value })
//     .then(res => {
//       console.log(res);
//       const response = res.data.message; // Get the response from the server
//       const resUser = res.data.userName; // Get the response from the server
//       console.log(response);
//       console.log(res);
//       if (response === 'Login successful') {
//         //  alert('validation ok')
//         dispatch(setLoggedInUser(resUser));
//         setSubmit(true);
//         const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000; // Set expiration time to 24 hours from now
//         localStorage.setItem('loggedInUser', resUser);
//         localStorage.setItem('loggedInUserExpiration', expirationTime);

//         dispatch(setLoggedInUser(resUser));
//         setSubmit(true);
//         setUser(resUser);
//           }else{      
//             setError({ name: 'user', message: errorMessages.user });
//             setError({ name: 'password', message: errorMessages.password });
//             setLoading(false); // Stop the spinner
//                } return false;
//             })
//             .catch(error => {
//               alert(error);
//             });
//           };

//         const errorHandler = name => {
//              return name === errors.name && <div className="error">{errors.message}</div>;
//           };

//     setTimeout(() => {  /// delay 10 secs wait for progress
//        // Redirect to dashboard when condition validated and true
//      isSubmitted ?  navigate("/online-pos") : <LogIn />;
//      console.log(loggedInUser);
//     }, 2000);
       
//   return (
            
//     <>   
//         <div className="form">
//           <form onSubmit={handleSubmit}>
//             <div className="input-container">
//               <label>Username</label>
//               <input type="text" name="userName" required />
//               {errorHandler('user')}
//             </div>
//             <div className="input-container">
//               <label>Password</label>
//               <input type="user" name="password" required />
//               {errorHandler('password')}
//             </div>
//                {/* waiting for progress */}

//             {isLoading ? (
//               <div className="spinner-container">
//               <div className="spinner">
//                 <Spinner animation="border" role="status">
//                   <span className="sr-only center">Loading...</span>
//                </Spinner>
//               </div>
//             </div>
          
//              ) : (
//             <div className="button-container">
//               <button className="login-btn" type="submit">
//                 Login
//               </button>
//             </div>
//              )} {/*spinner closing tag */}
//           </form>
//         </div>
//     </>
//   );
// }

// export default UsersValidation;
