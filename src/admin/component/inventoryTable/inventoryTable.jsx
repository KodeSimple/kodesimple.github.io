import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import apiService from '../../../api-service/apiService';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import './inventoryTable.css';

function InventoryTable() {
  const tableHeaders = [
    'Entry date',
    'Serial No.',
    'Category',
    'Description',
    'QTY',
    'Buy Price',
    'Sell Price',
    'Profit',
  ];
  const itemsPerPage = 20;

  const [userProducts, setUserProducts] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const navigate = useNavigate();
  console.log(navigate);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUser = localStorage.getItem('loggedInUser');
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
        </Table>
      </div>
    </>
  );
}

export default InventoryTable;



// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import apiService from '../../../api-service/apiService';
// import Table from 'react-bootstrap/Table';
// import './inventoryTable.css';

// function InventoryTable() {
//   const tableHeaders = [
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
//   const navigate = useNavigate();
//    console.log(navigate);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const storedUser = localStorage.getItem('loggedInUser');
//         const response = await apiService.post('users/productList', {
//           userName: storedUser,
//         });

//         if (Array.isArray(response.data)) {
//           setUserProducts(response.data);
//         } else {
//           console.error('Received response data is not an array:', response.data);
//           setUserProducts([]);
//         }
//       } catch (error) {
//         console.error('Error occurred while fetching user products:', error);
//         setUserProducts([]);
//       }
//     };

//     fetchData();

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
//             {userProducts.slice().reverse().map((data, index) => (
//               <tr key={index}>
//                 <td>{userProducts.length - index}</td>
//                 <td className="hidden-cell">{data.userId}</td>
//                 <td>{formatDate(data.entryDate)}</td>
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

