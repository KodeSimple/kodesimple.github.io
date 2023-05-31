import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Blog from '../../pages/blog/Blog';
import Contact from '../../pages/contact/Contact';
import NoPage from '../../pages/no-pages/NoPage';
import Faq from '../../pages/faq/Faq';
import About from '../../pages/about/About';
import Features from '../../pages/features/Features';

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route path="/Blog" element={<Blog />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/about" element={<About />} />
       <Route path="/faq" element={<Faq />} />
       <Route path="/features" element={<Features />} />
       <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRoutes;
