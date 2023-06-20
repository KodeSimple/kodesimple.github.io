import apiService from '../../api-service/apiService';
import '../Registration/Registration.css';
import React, { useState } from 'react';
// import { Spinner } from 'react-bootstrap';

function Registration({ handleShowSignIn }) {
  const [isRegistrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    businessName: '',
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    productList: []
  });

    // Error handling
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  
    // Clear the corresponding error when typing
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        };

  const handleSubmit = event => {
    setLoading(true);
    event.preventDefault();
    const emptyFields = Object.keys(formData).filter(field => formData[field] === '');
    if (emptyFields.length > 0) {
      const errorObj = emptyFields.reduce((errors, field) => {
        errors[field] = 'This field is required';
        return errors;
      }, {});
      setErrors(errorObj);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Invalid email format',
      }));
      return;
    }

    apiService
      .post('/users/signup', formData)
      .then(response => {
        if (!response.data.status) {
          alert('Email already exists');
          setErrors(prevErrors => ({
            ...prevErrors,
            email: 'Email already exists',
            userName: 'Username already exists',
          }));
        } else {
          setRegistrationSuccessful(true);
          setTimeout(() => {
            setErrors({});
            setFormData({
              businessName: '',
              firstName: '',
              lastName: '',
              userName: '',
              email: '',
              password: '',
              confirmPassword: ''
            });
            handleShowSignIn();
            console.log(isLoading);
           

            alert('Registration successful proceed to login')
          }, 200);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const errorHandler = name => {
    if (errors[name]) {
      return <div className="error">{errors[name]}</div>;
    }
    return null;
  };

  return (
    <>
      <div>
        <div>
          {isRegistrationSuccessful && handleShowSignIn()}
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Business name</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
              />
              {errorHandler('businessName')}
            </div>
            <div className="input-container">
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errorHandler('firstName')}
            </div>
            <div className="input-container">
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errorHandler('lastName')}
            </div>
            <div className="input-container">
              <label>User name</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
              {errorHandler('userName')}
            </div>
            <div className="input-container">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errorHandler('email')}
            </div>
            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errorHandler('password')}
            </div>
            <div className="input-container">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errorHandler('confirmPassword')}
            </div>

                    <div className="button-container">
                       <button className="signup-btn" type="submit">
                           Register
                       </button>
                  </div>   
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;


// import apiService from '../../api-service/apiService';
// import '../Registration/Registration.css';
// import React, { useState } from 'react';
// import handleShowSignIn from '../../components/drawer/offCanvas';

// function Registration({ handleSignUp }) {
//   const [isRegistrationSuccessful, setRegistrationSuccessful] = useState(false);
//   const [isLoading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [formData, setFormData] = useState({
//     businessName: '',
//     firstName: '',
//     lastName: '',
//     userName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     productList: []
//   });

//   const handleChange = event => {
//     const { name, value } = event.target;
//     setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
//   };

//   const handleSubmit = event => {
//     setLoading(true);
//     event.preventDefault();
//     const emptyFields = Object.keys(formData).filter(field => formData[field] === '');
//     if (emptyFields.length > 0) {
//       const errorObj = emptyFields.reduce((errors, field) => {
//         errors[field] = 'This field is required';
//         return errors;
//       }, {});
//       setErrors(errorObj);
//       return;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(formData.email)) {
//       setErrors(prevErrors => ({
//         ...prevErrors,
//         email: 'Invalid email format',
//       }));
//       return;
//     }

//     apiService
//       .post('/users/signup', formData)
//       .then(response => {
//         if (!response.data.status) {
//           alert('Email already exists');
//           setErrors(prevErrors => ({
//             ...prevErrors,
//             email: 'Email already exists',
//             userName: 'Username already exists',
//           }));
//         } else {
//           setRegistrationSuccessful(true);
//           setTimeout(() => {
//             setErrors({});
//             setFormData({
//               businessName: '',
//               firstName: '',
//               lastName: '',
//               userName: '',
//               email: '',
//               password: '',
//               confirmPassword: ''
//             });
//             Click={handleShowSignIn}
//             console.log(isLoading);
//           }, 200);
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   const errorHandler = name => {
//     if (errors[name]) {
//       return <div className="error">{errors[name]}</div>;
//     }
//     return null;
//   };

//   return (
//     <>
//       <div>
//              <div>
//               {isRegistrationSuccessful && <handleShowSignIn />}
//             </div>
//         <div className="form">
//           <form onSubmit={handleSubmit}>
//             <div className="input-container">
//               <label>Business name</label>
//               <input
//                 type="text"
//                 name="businessName"
//                 value={formData.businessName}
//                 onChange={handleChange}
//               />
//               {errorHandler('businessName')}
//             </div>
//             <div className="input-container">
//               <label>First name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//               />
//               {errorHandler('firstName')}
//             </div>
//             <div className="input-container">
//               <label>Last name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//               {errorHandler('lastName')}
//             </div>
//             <div className="input-container">
//               <label>User name</label>
//               <input
//                 type="text"
//                 name="userName"
//                 value={formData.userName}
//                 onChange={handleChange}
//               />
//               {errorHandler('userName')}
//             </div>
//             <div className="input-container">
//               <label>Email</label>
//               <input
//                 type="text"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errorHandler('email')}
//             </div>
//             <div className="input-container">
//               <label>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               {errorHandler('password')}
//             </div>
//             <div className="input-container">
//               <label>Confirm Password</label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//               />
//               {errorHandler('confirmPassword')}
//             </div>
//             <div className="button-container">
//                 <button className="signup-btn" type="submit">
//                 Register
//               </button>

//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Registration;




  