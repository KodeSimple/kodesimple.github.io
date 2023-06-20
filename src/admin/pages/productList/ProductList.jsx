import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function ProductList() {
  const [productList, setProductList] = useState([]);
  const userName = '0';
  const password = '0';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post('/users/login', { userName, password });
      setProductList(response.data.productList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Entry Date</th>
            <th>Serial Number</th>
            <th>Category</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Sell Price</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.entryDate}</td>
              <td>{product.serialNumber}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>{product.quantity}</td>
              <td>{product.buyPrice}</td>
              <td>{product.sellPrice}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductList;

