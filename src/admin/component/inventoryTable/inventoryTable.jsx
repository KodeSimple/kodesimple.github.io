import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import apiService from '../../../api-service/apiService';
import Table from 'react-bootstrap/Table';
<<<<<<< HEAD
=======
import Pagination from 'react-bootstrap/Pagination';
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
import './inventoryTable.css';

function InventoryTable() {
  const tableHeaders = [
<<<<<<< HEAD
    // 'User ID',
=======
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
    'Entry date',
    'Serial No.',
    'Category',
    'Description',
    'QTY',
    'Buy Price',
    'Sell Price',
    'Profit',
  ];
<<<<<<< HEAD

  const [userProducts, setUserProducts] = useState([]);
=======
  const itemsPerPage = 20;

  const [userProducts, setUserProducts] = useState([]);
  const [activePage, setActivePage] = useState(1);
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const navigate = useNavigate();
  console.log(navigate);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUser = localStorage.getItem('loggedInUser');
<<<<<<< HEAD

        // Send request to server to fetch user product list
=======
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
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
<<<<<<< HEAD
  }, []);

  return (
    <>
      <div>
      <h1 className="text-center my-4">All Inventory History</h1>
        <Table responsive="sm" striped>
=======

    const intervalId = setInterval(fetchData, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const getPageItems = () => {
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const reversedUserProducts = [...userProducts].reverse();
    return reversedUserProducts.slice(startIndex, endIndex);
  };

  const getPageCount = () => {
    return Math.ceil(userProducts.length / itemsPerPage);
  };

  return (
    <>
      <div className="w-75 inventoryTable ">
        <h1 className="text-center my-4">All Inventory History</h1>
        <Pagination>
          <Pagination.First onClick={() => handlePageChange(1)} />
          <Pagination.Prev
            onClick={() => handlePageChange(activePage - 1)}
            disabled={activePage === 1}
          />
          {Array.from({ length: getPageCount() }).map((_, index) => (
            <Pagination.Item
              key={index}
              active={activePage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(activePage + 1)}
            disabled={activePage === getPageCount()}
          />
          <Pagination.Last onClick={() => handlePageChange(getPageCount())} />
        </Pagination>

        <Table responsive="lg" striped bordered hover>
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
          <thead>
            <tr>
              <th>#</th>
              {tableHeaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
<<<<<<< HEAD
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
=======
          <tbody>
            {loggedInUser && (
              <tr>
                <td colSpan={tableHeaders.length + 1}>
                  <h5>Good day! {loggedInUser}</h5>
                </td>
              </tr>
            )}
            {getPageItems().map((data, index) => (
              <tr key={index}>
                <td>{userProducts.length - (index + itemsPerPage * (activePage - 1))}</td>
                <td className="hidden-cell">{data.userId}</td>
                <td>{formatDate(data.entryDate)}</td>
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
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
        </Table>
      </div>
    </>
  );
}

export default InventoryTable;


<<<<<<< HEAD
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setLoggedInUser } from '../../component/userReducer';
// import apiService from '../../../api-service/apiService';
// import Table from 'react-bootstrap/Table';
// import '../inventoryTable/inventoryTable.css';

// function InventoryTable() {
//   const tableHeaders = [
//     // 'User ID',
=======

// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import apiService from '../../../api-service/apiService';
// import Table from 'react-bootstrap/Table';
// import './inventoryTable.css';

// function InventoryTable() {
//   const tableHeaders = [
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
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
<<<<<<< HEAD
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

=======
//   const navigate = useNavigate();
//    console.log(navigate);
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const storedUser = localStorage.getItem('loggedInUser');
<<<<<<< HEAD
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
=======
//         const response = await apiService.post('users/productList', {
//           userName: storedUser,
//         });

//         if (Array.isArray(response.data)) {
//           setUserProducts(response.data);
//         } else {
//           console.error('Received response data is not an array:', response.data);
//           setUserProducts([]);
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
//         }
//       } catch (error) {
//         console.error('Error occurred while fetching user products:', error);
//         setUserProducts([]);
//       }
//     };

//     fetchData();
<<<<<<< HEAD
//   }, [dispatch, navigate, loggedInUser]);



//   return (
//     <>
//       <div>
//         <Table responsive="sm" striped>
=======

//     const intervalId = setInterval(fetchData, 5000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     const date = new Date(dateString);
//     return date.toLocaleDateString(undefined, options);
//   };

//   return (
//     <>
//       <div className="w-75 inventoryTable">
//         <h1 className="text-center my-4">All Inventory History</h1>
//         <Table responsive="lg" striped bordered hover>
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
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
<<<<<<< HEAD
//             {userProducts.map((data, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td className="hidden-cell">{data.userId}</td>
//                 <td>{data.entryDate}</td>
=======
//             {userProducts.slice().reverse().map((data, index) => (
//               <tr key={index}>
//                 <td>{userProducts.length - index}</td>
//                 <td className="hidden-cell">{data.userId}</td>
//                 <td>{formatDate(data.entryDate)}</td>
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
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

<<<<<<< HEAD








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
=======
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
