import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import apiService from '../../../api-service/apiService';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import SaleReceipt from '../salesReceipt/salesReceipt';
import '../posTable/posTable.css';

function PosTable() {
  const tableHeaders = ['Serial No.', 'Description', 'QTY', 'Sell Price', 'Total Price'];
  const [tableItems, setTableItems] = useState([]);
  const [responseMsg, setResponseMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUser = localStorage.getItem('loggedInUser');

        //// post request
        const response = await apiService.post('/users/request-sales', {
          userName: storedUser,
        });

        if (Array.isArray(response.data)) {
          setTableItems(response.data);
        } else {
          console.error('Received response data is not an array:', response.data);
          setTableItems([]);
        }
      } catch (error) {
        console.error('Error occurred while fetching user products:', error);
        setTableItems([]);
      }
    };

    fetchData();

    // Update table every 5 seconds
    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    ////// Clear interval
    return () => clearInterval(interval);
  }, []);

  const handleRemoveItem = async (index) => {
    try {
      const itemToRemove = tableItems[index];
      const removeRequest = {
        userName: loggedInUser,
        temporaryProduct: [{ serialNo: itemToRemove.serialNo, qty: itemToRemove.qty }],
      };

      setIsLoading(true);

      const response = await Promise.race([
        apiService.post('/users/remove-cart', removeRequest),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error('Request timeout')), 20000)),
      ]);

      setIsLoading(false);

      if (response && response.data) {
        setTableItems((prevItems) => prevItems.filter((_, i) => i !== index));
        setResponseMsg('Item removed successfully');
        setTimeout(() => {
          setResponseMsg('');
        }, 5000); ////// Clear error after 5 seconds
      } else {
        setResponseMsg('Error removing item');
        setTimeout(() => {
          setResponseMsg('');
        }, 5000); ////// Clear error after 5 seconds
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setResponseMsg('Error removing item');
      setTimeout(() => {
        setResponseMsg('');
      }, 5000); ////// Clear error after 5 seconds
    }
  };

  const proceedToPayment = async () => {
    try {
      const currentDate = new Date();
      const day = currentDate.getDate().toString().padStart(2, '0');
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); //// Months are zero-based
      const year = currentDate.getFullYear().toString().slice(-2);
      const referenceDate = day + month + year;
      const date = currentDate;

      const currentTime = currentDate.toTimeString().slice(0, 5).replace(':', '');
      const time = currentTime === '00:00' ? '2400' : currentTime;

      const salesId = loggedInUser;
      const referenceNo = `${referenceDate}${time}`;

      const items = tableItems.map((item) => {
        const itemQty = parseInt(item.qty);
        const itemSellPrice = parseFloat(item.sellPrice);
        const itemTotalPrice = itemQty * itemSellPrice;
        return {
          serialNo: item.serialNo,
          category: item.category,
          itemDescription: item.itemDescription,
          qty: item.qty,
          sellPrice: item.sellPrice,
          totalPrice: itemTotalPrice,
        };
      });

      const allTotalPrice = Number(totalPrice);
  
      const submitSales = {
        userName: loggedInUser,
        salesList: [
          {
            salesId,
            referenceNo,
            date,
            items,
            allTotalPrice,
          },
        ],
      };

      const response = await apiService.post('/users/submit-sales', submitSales);

      if (response.data && response.data.message) {
        setTableItems([]);
        setResponseMsg(response.data.message);
        setPaymentSuccessful(true);
        setTimeout(() => {
          setResponseMsg('');
          setPaymentSuccessful(false);
        }, 5000); ////// Clear error after 5 seconds
      } else {
        setResponseMsg('Error submitting sales');
        setTimeout(() => {
          setResponseMsg('');
        }, 5000); ////// Clear error after 5 seconds
      }
    } catch (error) {
      console.log(error);
      setResponseMsg('Error submitting sales');
      setTimeout(() => {
        setResponseMsg('');
      }, 5000); ////// Clear error after 5 seconds
    }
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      tableItems.forEach((item) => {
        const itemQty = parseInt(item.qty);
        const itemSellPrice = parseFloat(item.sellPrice);
        if (!isNaN(itemQty) && !isNaN(itemSellPrice)) {
          const itemTotalPrice = itemQty * itemSellPrice;
          total += itemTotalPrice;
        }
      });
      setTotalPrice(total.toFixed(2)); ///// Format the total price result
    };

    calculateTotalPrice();
  }, [tableItems]);

  return (
    <>
      <div>
        <div>
          <h4 className="text-center">
            <div className="d-flex justify-content-around flex-wrap mt-4">
                     <div className=" mb-2 d-flex align-items-center purchase">
                         <h3>Purchase Info:</h3>
                     </div>
                      <div className="mb-3 d-flex flex-row align-items-center flex-wrap justify-content-center">
                        {' '}
                           <div className="px-2">Payable Price:</div>
                           <div className="px-5 totalPriceContainer">₱ {totalPrice}</div>
                      </div>
              </div>
          </h4>
        </div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              {tableHeaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableItems.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.serialNo}</td>
                <td>{data.itemDescription}</td>
                <td>{data.qty}</td>
                <td>{parseFloat(data.sellPrice).toFixed(2)}</td>
                <td>{parseFloat(data.totalPrice).toFixed(2)}</td>
                <td>
                  <Button className="handleRemoveButton" onClick={() => handleRemoveItem(index)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <>
            {responseMsg && <div>{responseMsg}</div>}
            {tableItems.length > 0 && (
              <Button className="proceedPaymentButton" onClick={proceedToPayment}>
                Proceed to Payment
              </Button>
            )}
            <div className="salesReceiptButton">  <SaleReceipt paymentSuccessful={paymentSuccessful} /></div>
          
          </>
        )}
      </div>
    </>
  );
}

export default PosTable;


// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import apiService from '../../../api-service/apiService';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Spinner from 'react-bootstrap/Spinner';
// import SaleReceipt from '../salesReceipt/salesReceipt';
// import '../posTable/posTable.css';

// function PosTable() {
//   const tableHeaders = ['Serial No.', 'Description', 'QTY', 'Sell Price', 'Total Price'];

//   const [tableItems, setTableItems] = useState([]);
//   const [responseMsg, setResponseMsg] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const loggedInUser = useSelector((state) => state.loggedInUser);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [paymentSuccessful, setPaymentSuccessful] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const storedUser = localStorage.getItem('loggedInUser');

//         // Send request to server to fetch user product list
//         const response = await apiService.post('/users/request-sales', {
//           userName: storedUser,
//         });

//         if (Array.isArray(response.data)) {
//           setTableItems(response.data);
//         } else {
//           console.error('Received response data is not an array:', response.data);
//           setTableItems([]);
//         }
//       } catch (error) {
//         console.error('Error occurred while fetching user products:', error);
//         setTableItems([]);
//       }
//     };

//     // Fetch data initially
//     fetchData();

//     // Update table every 5 seconds
//     const interval = setInterval(() => {
//       fetchData();
//     }, 5000);

//     // Clear interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   const handleRemoveItem = async (index) => {
//     try {
//       const itemToRemove = tableItems[index];
//       const removeRequest = {
//         userName: loggedInUser,
//         temporaryProduct: [{ serialNo: itemToRemove.serialNo, qty: itemToRemove.qty }],
//       };

//       setIsLoading(true);

//       const response = await Promise.race([
//         apiService.post('/users/remove-cart', removeRequest),
//         new Promise((resolve, reject) => setTimeout(() => reject(new Error('Request timeout')), 20000)),
//       ]);

//       setIsLoading(false);

//       if (response && response.data) {
//         setTableItems((prevItems) => prevItems.filter((_, i) => i !== index));
//         setResponseMsg('Item removed successfully');
//         setTimeout(() => {
//           setResponseMsg('');
//         }, 5000); // Clear the message after 5 seconds
//       } else {
//         setResponseMsg('Error removing item');
//         setTimeout(() => {
//           setResponseMsg('');
//         }, 5000); // Clear the message after 5 seconds
//       }
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false);
//       setResponseMsg('Error removing item');
//       setTimeout(() => {
//         setResponseMsg('');
//       }, 5000); // Clear the message after 5 seconds
//     }
//   };

//   const proceedToPayment = async () => {
//     try {
//       const currentDate = new Date();
//       const day = currentDate.getDate().toString().padStart(2, '0');
//       const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
//       const year = currentDate.getFullYear().toString().slice(-2);
//       const referenceDate = day + month + year;
//       const date = currentDate;

//       const currentTime = currentDate.toTimeString().slice(0, 5).replace(':', '');
//       const time = currentTime === '00:00' ? '2400' : currentTime;

//       const salesId = loggedInUser;
//       const referenceNo = `${referenceDate}${time}`;

//       const items = tableItems.map((item) => ({
//         serialNo: item.serialNo,
//         category: item.category,
//         itemDescription: item.itemDescription,
//         qty: item.qty,
//         sellPrice: item.sellPrice,
//         totalPrice: item.totalPrice,
//       }));

//       const allTotalPrice = Number(totalPrice);

//       const submitSales = {
//         userName: loggedInUser,
//         salesList: [
//           {
//             salesId,
//             referenceNo,
//             date,
//             items,
//             allTotalPrice,
//           },
//         ],
//       };

//       const response = await apiService.post('/users/submit-sales', submitSales);

//       if (response.data && response.data.message) {
//         setTableItems([]);
//         setResponseMsg(response.data.message);
//         setPaymentSuccessful(true);
//         setTimeout(() => {
//           setResponseMsg('');
//           setPaymentSuccessful(false);
//         }, 5000); // Clear the message after 5 seconds
//       } else {
//         setResponseMsg('Error submitting sales');
//         setTimeout(() => {
//           setResponseMsg('');
//         }, 5000); // Clear the message after 5 seconds
//       }
//     } catch (error) {
//       console.log(error);
//       setResponseMsg('Error submitting sales');
//       setTimeout(() => {
//         setResponseMsg('');
//       }, 5000); // Clear the message after 5 seconds
//     }
//   };

//   useEffect(() => {
//     const calculateTotalPrice = () => {
//       let total = 0;
//       tableItems.forEach((item) => {
//         const itemQty = parseInt(item.qty);
//         const itemSellPrice = parseFloat(item.sellPrice);
//         if (!isNaN(itemQty) && !isNaN(itemSellPrice)) {
//           const itemTotalPrice = itemQty * itemSellPrice;
//           total += itemTotalPrice;
//         }
//       });
//       setTotalPrice(total.toFixed(2)); // Format the total price
//     };

//     calculateTotalPrice();
//   }, [tableItems]);

//   return (
//     <>
//       <div>
//         <div>
//           <h4 className="text-center">
//             <div className="d-flex justify-content-around flex-wrap mt-4">
//               <div className="mb-4">Purchase Info:</div>
//               <div className="mb-3">
//                 {' '}
//                 Total Price: <span className="px-5 totalPriceContainer">{totalPrice}</span>
//               </div>
//             </div>
//           </h4>
//         </div>
//         <Table responsive="sm">
//           <thead>
//             <tr>
//               <th>#</th>
//               {tableHeaders.map((header, index) => (
//                 <th key={index}>{header}</th>
//               ))}
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableItems.map((data, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{data.serialNo}</td>
//                 <td>{data.itemDescription}</td>
//                 <td>{data.qty}</td>
//                 <td>{parseFloat(data.sellPrice).toFixed(2)}</td>
//                 <td>{(parseFloat(data.sellPrice) * data.qty).toFixed(2)}</td>
//                 <td>
//                   <Button variant="primary" onClick={() => handleRemoveItem(index)}>
//                     Remove
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//         {isLoading ? (
//           <Spinner animation="border" role="status">
//             <span className="sr-only">Loading...</span>
//           </Spinner>
//         ) : (
//           <>
//             {responseMsg && <div>{responseMsg}</div>}
//             {tableItems.length > 0 && (
//               <Button variant="primary" onClick={proceedToPayment}>
//                 Proceed to Payment
//               </Button>
//             )}
//             <div className="salesReceiptButton">  <SaleReceipt paymentSuccessful={paymentSuccessful} /></div>
          
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default PosTable;













