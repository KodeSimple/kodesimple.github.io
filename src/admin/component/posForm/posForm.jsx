<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Form, Table, Button, Spinner } from 'react-bootstrap';
import apiService from '../../../api-service/apiService';
import { useSelector } from 'react-redux';

const PosForm = () => {
  const loggedInUser = useSelector(state => state.loggedInUser);
=======
import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import apiService from '../../../api-service/apiService';
import { useSelector } from 'react-redux';
import PosTable from '../posTable/posTable';
import '../posForm/posForm.css';

const PosForm = () => {
  const loggedInUser = useSelector((state) => state.loggedInUser);
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
  const [serialNo, setSerialNo] = useState('');
  const [quantity, setQuantity] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
=======
  const [loading, setLoading] = useState(false);
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab

  const handleSerialNoChange = (e) => {
    setSerialNo(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSearch = async () => {
<<<<<<< HEAD
    try {
      const posRequest = {
        userName: loggedInUser,
        remainingProduct: [{ serialNo: serialNo, qty: quantity }]
=======
    if (!serialNo || !quantity) {
      setError('Serial No. and Quantity are required');
      setTimeout(() => {
        setError('');
      }, 5000); // Clear the message after 5 seconds
      return;
    }

    setLoading(true);

    try {
      const posRequest = {
        userName: loggedInUser,
        remainingProduct: [{ serialNo: serialNo, qty: quantity }],
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
      };

      const response = await apiService.post('/users/search-product', posRequest);

      if (response.data && response.data.length > 0) {
        const { itemDescription, qty, sellPrice } = response.data[0];
        const totalPrice = parseFloat(sellPrice) * parseInt(quantity);
        const newItem = {
          itemDescription,
          qty: parseInt(qty),
          sellPrice,
          totalPrice,
<<<<<<< HEAD
          serialNo: serialNo
        };

        const updatedCartItems = [...cartItems, newItem];
        setCartItems(updatedCartItems);
=======
          serialNo: serialNo,
        };

        setCartItems([...cartItems, newItem]);
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
        setSearchResult(null);
        setSerialNo('');
        setQuantity('');
        setError(null);
<<<<<<< HEAD
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Store cartItems in localStorage
      } else {
        setSearchResult(null);
        setError('Item not found');
=======
      } else {
        setSearchResult(null);
        setError('Item not found');
        setTimeout(() => {
          setError('');
        }, 5000); // Clear the message after 5 seconds
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError('Quantity not sufficient');
<<<<<<< HEAD
      } else {
        console.log(error);
        setError('Error searching for item');
      }
      setTimeout(() => {
        setError('');
      }, 5000); // Clear the message after 5 seconds
    }
  };

  const handleRemoveItem = async (index) => {
    try {
      const itemToRemove = cartItems[index];
      const removeRequest = {
        userName: loggedInUser,
        temporaryProduct: [{ serialNo: itemToRemove.serialNo, qty: itemToRemove.qty }]
      };

      setIsLoading(true);

      const response = await Promise.race([
        apiService.post('/users/remove-cart', removeRequest),
        new Promise((resolve, reject) =>
          setTimeout(() => reject(new Error('Request timeout')), 20000)
        )
      ]);

      setIsLoading(false);

      if (response && response.data) {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
        setResponseMsg('Item removed successfully');
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update cartItems in localStorage
      } else {
        setResponseMsg('Error removing item');
      }
      setTimeout(() => {
        setResponseMsg('');
      }, 5000); // Clear the message after 5 seconds
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setResponseMsg('Error removing item');
      setTimeout(() => {
        setResponseMsg('');
      }, 5000); // Clear the message after 5 seconds
    }
  };
   console.log(searchResult);
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.post('/users/search-product', {
          userName: loggedInUser,
        });

        if (response.data && response.data.length > 0) {
          setSearchResult(response.data[0]);
          setError(null);
        } else {
          setSearchResult(null);
          setError('No items found for the user');
        }
        setTimeout(() => {
          setError('');
        }, 5000); // Clear the message after 5 seconds
      } catch (error) {
        console.log(error);
        setError('Error fetching user product list');
=======
        setTimeout(() => {
          setError('');
        }, 5000); // Clear the message after 5 seconds
      } else {
        // console.log(error);
        setError('Error searching or Item not found');
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
        setTimeout(() => {
          setError('');
        }, 5000); // Clear the message after 5 seconds
      }
<<<<<<< HEAD
    };

    fetchData();
  }, [loggedInUser]);

  const handleProceedToPayment = () => {
    // Implement the logic to proceed to payment
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formSerialNo">
          <Form.Label>Serial No</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter serial number"
            value={serialNo}
            onChange={handleSerialNoChange}
          />
        </Form.Group>

        <Form.Group controlId="formQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter quantity"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form>

      {error && <div>{error}</div>}

      {cartItems.length > 0 && (
        <div>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Item Description</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.itemDescription}</td>
                  <td>{item.qty}</td>
                  <td>{item.totalPrice}</td>
                  <td>
                    <Button
                      variant="danger"
                      disabled={isLoading}
                      onClick={() => handleRemoveItem(index)}
                    >
                      {isLoading ? (
                        <Spinner animation="border" size="sm" />
                      ) : (
                        'Remove'
                      )}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="primary" onClick={handleProceedToPayment}>
            Proceed to Payment
          </Button>
        </div>
      )}

      {responseMsg && <div>{responseMsg}</div>}
    </div>
=======
    } finally {
      setLoading(false);
    }
  };
  console.log(searchResult);
  return (
    <>
      <div className="d-flex d-block flex-column justify-content-center posFormContainer w-100">
        <div className="pt-4 px-5  container-fluid posInputContainer">
          <div className="posInputItem pt-4">
            <Form>
              <Form.Group controlId="formSerialNo">
                <Form.Label>Serial No.:</Form.Label>
                <Form.Control
                  className="posInputField"
                  type="text"
                  placeholder="Enter serial number"
                  value={serialNo}
                  onChange={handleSerialNoChange}
                />
              </Form.Group>

              <Form.Group controlId="formQuantity">
                <Form.Label>Quantity:</Form.Label>
                <Form.Control
                  className="posInputField"
                  type="number"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </Form.Group>
               <div className="pt-3">
              <Button className="searchButton " onClick={handleSearch} disabled={loading}>
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" /> Searching...
                  </>
                ) : (
                  'Search'
                )}
              </Button>
              </div>
            </Form>
            <div className="text-center pt-3">
              {error && <Alert variant="success">{error}</Alert>}
            </div>
          </div>
        </div>
        <div className="posInputTable container-fluid">
          <div className="posTableItem justify-content-end">
            <PosTable />
          </div>
        </div>
      </div>
    </>
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
  );
};

export default PosForm;



<<<<<<< HEAD
// import React, { useState, useEffect } from 'react';
// import { Form, Table, Button, Spinner } from 'react-bootstrap';
// import apiService from '../../../api-service/apiService';
// import { useSelector } from 'react-redux';

// const PosForm = () => {
//   const loggedInUser = useSelector(state => state.loggedInUser);
//   const [serialNo, setSerialNo] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [searchResult, setSearchResult] = useState(null);
//   const [error, setError] = useState(null);
//   const [cartItems, setCartItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [responseMsg, setResponseMsg] = useState('');

//   const handleSerialNoChange = (e) => {
//     setSerialNo(e.target.value);
//   };

//   const handleQuantityChange = (e) => {
//     setQuantity(e.target.value);
//   };

//   const handleSearch = async () => {
//     try {
//       const posRequest = {
//         userName: loggedInUser,
//         remainingProduct: [{ serialNo: serialNo, qty: quantity }]
//       };

//       const response = await apiService.post('/users/search-product', posRequest);

//       if (response.data && response.data.length > 0) {
//         const { itemDescription, qty, sellPrice } = response.data[0];
//         const totalPrice = parseFloat(sellPrice) * parseInt(quantity);
//         const newItem = {
//           itemDescription,
//           qty: parseInt(qty),
//           sellPrice,
//           totalPrice,
//           serialNo: serialNo
//         };

//         setCartItems([...cartItems, newItem]);
//         setSearchResult(null);
//         setSerialNo('');
//         setQuantity('');
//         setError(null);
//       } else {
//         setSearchResult(null);
//         setError('Item not found');
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setError('Quantity not sufficient');
//         setTimeout(() => {
//           setError('');
//         }, 5000); // Clear the message after 5 seconds
//       } else {
//         console.log(error);
//         setError('Error searching for item');
//         setTimeout(() => {
//           setError('');
//         }, 5000); // Clear the message after 5 seconds
//       }
//     }
//   };

//   const handleRemoveItem = async (index) => {
//     try {
//       const itemToRemove = cartItems[index];
//       const removeRequest = {
//         userName: loggedInUser,
//         temporaryProduct: [{ serialNo: itemToRemove.serialNo, qty: itemToRemove.qty }]
//       };

//       setIsLoading(true);

//       const response = await Promise.race([
//         apiService.post('/users/remove-cart', removeRequest),
//         new Promise((resolve, reject) =>
//           setTimeout(() => reject(new Error('Request timeout')), 20000)
//         )
//       ]);

//       setIsLoading(false);

//       if (response && response.data) {
//         setCartItems(cartItems.filter((_, i) => i !== index));
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
//    console.log(searchResult);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await apiService.post('/users/search-product', {
//           userName: loggedInUser,
//         });

//         if (response.data && response.data.length > 0) {
//           setSearchResult(response.data[0]);
//           setError(null);
//         } else {
//           setSearchResult(null);
//           setError('No items found for the user');
//           setTimeout(() => {
//             setError('');
//           }, 5000); // Clear the message after 5 seconds
//         }
//       } catch (error) {
//         console.log(error);
//         setError('Error fetching user product list');
//         setTimeout(() => {
//           setError('');
//         }, 5000); // Clear the message after 5 seconds
//       }
//     };

//     fetchData();
//   }, [loggedInUser]);

//   const handleProceedToPayment = () => {
//     // Implement the logic to proceed to payment
//   };

//   return (
//     <div>
//       <Form>
//         <Form.Group controlId="formSerialNo">
//           <Form.Label>Serial No</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter serial number"
//             value={serialNo}
//             onChange={handleSerialNoChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="formQuantity">
//           <Form.Label>Quantity</Form.Label>
//           <Form.Control
//             type="number"
//             placeholder="Enter quantity"
//             value={quantity}
//             onChange={handleQuantityChange}
//           />
//         </Form.Group>

//         <Button variant="primary" onClick={handleSearch}>
//           Search
//         </Button>
//       </Form>

//       {error && <div>{error}</div>}

//       {cartItems.length > 0 && (
//         <div>
//           <Table striped bordered>
//             <thead>
//               <tr>
//                 <th>Item Description</th>
//                 <th>Quantity</th>
//                 <th>Total Price</th>
//                 <th>Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.itemDescription}</td>
//                   <td>{item.qty}</td>
//                   <td>{item.totalPrice}</td>
//                   <td>
//                     <Button
//                       variant="danger"
//                       disabled={isLoading}
//                       onClick={() => handleRemoveItem(index)}
//                     >
//                       {isLoading ? (
//                         <Spinner animation="border" size="sm" />
//                       ) : (
//                         'Remove'
//                       )}
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//           <Button variant="primary" onClick={handleProceedToPayment}>
//             Proceed to Payment
//           </Button>
//         </div>
//       )}

//       {responseMsg && <div>{responseMsg}</div>}
//     </div>
//   );
// };

// export default PosForm;


// import React, { useState, useEffect } from 'react';
// import { Form, Table, Button, Spinner } from 'react-bootstrap';
// import apiService from '../../../api-service/apiService';
// import { useSelector } from 'react-redux';

// const PosForm = () => {
//   const loggedInUser = useSelector(state => state.loggedInUser);
//   const [serialNo, setSerialNo] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [searchResult, setSearchResult] = useState(null);
//   const [error, setError] = useState(null);
//   const [cartItems, setCartItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [responseMsg, setResponseMsg] = useState('');

//   const handleSerialNoChange = (e) => {
//     setSerialNo(e.target.value);
//   };

//   const handleQuantityChange = (e) => {
//     setQuantity(e.target.value);
//   };

//   const handleSearch = async () => {
//     try {
//       const posRequest = {
//         userName: loggedInUser,
//         remainingProduct: [{ serialNo: serialNo, qty: quantity }]
//       };
  
//       const response = await apiService.post('/users/search-product', posRequest);
//       console.log(response);
  
//       if (response.data && response.data.length > 0) {
//         const { itemDescription, qty, sellPrice } = response.data[0];
//         const totalPrice = parseFloat(sellPrice) * parseInt(quantity);
//         const newItem = {
//           itemDescription,
//           qty: parseInt(qty),
//           sellPrice,
//           totalPrice,
//           serialNo: serialNo
//         };
        
//         if (response.data.message === 'Insufficient quantity') {
//           setSearchResult(null);
//           setError('Quantity not sufficient');
//         } else {
//           setCartItems([...cartItems, newItem]);
//           setSearchResult(null);
//           setSerialNo('');
//           setQuantity('');
//           setError(null);
//         }
//       } else {
//         setSearchResult(null);
//         setError('Item not found');
//       }
//     } catch (error) {
//       console.log(error);
//       setSearchResult(null);
//       setError('Error searching for item');
//     }
//   };

//   const handleRemoveItem = async (index) => {
//     try {
//       const itemToRemove = cartItems[index];
//       const removeRequest = {
//         userName: loggedInUser,
//         temporaryProduct: [{ serialNo: itemToRemove.serialNo, qty: itemToRemove.qty }]
//       };

//       setIsLoading(true);

//       const response = await Promise.race([
//         apiService.post('/users/remove-cart', removeRequest),
//         new Promise((resolve, reject) =>
//           setTimeout(() => reject(new Error('Request timeout')), 20000)
//         )
//       ]);

//       setIsLoading(false);

//       if (response && response.data) {
//         setCartItems(cartItems.filter((_, i) => i !== index));
//         setResponseMsg('Item removed successfully');
//       } else {
//         setResponseMsg('Error removing item');
//       }
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false);
//       setResponseMsg('Error removing item');
//     }
//   };
//    console.log(searchResult);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await apiService.post('/users/search-product', {
//           userName: loggedInUser,
//         });

//         if (response.data && response.data.length > 0) {
//           setSearchResult(response.data[0]);
//           setError(null);
//         } else {
//           setSearchResult(null);
//           setError('No items found for the user');
//         }
//       } catch (error) {
//         console.log(error);
//         setError('Error fetching user product list');
//       }
//     };

//     fetchData();
//   }, [loggedInUser]);

//   const handleProceedToPayment = () => {
//     // Implement the logic to proceed to payment
//   };

//   return (
//     <div>
//       <Form>
//         <Form.Group controlId="formSerialNo">
//           <Form.Label>Serial No</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter serial number"
//             value={serialNo}
//             onChange={handleSerialNoChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="formQuantity">
//           <Form.Label>Quantity</Form.Label>
//           <Form.Control
//             type="number"
//             placeholder="Enter quantity"
//             value={quantity}
//             onChange={handleQuantityChange}
//           />
//         </Form.Group>

//         <Button variant="primary" onClick={handleSearch}>
//           Search
//         </Button>
//       </Form>

//       {error && <div>{error}</div>}

//       {cartItems.length > 0 && (
//         <div>
//           <Table striped bordered>
//             <thead>
//               <tr>
//                 <th>Item Description</th>
//                 <th>Quantity</th>
//                 <th>Total Price</th>
//                 <th>Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.itemDescription}</td>
//                   <td>{item.qty}</td>
//                   <td>{item.totalPrice}</td>
//                   <td>
//                     <Button
//                       variant="danger"
//                       disabled={isLoading}
//                       onClick={() => handleRemoveItem(index)}
//                     >
//                       {isLoading ? (
//                         <Spinner animation="border" size="sm" />
//                       ) : (
//                         'Remove'
//                       )}
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//           <Button variant="primary" onClick={handleProceedToPayment}>
//             Proceed to Payment
//           </Button>
//         </div>
//       )}

//       {responseMsg && <div>{responseMsg}</div>}
//     </div>
//   );
// };

// export default PosForm;




// import React, { useState, useEffect } from 'react';
// import { Form, Table, Button, Spinner } from 'react-bootstrap';
// import apiService from '../../../api-service/apiService';
// import { useSelector } from 'react-redux';

// const PosForm = () => {
//   const loggedInUser = useSelector(state => state.loggedInUser);
//   const [serialNo, setSerialNo] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [searchResult, setSearchResult] = useState(null);
//   const [error, setError] = useState(null);
//   const [cartItems, setCartItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [responseMsg, setResponseMsg] = useState('');

//   const handleSerialNoChange = (e) => {
//     setSerialNo(e.target.value);
//   };

//   const handleQuantityChange = (e) => {
//     setQuantity(e.target.value);
//   };

//   const handleSearch = async () => {
//     try {
//       const posRequest = {
//         userName: loggedInUser,
//         remainingProduct: [{ serialNo: serialNo, qty: quantity }]
//       };
//       console.log(posRequest);
//       console.log(searchResult);
//       const response = await apiService.post('/users/search-product', posRequest);

//       if (response.data && response.data.length > 0) {
//         const { itemDescription, qty, sellPrice } = response.data[0];
//         const totalPrice = parseFloat(sellPrice) * parseInt(quantity);
//         const newItem = { itemDescription, qty: parseInt(qty), sellPrice, totalPrice };

//         setCartItems([...cartItems, newItem]);
//         setSearchResult(null);
//         setSerialNo('');
//         setQuantity('');
//         setError(null);
//       } else {
//         setSearchResult(null);
//         setError('Item not found');
//       }
//     } catch (error) {
//       console.log(error);
//       setSearchResult(null);
//       setError('Error searching for item');
//     }
//   };

//   const handleRemoveItem = async (index) => {
//     try {
//       const itemToRemove = cartItems[index];
//       console.log(itemToRemove);
//       const removeRequest = {
//         userName: loggedInUser,
//         temporaryProduct: [{ serialNo: itemToRemove.serialNo, qty: itemToRemove.qty }]
//       };

//       setIsLoading(true);
//        console.log(removeRequest);
//       const response = await Promise.race([
//         apiService.post('/users/remove-cart', removeRequest),
//         new Promise((resolve, reject) =>
//           setTimeout(() => reject(new Error('Request timeout')), 20000)
//         )
//       ]);

//       setIsLoading(false);

//       if (response && response.data) {
//         setCartItems(cartItems.filter((_, i) => i !== index));
//         setResponseMsg('Item removed successfully');
//       } else {
//         setResponseMsg('Error removing item');
//       }
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false);
//       setResponseMsg('Error removing item');
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await apiService.post('/users/search-product', {
//           userName: loggedInUser,
//         });

//         if (response.data && response.data.length > 0) {
//           setSearchResult(response.data[0]);
//           setError(null);
//         } else {
//           setSearchResult(null);
//           setError('No items found for the user');
//         }
//       } catch (error) {
//         console.log(error);
//         setError('Error fetching user product list');
//       }
//     };

//     fetchData();
//   }, [loggedInUser]);

//   const handleProceedToPayment = () => {
//     // Implement the logic to proceed to payment
//   };

//   return (
//     <div>
//       <Form>
//         <Form.Group controlId="formSerialNo">
//           <Form.Label>Serial No</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter serial number"
//             value={serialNo}
//             onChange={handleSerialNoChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="formQuantity">
//           <Form.Label>Quantity</Form.Label>
//           <Form.Control
//             type="number"
//             placeholder="Enter quantity"
//             value={quantity}
//             onChange={handleQuantityChange}
//           />
//         </Form.Group>

//         <Button variant="primary" onClick={handleSearch}>
//           Search
//         </Button>
//       </Form>

//       {error && <div>{error}</div>}

//       {cartItems.length > 0 && (
//         <div>
//           <Table striped bordered>
//             <thead>
//               <tr>
//                 <th>Item Description</th>
//                 <th>Quantity</th>
//                 <th>Total Price</th>
//                 <th>Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.itemDescription}</td>
//                   <td>{item.qty}</td>
//                   <td>{item.totalPrice}</td>
//                   <td>
//                     <Button
//                       variant="danger"
//                       disabled={isLoading}
//                       onClick={() => handleRemoveItem(index)}
//                     >
//                       {isLoading ? (
//                         <Spinner animation="border" size="sm" />
//                       ) : (
//                         'Remove'
//                       )}
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//           <Button variant="primary" onClick={handleProceedToPayment}>
//             Proceed to Payment
//           </Button>
//         </div>
//       )}

//       {responseMsg && <div>{responseMsg}</div>}
//     </div>
//   );
// };

// export default PosForm;


// import React, { useState, useEffect } from 'react';
// import { Form, Table, Button } from 'react-bootstrap';
// import apiService from '../../../api-service/apiService';
// import { useSelector } from 'react-redux';

// const PosForm = () => {
//   const loggedInUser = useSelector(state => state.loggedInUser);
//   const [serialNo, setSerialNo] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [searchResult, setSearchResult] = useState(null);
//   const [error, setError] = useState(null);
//   const [cartItems, setCartItems] = useState([]);

//   const handleSerialNoChange = (e) => {
//     setSerialNo(e.target.value);
//   };

//   const handleQuantityChange = (e) => {
//     setQuantity(e.target.value);
//   };

//   const handleSearch = async () => {
//     try {
//       const posRequest = {
//         userName: loggedInUser,
//         remainingProduct: [{ serialNo: serialNo, qty: quantity }]
//       };
//       console.log(posRequest);
//       console.log(searchResult);
//       const response = await apiService.post('/users/search-product', posRequest);

//       if (response.data && response.data.length > 0) {
//         const { itemDescription, qty, sellPrice } = response.data[0];
//         const totalPrice = parseFloat(sellPrice) * parseInt(quantity);
//         const newItem = { itemDescription, qty: parseInt(qty), sellPrice, totalPrice };

//         setCartItems([...cartItems, newItem]);
//         setSearchResult(null);
//         setSerialNo('');
//         setQuantity('');
//         setError(null);
//       } else {
//         setSearchResult(null);
//         setError('Item not found');
//       }
//     } catch (error) {
//       console.log(error);
//       setSearchResult(null);
//       setError('Error searching for item');
//     }
//   };

//   const handleRemoveItem = (index) => {
//     const updatedCartItems = [...cartItems];
//     updatedCartItems.splice(index, 1);
//     setCartItems(updatedCartItems);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await apiService.post('/users/search-product', {
//           userName: loggedInUser,
//         });

//         if (response.data && response.data.length > 0) {
//           setSearchResult(response.data[0]);
//           setError(null);
//         } else {
//           setSearchResult(null);
//           setError('No items found for the user');
//         }
//       } catch (error) {
//         console.log(error);
//         setError('Error fetching user product list');
//       }
//     };

//     fetchData();
//   }, [loggedInUser]);

//   const handleProceedToPayment = () => {
//     // Implement the logic to proceed to payment
//   };

//   return (
//     <div>
//       <Form>
//         <Form.Group controlId="formSerialNo">
//           <Form.Label>Serial No</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter serial number"
//             value={serialNo}
//             onChange={handleSerialNoChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="formQuantity">
//           <Form.Label>Quantity</Form.Label>
//           <Form.Control
//             type="number"
//             placeholder="Enter quantity"
//             value={quantity}
//             onChange={handleQuantityChange}
//           />
//         </Form.Group>

//         <Button variant="primary" onClick={handleSearch}>
//           Search
//         </Button>
//       </Form>

//       {error && <div>{error}</div>}

//       {cartItems.length > 0 && (
//         <div>
//           <Table striped bordered>
//             <thead>
//               <tr>
//                 <th>Item Description</th>
//                 <th>Quantity</th>
//                 <th>Total Price</th>
//                 <th>Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.itemDescription}</td>
//                   <td>{item.qty}</td>
//                   <td>{item.totalPrice}</td>
//                   <td>
//                     <Button variant="danger" onClick={() => handleRemoveItem(index)}>
//                       Remove
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//           <Button variant="primary" onClick={handleProceedToPayment}>
//             Proceed to Payment
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PosForm;






// ///////front end with posting
// import React, { useState, useEffect } from 'react';
// import { Form, Table, Button } from 'react-bootstrap';
// import apiService from '../../../api-service/apiService';
// import { useSelector } from 'react-redux';

// const PosForm = () => {
//   const loggedInUser = useSelector(state => state.loggedInUser);
//   const [serialNo, setSerialNo] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [searchResult, setSearchResult] = useState(null);
//   const [error, setError] = useState(null);
//   const [cartItems, setCartItems] = useState([]);

//   const handleSerialNoChange = (e) => {
//     setSerialNo(e.target.value);
//   };

//   const handleQuantityChange = (e) => {
//     setQuantity(e.target.value);
//   };

//   const posRequest = {
//     userName: loggedInUser,
//     remainingProduct: [
//       {
//         serialNo: serialNo
//       }
//     ]
//   };
//     console.log(posRequest);
//     const handleSearch = async () => {
//         try {
//           const response = await apiService.post('/users/search-product', posRequest);
//           console.log(response);
//           if (response.data) {
//             setSearchResult(response.data);
//             setError(null);
//           } else {
//             setSearchResult(null);
//             setError('Item not found');
//           }
//         } catch (error) {
//           console.log(error);
//           setSearchResult(null);
//           setError('Error searching for item');
//         }
//       };

//   const handleAddToCart = async () => {
//     const { serialNo } = searchResult;

//     try {
//       // Send request to server to check remaining balance
//       const response = await apiService.post('/users/search-product', {
//         userName: serialNo,
//         remainingProduct: [{ serialNo }],
//       });

//       const remainingBalance = response.data;

//       if (remainingBalance.length > 0) {
//         // Update the cart items and other state accordingly
//         const { itemDescription, qty, sellPrice } = searchResult;
//         const totalPrice = parseFloat(sellPrice) * parseInt(quantity);
//         const newItem = { itemDescription, qty: parseInt(qty), sellPrice, totalPrice };

//         setCartItems([...cartItems, newItem]);
//         setSearchResult(null);
//         setSerialNo('');
//         setQuantity('');
//       } else {
//         setError('No remaining balance found for the product');
//       }
//     } catch (error) {
//       console.log(error);
//       setError('Error searching for remaining balance');
//     }
//   };

//   const handleRemoveItem = (index) => {
//     const updatedCartItems = [...cartItems];
//     updatedCartItems.splice(index, 1);
//     setCartItems(updatedCartItems);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const storedUser = localStorage.getItem('loggedInUser');
//         // Send request to server to fetch user product list
//         const response = await apiService.post('users/search-product', {
//           userName: storedUser,
//         });
//         console.log(response);
//         // Process the response and update state accordingly
//         // ...
//       } catch (error) {
//         console.log(error);
//         // Handle error
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <Form>
//         <Form.Group controlId="formSerialNo">
//           <Form.Label>Serial No</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter serial number"
//             value={serialNo}
//             onChange={handleSerialNoChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="formQuantity">
//           <Form.Label>Quantity</Form.Label>
//           <Form.Control
//             type="number"
//             placeholder="Enter quantity"
//             value={quantity}
//             onChange={handleQuantityChange}
//           />
//         </Form.Group>

//         <Button variant="primary" onClick={handleSearch}>
//           Search
//         </Button>
//       </Form>

//       {error && <div>{error}</div>}

//       {searchResult && (
//         <div>
//           <Table striped bordered>
//             <thead>
//               <tr>
//                 <th>Item Description</th>
//                 <th>Quantity</th>
//                 <th>Total Price</th>
//                 <th>Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{searchResult.itemDescription}</td>
//                 <td>{searchResult.qty}</td>
//                 <td>{parseFloat(searchResult.sellPrice) * parseInt(quantity)}</td>
//                 <td>
//                   <Button variant="danger" onClick={handleAddToCart}>
//                     Add to Cart
//                   </Button>
//                 </td>
//               </tr>
//             </tbody>
//           </Table>
//         </div>
//       )}

//       {cartItems.length > 0 && (
//         <div>
//           <Table striped bordered>
//             <thead>
//               <tr>
//                 <th>Item Description</th>
//                 <th>Quantity</th>
//                 <th>Total Price</th>
//                 <th>Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.itemDescription}</td>
//                   <td>{item.qty}</td>
//                   <td>{item.totalPrice}</td>
//                   <td>
//                     <Button variant="danger" onClick={() => handleRemoveItem(index)}>
//                       Remove
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PosForm;

=======
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab







