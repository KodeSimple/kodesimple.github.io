import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import apiService from '../../../api-service/apiService';
import Table from 'react-bootstrap/Table';
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

  const [userProducts, setUserProducts] = useState([]);
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const navigate = useNavigate();
  console.log(navigate);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUser = localStorage.getItem('loggedInUser');

        // Send request to server to fetch user product list
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
  }, []);

  return (
    <>
      <div>
      <h1 className="text-center my-4">Current Available Products</h1>
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
            {userProducts.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
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

