import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedInUser } from '../../component/userReducer';
import { Spinner } from 'react-bootstrap';

function LogoutButton() {
  const loggedInUser = useSelector(state => state.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const handleLogout = () => {
    const storedUser = localStorage.getItem('loggedInUser');
    const expirationTime = localStorage.getItem('loggedInUserExpiration');

    if (storedUser && expirationTime && Date.now() < parseInt(expirationTime, 10)) {
      //  alert(storedUser);
      dispatch(setLoggedInUser(storedUser));
    } else {
      alert(storedUser);
      setLoading(true); // Set loading state to true
      dispatch(setLoggedInUser(''));
      console.log(loggedInUser);
      localStorage.removeItem('loggedInUser');
      localStorage.removeItem('loggedInUserExpiration');
      navigate('/home');
    }
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
          <a className="hrefLink" href="/home" onClick={handleLogout}>
            Logout
          </a>
        </div>
      )}
    </>
  );
}

export default LogoutButton;

