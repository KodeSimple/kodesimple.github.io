import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import apiService from '../../../api-service/apiService';
import '../businessName/BusinessName.css';

function BusinessName() {
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const [businessUserData, setBusinessUserData] = useState(null);

  useEffect(() => {
    const fetchBusinessUserData = async () => {
      try {
        const storedUser = localStorage.getItem('loggedInUser');
        const response = await apiService.post('/users/sales-receipt', {
          userName: storedUser,
        });
        const data = response.data;
        setBusinessUserData(data);
      } catch (error) {
        console.error('Error occurred while fetching business user data:', error);
      }
    };

    fetchBusinessUserData();

    // Get business name data every 5 seconds
    const intervalId = setInterval(fetchBusinessUserData, 2000);

    return () => {
      // Clear the interval
      clearInterval(intervalId);
    };
  }, [loggedInUser]);

  return (
    <>
      {/* Render only the businessName */}
      <div className="d-flex flex-wrap">
        <div className="tagName px-2">
          <h3>{!businessUserData?.businessName ? 'Internet Status:' : 'Business Name:'}</h3>
        </div>
        <div className="businessName">
          <h3 style={{ color: businessUserData?.businessName ? 'inherit' : 'red' }}>
            {businessUserData?.businessName || 'Offline'}
          </h3>
        </div>
      </div>
    </>
  );
}

export default BusinessName;


// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import apiService from '../../../api-service/apiService';
// import '../businessName/BusinessName.css';

// function BusinessName() {
//   const loggedInUser = useSelector((state) => state.loggedInUser);
//   const [businessUserData, setBusinessUserData] = useState(null);

//   useEffect(() => {
//     const fetchBusinessUserData = async () => {
//       try {
//         const storedUser = localStorage.getItem('loggedInUser');
//         const response = await apiService.post('/users/sales-receipt', {
//           userName: storedUser,
//         });
//         const data = response.data;
//         setBusinessUserData(data);
//       } catch (error) {
//         console.error('Error occurred while fetching business user data:', error);
//       }
//     };


//     fetchBusinessUserData();

//     //////Get business name data every 5 seconds
//     const intervalId = setInterval(fetchBusinessUserData, 2000);

//     return () => {
//       /////Clear the interval
//       clearInterval(intervalId);
//     };
//   }, [loggedInUser]); ////// Include loggedInUser as a dependency

//   return (
//     <>
//       {/* Render only the businessName */}
//       <div className="d-flex flex-wrap">
//         <div className="tagName px-2">
//           <h3>Business Name:</h3>
//         </div>
//         <div className="businessName">
//           <h3 style={{ color: businessUserData?.businessName ? 'inherit' : 'red' }}>
//             {businessUserData?.businessName || '(Offline)'}
//           </h3>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BusinessName;




