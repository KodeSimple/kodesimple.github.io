import React, { useState, useEffect } from 'react'
import SubmittingRegistrationForm from '../Registration/SubmittingForm';
import apiService from '../../api-service/apiService';

function Login({data}) {
      
              //   code reference starts here
     const [userData, setUserData] = useState([])
     console.log(userData);
        
     useEffect(() => {
           apiService.get('/users/getUsers')
           .then(response => {
             setUserData(response.data);        
           })

           .catch(error => {
             console.log(error);
           })
         }, []);
            // code reference ends here

    return (
        <div className="app">
            <div className="login-form">
                
                <SubmittingRegistrationForm userData={userData} />
            
            </div>
        </div>
    );
}

export default Login;



                //    code reference

                // import LoginForm from './login.form';

                // function Login({data}) {
                //     return (
                //         <div className="app">
                //             <div className="login-form">
                //                 <LoginForm userData={data} />
                //             </div>
                //         </div>
                //     );
                // }
                
                // export default Login;