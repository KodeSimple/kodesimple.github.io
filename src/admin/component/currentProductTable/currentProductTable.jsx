import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import apiService from '../../../api-service/apiService';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import '../inventoryTable/inventoryTable.css';

function CurrentProductTable() {
  const tableHeaders = [
    // 'User ID',
    // 'Entry date',
    'Serial No.',
    'Category',
    'Description',
    'QTY',
    // 'Buy Price',
    'Sell Price',
    // 'Profit',
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

        //////// Send request to server to fetch user product list
        const response = await apiService.post('users/current-product', {
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

    const intervalId = setInterval(fetchData, 5000); ////// Refresh every 5 seconds

    return () => {
      clearInterval(intervalId); ////// Clean up the interval on component unmount
    };
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const getPageItems = () => {
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return userProducts.slice(startIndex, endIndex);
  };

  const getPageCount = () => {
    return Math.ceil(userProducts.length / itemsPerPage);
  };

  return (
    <>
      <div className="w-75 inventoryTable"> {/*adjust here the table size*/}
        <h1 className="text-center my-4">Current Available Products</h1>
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

        <Table responsive="sm" striped bordered hover>
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
                <td>{(activePage - 1) * itemsPerPage + index + 1}</td>
                <td className="hidden-cell">{data.userId}</td>
                {/* <td>{data.entryDate}</td> */}
                <td>{data.serialNo}</td>
                <td>{data.category}</td>
                <td>{data.itemDescription}</td>
                <td>{data.qty}</td>
                {/* <td>{parseFloat(data.buyPrice).toFixed(2)}</td> */}
                <td>{parseFloat(data.sellPrice).toFixed(2)}</td>
                {/* <td>{parseFloat(data.profit).toFixed(2)}</td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default CurrentProductTable;



// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import apiService from '../../../api-service/apiService';
// import Table from 'react-bootstrap/Table';
// import '../inventoryTable/inventoryTable.css';

// function CurrentProductTable() {
//   const tableHeaders = [
//     // 'User ID',
//     // 'Entry date',
//     'Serial No.',
//     'Category',
//     'Description',
//     'QTY',
//     // 'Buy Price',
//     'Sell Price',
//     // 'Profit',
//   ];

//   const [userProducts, setUserProducts] = useState([]);
//   const loggedInUser = useSelector((state) => state.loggedInUser);
//   const navigate = useNavigate();
//   console.log(navigate);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const storedUser = localStorage.getItem('loggedInUser');

//         //////// Send request to server to fetch user product list
//         const response = await apiService.post('users/current-product', {
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

//     const intervalId = setInterval(fetchData, 5000); ////// Refresh every 5 seconds

//     return () => {
//       clearInterval(intervalId); ////// Clean up the interval on component unmount
//     };
//   }, []);

//   return (
//     <>
//       <div className="w-75 inventoryTable">    {/*adjust here the table size*/}
//         <h1 className="text-center my-4">Current Available Products</h1>
//         <Table responsive="sm" striped  bordered hover>
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
//                 {/* <td>{data.entryDate}</td> */}
//                 <td>{data.serialNo}</td>
//                 <td>{data.category}</td>
//                 <td>{data.itemDescription}</td>
//                 <td>{data.qty}</td>
//                 {/* <td>{parseFloat(data.buyPrice).toFixed(2)}</td> */}
//                 <td>{parseFloat(data.sellPrice).toFixed(2)}</td>
//                 {/* <td>{parseFloat(data.profit).toFixed(2)}</td> */}
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </>
//   );
// }

// export default CurrentProductTable;



