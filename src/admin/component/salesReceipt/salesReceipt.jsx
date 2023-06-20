import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import apiService from '../../../api-service/apiService';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../salesReceipt/salesReceipt.css'

function SaleReceipt({ paymentSuccessful }) {
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const [show, setShow] = useState(false);
  const [salesReceiptData, setSalesReceiptData] = useState(null);
  console.log(loggedInUser);
  useEffect(() => {
    const fetchSalesReceiptData = async () => {
      try {
        const storedUser = localStorage.getItem('loggedInUser');
        const response = await apiService.post('/users/sales-receipt', {
          userName: storedUser,
        });
        const data = response.data;
        setSalesReceiptData(data);
      } catch (error) {
        console.error('Error occurred while fetching sales receipt data:', error);
      }
    };

    if (paymentSuccessful) {
      fetchSalesReceiptData();
      setShow(true); ///// Show the modal when payment is successful
    }
  }, [paymentSuccessful]);

  function handlePrint() {
    window.print();
  }

  return (
    <>
      {/* Remove onClick event */}

      <Button className="me-2 mb-2 salesReceipt">Sales Receipt</Button>
      <Modal show={show} dialogClassName="modal-40w" onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sales Receipt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {salesReceiptData ? (
            <>
              <p>Business Name: {salesReceiptData.businessName}</p>
              <p>Sales ID: {salesReceiptData.salesList[0].salesId}</p>
              <p>Reference No: {salesReceiptData.salesList[0].referenceNo}</p>
              <p>Date: {new Date(salesReceiptData.salesList[0].date).toLocaleDateString()}</p>
              <Table striped bordered hover>
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
                  {salesReceiptData.salesList[0].items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.serialNo}</td>
                      <td>{item.category}</td>
                      <td>{item.itemDescription}</td>
                      <td>{item.qty}</td>
                      <td>{parseFloat(item.sellPrice).toFixed(2)}</td>
                      <td>{(parseFloat(item.qty) * parseFloat(item.sellPrice)).toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="5" className="text-end">
                      Total:
                    </td>
                    <td>{parseFloat(salesReceiptData.salesList[0].allTotalPrice).toFixed(2)}</td>
                  </tr>
                </tbody>
              </Table>
              <div className="d-flex justify-content-end">
                <Button className="printButton" onClick={handlePrint}>
                  Print
                </Button>
              </div>
            </>
          ) : (
            <p>Loading sales receipt data...</p>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SaleReceipt;











