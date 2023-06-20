import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import apiService from '../../../api-service/apiService';
import { useSelector } from 'react-redux';
import PosTable from '../posTable/posTable';
import '../posForm/posForm.css';

const PosForm = () => {
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const [serialNo, setSerialNo] = useState('');
  const [quantity, setQuantity] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSerialNoChange = (e) => {
    setSerialNo(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSearch = async () => {
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
          serialNo: serialNo,
        };

        setCartItems([...cartItems, newItem]);
        setSearchResult(null);
        setSerialNo('');
        setQuantity('');
        setError(null);
      } else {
        setSearchResult(null);
        setError('Item not found');
        setTimeout(() => {
          setError('');
        }, 5000); // Clear the message after 5 seconds
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError('Quantity not sufficient');
        setTimeout(() => {
          setError('');
        }, 5000); // Clear the message after 5 seconds
      } else {
        // console.log(error);
        setError('Error searching or Item not found');
        setTimeout(() => {
          setError('');
        }, 5000); // Clear the message after 5 seconds
      }
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
  );
};

export default PosForm;










