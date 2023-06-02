import React from 'react';
import Table from 'react-bootstrap/Table';

function InventoryTable() {
  const tableHeaders = [ 'Product ID', 'Entry date', 'Serial No.', 'Category', 'Description', 'Buy Price', 'Sell Price', 'Profit'];

  const productList = [
    { id: '01', entryDate: '2023-01-01', serialNo: '123456', category: 'Electronics', description: 'Smartphone', buyPrice: 500, sellPrice: 700, profit: 200 },
    { id: '02', entryDate: '2023-01-02', serialNo: '789012', category: 'Appliances', description: 'Refrigerator', buyPrice: 1000, sellPrice: 1500, profit: 500 },
    { id: '03', entryDate: '2023-01-03', serialNo: '345678', category: 'Furniture', description: 'Sofa', buyPrice: 800, sellPrice: 1200, profit: 400 },
  ];

//   const [selectedProductId, setSelectedProductId] = useState('');

//   const handleEdit = (productId) => {
//     setSelectedProductId(productId);
//     const productIndex = productList.findIndex((product) => product.id === productId);
//     if (productIndex !== -1) {
//       // Implement your edit logic here using the productIndex
//       console.log(`Edit product with ID: ${productId}`);
//       console.log('Product Details:', productList[productIndex]);
//     }
//   };

//   const handleDelete = (productId) => {
//     setSelectedProductId(productId);
//     const productIndex = productList.findIndex((product) => product.id === productId);
//     if (productIndex !== -1) {
//       // Implement your delete logic here using the productIndex
//       console.log(`Delete product with ID: ${productId}`);
//       console.log('Product Details:', productList[productIndex]);
//     }
//   };

  return (
    <div>
      <Table rresponsive="sm" striped="columns">
        <thead>
          <tr>
            <th>#</th>
            {tableHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {productList.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className='text-center'>{data.id}</td>
              <td>{data.entryDate}</td>
              <td>{data.serialNo}</td>
              <td>{data.category}</td>
              <td>{data.description}</td>
              <td>{data.buyPrice}</td>
              <td>{data.sellPrice}</td>
              <td>{data.profit}</td>
              {/* <td>
                <button onClick={() => handleEdit(data.id)}>Edit</button>
                <button onClick={() => handleDelete(data.id)}>Delete</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
      {/* {selectedProductId && (
        <div>
          Selected Product ID: {selectedProductId}
        </div>
      )} */}
    </div>
  );
}

export default InventoryTable;





