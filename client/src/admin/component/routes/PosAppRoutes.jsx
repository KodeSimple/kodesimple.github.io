import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OnlinePos from '../../pages/online-pos/OnlinePos';
import PosInventory from '../../pages/inventory/PosInventory';
import Sales from '../../pages/sales/PosSales';
import User from '../../pages/user/PosUser';
import PosContact from '../../pages/contact/PosContact';
import Logout from '../../component/logoutButton/Logout';

function PosRoutes() {
  return (
    <>
       <div>
          <Routes>
                <Route path="/online-pos" element={<OnlinePos/>} />
                <Route path="/inventory" element={<PosInventory />} />
                 <Route path="/sales" element={<Sales />} />
                 <Route path="/pos-user" element={<User />} />
                 <Route path="/pos-contact" element={<PosContact />} />
                 <Route path="/home" element={<Logout />} />           
         </Routes>
      </div>
    </>
    
  )
}

// export default PosRoutes;
