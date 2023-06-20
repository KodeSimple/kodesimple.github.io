import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Blog from '../../pages/blog/Blog';
import Contact from '../../pages/contact/Contact';
import NoPage from '../../pages/no-pages/NoPage';
import Faq from '../../pages/faq/Faq';
import About from '../../pages/about/About';
import Features from '../../pages/features/Features';
import OnlinePos from '../../admin/pages/online-pos/OnlinePos'
import PosInventory from '../../admin/pages/inventory/PosInventory';
import Sales from '../../admin/pages/sales/PosSales';
import User from '../../admin/pages/user/PosUser';
import PosContact from '../../admin/pages/contact/PosContact';
import Mobilepos from '../../pages/content/mobilepos';


function AppRoutes() {
     
     return (
       <>
           <Routes>
             <Route exact path="/" element={<Home />} />
             <Route path="/home" element={<Home/>} />
             <Route path="/Blog" element={<Blog />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/about" element={<About />} />
             <Route path="/faq" element={<Faq />} />
             <Route path="/features" element={<Features />} />
             <Route path="*" element={<NoPage />} />
                      {/* admin page navigawtion */}
             <Route path="/online-pos" element={<OnlinePos />} />       
             <Route path="/inventory" element={<PosInventory />} />
             <Route path="/sales" element={<Sales />} />
             <Route path="/pos-user" element={<User />} />
             <Route path="/pos-contact" element={<PosContact />} />
             <Route path="/mobile-pos" element={<Mobilepos />} />
        </Routes>
    </>
  );
};

export default AppRoutes;
