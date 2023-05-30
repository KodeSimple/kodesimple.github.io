import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Blog from '../../pages/blog/Blog';
import Contact from '../../pages/contact/Contact';
import NoPage from '../../pages/no-pages/NoPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRoutes;
