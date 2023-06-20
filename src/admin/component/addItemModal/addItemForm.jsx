import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Col, Form, Row, Alert, Spinner } from 'react-bootstrap';
import apiService from '../../../api-service/apiService';
import '../addItemModal/addItemForm.css';

function AddItemForm() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUser = localStorage.getItem('loggedInUser');
        const formattedDate = new Date().toLocaleDateString('en-US');

        if (storedUser) {
          setLoggedInUser(storedUser);
        }
        setCurrentDate(formattedDate);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const calculateProfit = (sellPrice, buyPrice, qty) => {
    if (sellPrice !== '' && buyPrice !== '' && qty !== '') {
      const sellPriceValue = parseFloat(sellPrice);
      const buyPriceValue = parseFloat(buyPrice);
      const qtyValue = parseInt(qty);
      const profit = (sellPriceValue - buyPriceValue) * qtyValue;
      return profit.toFixed(2);
    }
    return '';
  };

  const errorField = 'This field is required';
  const schema = yup.object().shape({
    userId: yup.string(),
    entryDate: yup.string(),
    serialNo: yup.number().required(errorField),
    category: yup.string().required(errorField),
    itemDescription: yup.string().required(errorField),
    qty: yup.number().required(errorField),
    buyPrice: yup.number().required(errorField),
    sellPrice: yup.number().required(errorField),
    profit: yup.number().required(errorField),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setSubmitting(true);
    setSubmissionError(false);
    setSubmissionSuccess(false);

    try {
      const currentDate = new Date();
      const date = currentDate.toLocaleDateString('en-US');
      const response = await apiService.post('/users/addproduct', {
        userId: loggedInUser,
        entryDate: date,
        serialNo: values.serialNo,
        category: values.category,
        itemDescription: values.itemDescription,
        qty: values.qty,
        buyPrice: values.buyPrice,
        sellPrice: values.sellPrice,
        profit: values.profit,
      });

      if (response.data.message === 'Item added successfully') {
        setSubmissionSuccess(true);
        resetForm();

        setTimeout(() => {
          setSubmissionSuccess(false);
        }, 3000);
      } else {
        setSubmissionError(true);
      }
    } catch (error) {
      console.log(error);
      setSubmissionError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        userId: loggedInUser,
        entryDate: currentDate,
        serialNo: '',
        category: '',
        itemDescription: '',
        qty: '',
        buyPrice: '',
        sellPrice: '',
        profit: '',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <ChildComponent
            handleChange={handleChange}
            values={values}
            touched={touched}
            errors={errors}
            calculateProfit={calculateProfit}
          />

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }} className="pt-4">
              <div className="add-item-submit-container">
              <button type="submit" onClick={handleSubmit} className="AddItemSubmitButton">
                {submitting ? (
                  <>
                    <Spinner animation="border" size="sm" /> Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
              </div>
              {submissionError && (
                <Alert variant="danger">Failed to add item.</Alert>
              )}
              {submissionSuccess && (
              <div className="add-item-submit-container">
                <Alert variant="success">Item added successfully.</Alert>
                </div>
              )}
            </Col>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
}

const ChildComponent = ({
  handleChange,
  values,
  touched,
  errors,
  calculateProfit,
}) => {
  const handleBuyPriceChange = (e) => {
    const newBuyPrice = e.target.value;
    const profit = calculateProfit(
      values.sellPrice,
      newBuyPrice,
      values.qty
    );
    handleChange({
      ...e,
      target: { name: e.target.name, value: e.target.value },
    });
    handleChange({ target: { name: 'profit', value: profit } });
  };

  const handleSellPriceChange = (e) => {
    const newSellPrice = e.target.value;
    const profit = calculateProfit(
      newSellPrice,
      values.buyPrice,
      values.qty
    );
    handleChange({
      ...e,
      target: { name: e.target.name, value: e.target.value },
    });
    handleChange({ target: { name: 'profit', value: profit } });
  };

  return (
    <>
    <div>
      <div className="d-flex d-block flex-column">
        <div className="d-flex flex-row ">
          {/* Serial No */}
          <div className="d-flex flex-row">
          <div className="d-flex container-fluid addItemInputField ">
            <Form.Group as={Row}>
              <Form.Label row sm="10">
                Serial No
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  className="add-item-input-field" 
                  type="number"
                  name="serialNo"
                  value={values.serialNo}
                  onChange={handleChange}
                  isValid={touched.serialNo && !errors.serialNo}
                  isInvalid={touched.serialNo && !!errors.serialNo}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.serialNo}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </div>
          
          {/* Quantity */}
          <div className="d-flex container-fluid ">
            <Form.Group as={Row}>
              <Form.Label row sm="10">
                Quantity
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  className="add-item-input-field" 
                  type="number"
                  name="qty"
                  value={values.qty}
                  onChange={handleChange}
                  isValid={touched.qty && !errors.qty}
                  isInvalid={touched.qty && !!errors.qty}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.qty}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </div>
        </div>
        </div>
        <div className="d-flex flex-row w-100">
          {/* Buy Price */}
          <div className="d-flex flex-row ">
            <div className="d-flex container-fluid addItemInputField">
            <Form.Group as={Row}>
              <Form.Label row sm="10">
                Buy Price
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  className="add-item-input-field" 
                  type="number"
                  name="buyPrice"
                  value={values.buyPrice}
                  onChange={handleBuyPriceChange}
                  isValid={touched.buyPrice && !errors.buyPrice}
                  isInvalid={touched.buyPrice && !!errors.buyPrice}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.buyPrice}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </div>
          
          {/* Sell Price */}
          <div className="d-flex container-fluid">
            <Form.Group as={Row}>
              <Form.Label row sm="10">
                Sell Price
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  className="add-item-input-field" 
                  type="number"
                  name="sellPrice"
                  value={values.sellPrice}
                  onChange={handleSellPriceChange}
                  isValid={touched.sellPrice && !errors.sellPrice}
                  isInvalid={touched.sellPrice && !!errors.sellPrice}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.sellPrice}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </div>
        </div>
        </div>
        {/* Category */}
        <div className="w-100 addItemInputFieldLong ">
           <div className="container-fluid ">
          <Form.Group as={Row}>
            <Form.Label row sm="11">
              Category
            </Form.Label>
            <Col sm="11">
              <Form.Control
                className="add-item-input-field" 
                type="text"
                name="category"
                value={values.category}
                onChange={handleChange}
                isValid={touched.category && !errors.category}
                isInvalid={touched.category && !!errors.category}
              />
              <Form.Control.Feedback type="invalid">
                {errors.category}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
        </div>
        </div>
        {/* Item Description */}
        <div className="w-100 addItemInputFieldLong">
        <div className="container-fluid">
          <Form.Group as={Row}>
            <Form.Label row sm="11">
              Item Description
            </Form.Label>
            <Col sm="11">
              <Form.Control
                className="add-item-input-field" 
                type="text"
                name="itemDescription"
                value={values.itemDescription}
                onChange={handleChange}
                isValid={touched.itemDescription && !errors.itemDescription}
                isInvalid={touched.itemDescription && !!errors.itemDescription}
              />
              <Form.Control.Feedback type="invalid">
                {errors.itemDescription}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AddItemForm;
