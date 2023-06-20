
<<<<<<< HEAD
// Initial state
=======
///// Initial state
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
const initialState = {
    loggedInUser: null,
  };
  
<<<<<<< HEAD
  // Reducer function
=======
  ////// Reducer function
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOGGED_IN_USER':
        return {
          ...state,
          loggedInUser: action.payload,
        };
      default:
        return state;
    }
  };
  
<<<<<<< HEAD
  // Actions
=======
  ///// Actions
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
  export const setLoggedInUser = (user) => ({
    type: 'SET_LOGGED_IN_USER',
    payload: user,
  });
  
  export default userReducer;