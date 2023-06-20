
///// Initial state
const initialState = {
    loggedInUser: null,
  };
  
  ////// Reducer function
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
  
  ///// Actions
  export const setLoggedInUser = (user) => ({
    type: 'SET_LOGGED_IN_USER',
    payload: user,
  });
  
  export default userReducer;