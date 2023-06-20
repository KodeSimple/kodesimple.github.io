import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import apiService from '../../../api-service/apiService';
import Table from 'react-bootstrap/Table';
import Modal from 'react-modal';
import '../salesListTable/salesListTable.css';
import Pagination from 'react-bootstrap/Pagination';

function SalesTableList() {
  const tableHeaders = ['Sales Id', 'Date', 'Reference No', 'Total Price', 'Items'];
  const itemsPerPage = 20;

  const [userProducts, setUserProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const navigate = useNavigate();
  console.log(navigate);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.post('/users/sales-list', {
          userName: loggedInUser,
        });

        if (Array.isArray(response.data.salesList)) {
          setUserProducts(response.data.salesList);
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

    const intervalId = setInterval(fetchData, 2000); ///// Refresh every 5 seconds

    return () => {
      clearInterval(intervalId); ////// Clean interval on component unmount
    };
  }, [loggedInUser]);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const getPageItems = () => {
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const reversedUserProducts = [...userProducts].reverse();
    const pageItems = reversedUserProducts.slice(startIndex, endIndex);
    const startIndexOnPage = userProducts.length - startIndex;
    return pageItems.map((data, index) => ({
      ...data,
      originalIndex: startIndexOnPage - index,
    }));
  };
  
  const getPageCount = () => {
    return Math.ceil(userProducts.length / itemsPerPage);
  };

  return (
    <>
      <div className=" w-100 d-flex justify-content-center">
        <div className="w-75 px-3 pt-3 pb-3 salesListTable">
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

          <Table responsive striped bordered hover size="sm">
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
              {getPageItems().map((data) => (
                <React.Fragment key={data.originalIndex}>
                  <tr>
                    <td>{data.originalIndex}</td>
                    <td>{data.salesId}</td>
                    <td>{new Date(data.date).toLocaleDateString()}</td>
                    <td>{data.referenceNo}</td>
                    <td>{parseFloat(data.allTotalPrice).toFixed(2)}</td>
                    <td>
                      <button className="salesListViewButton" onClick={() => openModal(data)}>
                        View Item
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </Table>

          <Modal isOpen={selectedItem !== null} onRequestClose={closeModal}>
            <h2>Item Details</h2>
            <div className="d-flex justify-content-end pb-3"> 
                <button className="modalCloseButton" onClick={closeModal}>
                   Close
                 </button>
            </div>
            {selectedItem && (
              <>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Serial No</th>
                      <th>Category</th>
                      <th>Item Description</th>
                      <th>Qty</th>
                      <th>Sell Price</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedItem.items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.serialNo}</td>
                        <td>{item.category}</td>
                        <td>{item.itemDescription}</td>
                        <td>{item.qty}</td>
                        <td>{parseFloat(item.sellPrice).toFixed(2)}</td>
                        <td>{parseFloat(item.totalPrice).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            )}
          </Modal>
        </div>
      </div>
    </>
  );
}

export default SalesTableList;




// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import apiService from '../../../api-service/apiService';
// import Table from 'react-bootstrap/Table';
// import Modal from 'react-modal';
// import '../salesListTable/salesListTable.css';

// function SalesTableList() {
//   const tableHeaders = ['Sales Id', 'Date', 'Reference No', 'Total Price', 'Items'];

//   const [userProducts, setUserProducts] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const loggedInUser = useSelector((state) => state.loggedInUser);
//   const navigate = useNavigate();
//   console.log(navigate);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await apiService.post('/users/sales-list', {
//           userName: loggedInUser,
//         });

//         if (Array.isArray(response.data.salesList)) {
//           setUserProducts(response.data.salesList);
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

//     const intervalId = setInterval(fetchData, 2000); ///// Refresh every 5 seconds

//     return () => {
//       clearInterval(intervalId); ////// Clean interval on component unmount
//     };
//   }, [loggedInUser]);

//   const openModal = (item) => {
//     setSelectedItem(item);
//   };

//   const closeModal = () => {
//     setSelectedItem(null);
//   };

//   return (
//     <>
//       <div className="salesListTable w-100 d-flex justify-content-center">
//         <div className="w-75">
//         <Table rstriped bordered hover size="sm">
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
//               <React.Fragment key={index}>
//                 <tr>
//                   <td>{userProducts.length - index}</td>
//                   <td>{data.salesId}</td>
//                   <td>{new Date(data.date).toLocaleDateString()}</td>
//                   <td>{data.referenceNo}</td>
//                   <td>{parseFloat(data.allTotalPrice).toFixed(2)}</td>
//                   <td>
//                     <button className="salesListViewButton" onClick={() => openModal(data)}>View Item</button>
//                   </td>
//                 </tr>
//               </React.Fragment>
//             ))}
//           </tbody>
//         </Table>

//         <Modal isOpen={selectedItem !== null} onRequestClose={closeModal} >
//           <h2>Item Details</h2>
//           {selectedItem && (
//             <>
//               <Table striped bordered hover size="sm">
//                 <thead>
//                   <tr>
//                     <th>Serial No</th>
//                     <th>Category</th>
//                     <th>Item Description</th>
//                     <th>Qty</th>
//                     <th>Sell Price</th>
//                     <th>Total Price</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {selectedItem.items.map((item, index) => (
//                     <tr key={index}>
//                       <td>{item.serialNo}</td>
//                       <td>{item.category}</td>
//                       <td>{item.itemDescription}</td>
//                       <td>{item.qty}</td>
//                       <td>{parseFloat(item.sellPrice).toFixed(2)}</td>
//                       <td>{parseFloat(item.totalPrice).toFixed(2)}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </>
//           )}
//           <button className="modalCloseButton" onClick={closeModal}>Close</button>
//         </Modal>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SalesTableList;










