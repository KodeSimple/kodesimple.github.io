import React, { useState } from 'react';
import apiService from '../../api-service/apiService';
import './SubmittingForm.css';
import { useNavigate } from "react-router-dom";
import LogIn from '../Login/LogIn';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '../../admin/component/userReducer';

function SubmittingRegistrationForm({ userData, handleUserDataUpdate }) {
  const dispatch = useDispatch();
  const errorMessages = {
    userName: 'Username is not valid',
    password: 'Password is not valid',
  };
  
  const [isSubmitted, setSubmit] = useState(false);
  const [errors, setError] = useState({});
  const [loggedInUser, setUser] = useState('');
  const setShowRegistration = useState(false);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const { userName, password } = event.target.elements;

    let response = userData.find(
      user => user.userName === userName.value && user.password === password.value
    );

    if (!response) {
      setError({ name: 'userName', message: errorMessages.userName });
    } else if (response.password !== password.value) {
      setError({ name: 'password', message: errorMessages.password });
    } else {
      //  posting data to server  //http://localhost:8080/users/login
      apiService
        .post('/users/login', { userName: userName.value, password: password.value })
        .then(res => {
          alert(res.data.message);
        })
        .catch(error => {
          alert(error);
        });
      dispatch(setLoggedInUser(response.userName));
      setSubmit(true);
      setUser(response.userName);
      const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000; // Set expiration time to 24 hours from now
      localStorage.setItem('loggedInUser', response.userName);
      localStorage.setItem('loggedInUserExpiration', expirationTime);

    dispatch(setLoggedInUser(response.userName));
    setSubmit(true);
    setUser(response.userName);
    }
  };

  const errorHandler = name => {
    return name === errors.name && <div className="error">{errors.message}</div>;
  };

  const handleSignUp = formData => {
    setShowRegistration(false);
    const updatedUserData = [...userData, formData];
    handleUserDataUpdate(updatedUserData); // Replace `handleUserDataUpdate` with the actual callback function name from the parent component
  };

      console.log(handleSignUp);
    //    redirect condition is username validated
     isSubmitted ?  navigate("/online-pos") : <LogIn />;
     console.log(loggedInUser);
     
       
  return (
            
    <>   
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username</label>
              <input type="text" name="userName" required />
              {errorHandler('userName')}
            </div>
            <div className="input-container">
              <label>Password</label>
              <input type="password" name="password" required />
              {errorHandler('password')}
            </div>

            <div className="button-container">
              <button className="login-btn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
    </>
  );
}

export default SubmittingRegistrationForm;



// import apiService from '../../api-service/apiService';
// import Registration from '../Registration/Registration';
// import './SubmittingForm.css';
// import React, { useState } from 'react';
// // import { Container, Alert, Spinner } from 'react-bootstrap';

// function SubmittingRegistrationForm({ userData }) {
//   const errorMessages = {
//     email: 'Username is not valid',
//     password: 'Password is not valid'
//   };
// //   const [validation, setvalidation] = useState(0);
//   const [isSubmitted, setSubmit] = useState(false);
//   const [errors, setError] = useState({});
//   const [loggedInUser, setUser] = useState('');
//   const [showRegistration, setShowRegistration] = useState(false);

//   const handleSubmit = event => {
//     event.preventDefault();
//     const { email, password } = event.target.elements;

//     let response;
//     for (let i = 0; i < userData.length; i++) {
//       if (userData[i].email === email.value && userData[i].password === password.value) {
//         response = userData[i];
//         break; // exit the loop after finding a match
//       }
//     }

//     if (!response) {
//       setError({ name: 'email', message: errorMessages.email });
//     } else if (response.password !== password.value) {
//       setError({ name: 'password', message: errorMessages.password });
//     } else {
//       // Posting data to server
//       const loginData = {
//         email: response.email,
//         password: response.password
//       };
//       apiService
//         .post('/users/login', loginData)
//         .then(res => {
//           alert(res.data.message);
//         })
//         .catch(error => {
//           alert(error);
//         });

//       setSubmit(true);
//       setUser(response.email);
//     }
//   };

//   const errorHandler = name => {
//     return name === errors.name && <div className="error">{errors.message}</div>;
//   };

//   const handleSignUp = formData => {
//     setShowRegistration(false);
//     userData.push(formData);
//   };

//   return (
//     <>
//       {isSubmitted ? (
//         <div>
//           {loggedInUser} Succesfully logged in
//           {/* <a className="hrefLink text-center" href="online-pos" target="_blank" onClick={OnlinePos}>To admin page</a> */}
//         </div>
//       ) : showRegistration ? (
//         <Registration handleSignUp={handleSignUp} />
//       ) : (
//         <div className="form">
//           <form onSubmit={handleSubmit}>
//             <div className="input-container">
//               <label>Email</label>
//               <input type="text" name="email" required />
//               {errorHandler('email')}
//             </div>
//             <div className="input-container">
//               <label>Password</label>
//               <input type="password" name="password" required />
//               {errorHandler('password')}
//             </div>

//             <div className="button-container">
//               <button className="login-btn" type="submit">
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </>
//   );
// }

// export default SubmittingRegistrationForm;


         