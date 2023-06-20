import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedInUser } from '../../component/userReducer';
import { Spinner } from 'react-bootstrap';
// import '../logoutButton/Logout.css';

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true); // Set loading state to true
    dispatch(setLoggedInUser(null)); // Clear the loggedInUser state
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('loggedInUserExpiration');
    navigate('/home');
  };

  return (
    <>
      {isLoading ? (
        // Show the spinner if loading is true
        <div className="spinner-container">
          <div className="spinner">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        </div>
      ) : (
        // Show the Logout button if loading is false
        <div className="w-75">
          <a className="hrefLink text-decoration-none text-white" href="/home" onClick={handleLogout}>
            Logout
          </a>
        </div>
      )}
    </>
  );
}

export default LogoutButton;


