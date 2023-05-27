import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
