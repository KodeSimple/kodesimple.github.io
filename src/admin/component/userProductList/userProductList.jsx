import React from 'react'
import { setLoggedInUser } from '../../component/userReducer';


function userProductList() {
    const loggedInUser = useSelector(state => state.loggedInUser);

     useEffect(() => {
           apiService.get('/users/getUsers')
           .then(response => {
             setUserData(response.data);        
           })

           .catch(error => {
             console.log(error);
           })
         }, []);
            code reference ends here

     
  return (
    <div>
           <h1> <h3>{loggedInUser}</h3></h1>
    </div>
  )
}

export default userProductList
