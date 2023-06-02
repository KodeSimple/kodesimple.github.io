import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Login from '../src/components/sign-in/SigIn';
import ProductList from '../src/components/sample/ProductList';

function HandleLogin() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  console.log(isLoggedIn);
  const handleLogin = async (username, password) => {
    try {
      // Send login request to the server and check if credentials are valid
      const response = await axios.post('/users/login', { username, password });
      if (response.data.status) {
        // Login successful
        setLoggedIn(true);
        setUserId(response.data.userId);
        console.log(response);
      }
    } catch (error) {
      // Handle login error
      console.log(error);
    }
   
  };
     
  return (
    
      <Routes>
        <Route path="/login">
          {isLoggedIn ? <Navigate to="/products" /> : <Login handleLogin={handleLogin} />}
        </Route>
        <Route path="/products">
          {isLoggedIn ? <ProductList userId={userId} /> : <Navigate to="/login" />}
        </Route>
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    
  );
}

export default HandleLogin;
