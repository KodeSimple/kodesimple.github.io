import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import apiService from '../../../api-service/apiService';
import Table from 'react-bootstrap/Table';
import './inventoryTable.css';

function InventoryTable() {
  const tableHeaders = [
    // 'User ID',
    'Entry date',
    'Serial No.',
    'Category',
    'Description',
    'QTY',
    'Buy Price',
    'Sell Price',
    'Profit',
  ];

  const [userProducts, setUserProducts] = useState([]);
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const navigate = useNavigate();
  console.log(navigate);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUser = localStorage.getItem('loggedInUser');

        // Send request to server to fetch user product list
        const response = await apiService.post('users/productList', {
          userName: storedUser,
        });

        if (Array.isArray(response.data)) {
          setUserProducts(response.data);
        } else {
          console.error('Received response data is not an array:', response.data);
          setUserProducts([]);
        }
      } catch (error) {
        console.error('Error occurred while fetching user products:', error);
        setUserProducts([]);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
      <h1 className="text-center my-4">All Inventory History</h1>
        <Table responsive="sm" striped>
          <thead>
            <tr>
              <th>#</th>
              {tableHeaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
              <tbody>
                 {loggedInUser && (
                   <tr>
                     <td colSpan={tableHeaders.length + 1}>
                       <h5>Good day! {loggedInUser}</h5>
                     </td>
                   </tr>
                 )}
                 {userProducts.slice().reverse().map((data, index) => (
                   <tr key={index}>
                     <td>{userProducts.length - index}</td>
                     <td className="hidden-cell">{data.userId}</td>
                     <td>{data.entryDate}</td>
                     <td>{data.serialNo}</td>
                     <td>{data.category}</td>
                     <td>{data.itemDescription}</td>
                     <td>{data.qty}</td>
                     <td>{parseFloat(data.buyPrice).toFixed(2)}</td>
                     <td>{parseFloat(data.sellPrice).toFixed(2)}</td>
                     <td>{parseFloat(data.profit).toFixed(2)}</td>
                   </tr>
                 ))}
             </tbody>
        </Table>
      </div>
    </>
  );
}

export default InventoryTable;


// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setLoggedInUser } from '../../component/userReducer';
// import apiService from '../../../api-service/apiService';
// import Table from 'react-bootstrap/Table';
// import '../inventoryTable/inventoryTable.css';

// function InventoryTable() {
//   const tableHeaders = [
//     // 'User ID',
//     'Entry date',
//     'Serial No.',
//     'Category',
//     'Description',
//     'QTY',
//     'Buy Price',
//     'Sell Price',
//     'Profit',
//   ];

//   const [userProducts, setUserProducts] = useState([]);
//   const loggedInUser = useSelector((state) => state.loggedInUser);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const storedUser = localStorage.getItem('loggedInUser');
//         const expirationTime = localStorage.getItem('loggedInUserExpiration');

//         if (
//           storedUser &&
//           expirationTime &&
//           Date.now() < parseInt(expirationTime, 10)
//         ) {
//           dispatch(setLoggedInUser(storedUser));

//           // Send request to server to fetch user product list
//           const response = await apiService.post('users/productList', {
//             userName: loggedInUser,
//           });

//           if (Array.isArray(response.data)) {
//             setUserProducts(response.data);
//           } else {
//             console.error('Received response data is not an array:', response.data);
//             setUserProducts([]);
//           }
//         } else {
//           localStorage.removeItem('loggedInUser');
//           localStorage.removeItem('loggedInUserExpiration');
//           navigate('/home');
//         }
//       } catch (error) {
//         console.error('Error occurred while fetching user products:', error);
//         setUserProducts([]);
//       }
//     };

//     fetchData();
//   }, [dispatch, navigate, loggedInUser]);



//   return (
//     <>
//       <div>
//         <Table responsive="sm" striped>
//           <thead>
//             <tr>
//               <th>#</th>
//               {tableHeaders.map((header, index) => (
//                 <th key={index}>{header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {loggedInUser && (
//               <tr>
//                 <td colSpan={tableHeaders.length + 1}>
//                   <h5>Good day! {loggedInUser}</h5>
//                 </td>
//               </tr>
//             )}
//             {userProducts.map((data, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td className="hidden-cell">{data.userId}</td>
//                 <td>{data.entryDate}</td>
//                 <td>{data.serialNo}</td>
//                 <td>{data.category}</td>
//                 <td>{data.itemDescription}</td>
//                 <td>{data.qty}</td>
//                 <td>{parseFloat(data.buyPrice).toFixed(2)}</td>
//                 <td>{parseFloat(data.sellPrice).toFixed(2)}</td>
//                 <td>{parseFloat(data.profit).toFixed(2)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </>
//   );
// }

// export default InventoryTable;









// apiService
// .post('/users/productList', { userName: loggedInUser })
// .then(res => {
//   // console.log(res);
//   const response = res.data; // Assuming the response is already in JSON format
//   setUserProducts(response); // Update userProducts state with the response data
// })
// .catch(error => {
//   console.log(error);
//   setUserProducts([]);
// });