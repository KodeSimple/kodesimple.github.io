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
        const formattedDate = new Date().toISOString().slice(0, 10);

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

  const handleSubmit = async (values) => {
    setSubmitting(true);
    setSubmissionError(false);
    setSubmissionSuccess(false);

    try {
      const response = await apiService.post('/users/addproduct', {
        userId: loggedInUser,
        entryDate: currentDate,
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
          {/* Form fields and components */}
          <ChildComponent
            handleChange={handleChange}
            values={values}
            touched={touched}
            errors={errors}
            calculateProfit={calculateProfit}
          />

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }} className="px-5 pt-4">
              <div></div>
              <button type="submit" className="AddItemSubmitButton">
                {submitting ? (
                  <>
                    <Spinner animation="border" size="sm" /> Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
              {submissionError && (
                <Alert variant="danger">Failed to add item.</Alert>
              )}
              {submissionSuccess && (
                <Alert variant="success">Item added successfully.</Alert>
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
      <div className="d-flex d-block flex-row flex-wrap justify-content-start">
        <div className="d-flex flex-row w-100">
          <div>
            <Form.Group as={Row}>
              <Form.Label row sm="10">
                Serial No
              </Form.Label>
              <Col sm="10">
                <Form.Control
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
          <div>
            <Form.Group as={Row}>
              <Form.Label row sm="10">
                Quantity
              </Form.Label>
              <Col sm="10">
                <Form.Control
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
        <div className="d-flex flex-row w-100">
          <div>
            <Form.Group as={Row}>
              <Form.Label row sm="10">
                Buy Price
              </Form.Label>
              <Col sm="10">
                <Form.Control
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
          <div>
            <Form.Group as={Row}>
              <Form.Label row sm="10">
                Sell Price
              </Form.Label>
              <Col sm="10">
                <Form.Control
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
        <div className="w-100">
          <Form.Group as={Row}>
            <Form.Label row sm="11">
              Category
            </Form.Label>
            <Col sm="11">
              <Form.Control
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
        <div className="w-100">
          <Form.Group as={Row}>
            <Form.Label row sm="11">
              Item Description
            </Form.Label>
            <Col sm="11">
              <Form.Control
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
    </>
  );
};

export default AddItemForm;



// import React, { useState, useEffect } from 'react';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import { Col, Form, Row, Alert, Spinner } from 'react-bootstrap';
// import apiService from '../../../api-service/apiService';
// import '../addItemModal/addItemForm.css'

// function AddItemForm() {
//   const [loggedInUser, setLoggedInUser] = useState('');
//   const [currentDate, setCurrentDate] = useState('');
//   const [submitting, setSubmitting] = useState(false);
//   const [submissionError, setSubmissionError] = useState(false);
//   const [submissionSuccess, setSubmissionSuccess] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const storedUser = localStorage.getItem('loggedInUser');
//         const formattedDate = new Date().toISOString().slice(0, 10);
//         console.log(storedUser);
//         if (storedUser) {
//           setLoggedInUser(storedUser);
//         }
//         setCurrentDate(formattedDate);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);
   
//   const calculateProfit = (sellPrice, buyPrice, qty) => {
//     if (sellPrice !== '' && buyPrice !== '' && qty !== '') {
//       const sellPriceValue = parseFloat(sellPrice);
//       const buyPriceValue = parseFloat(buyPrice);
//       const qtyValue = parseInt(qty);
//       const profit = (sellPriceValue - buyPriceValue) * qtyValue;
//       return profit.toFixed(2);
//     }
//     return '';
//   };
//   const errorField = 'This field is required';
//   const schema = yup.object().shape({
//     userId: yup.string(),
//     entryDate: yup.string(),
//     serialNo: yup.number().required(errorField),
//     category: yup.string().required(errorField),
//     itemDescription: yup.string().required(errorField),
//     qty: yup.number().required(errorField),
//     buyPrice: yup.number().required(errorField),
//     sellPrice: yup.number().required(errorField),
//     profit: yup.number().required(errorField),
//   });

//   const handleSubmit = async (values) => {
//     try {
//       setSubmitting(true);
//       setSubmissionError(false);
//       setSubmissionSuccess(false);
//       // console.log(values);
      
//       // Send POST request to the server with form data
//       apiService
//         .post('/users/addproduct', {
//           userId: loggedInUser,
//           entryDate: currentDate,
//           serialNo: values.serialNo,
//           category: values.category,
//           itemDescription: values.itemDescription,
//           qty: values.qty,
//           buyPrice: values.buyPrice,
//           sellPrice: values.sellPrice,
//           profit: values.profit
//         })
//         .then((response) => {
//           // console.log(response); // Log the response data
  
//           if (response.data.message === 'Item added successfully') {
//             setSubmissionSuccess(true);
//           } else {
//             setSubmissionError(true);
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//           setSubmissionError(true);
//         })
//         .finally(() => {
//           setSubmitting(false);
//         });
//     } catch (error) {
//       console.log(error);
//       setSubmissionError(true);
//       setSubmitting(false);
//     }
//   };
  
  
//   //////////////post new product to server ends here/////////////////////////////////
//   // console.log(currentDate);
//   // console.log(loggedInUser);
//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={handleSubmit}
//       initialValues={{
//         userId: loggedInUser,
//         entryDate: currentDate,
//         // userId: '1',
//         // entryDate: '1234',
//         serialNo: '',
//         category: '',
//         itemDescription: '',
//         qty: '',
//         buyPrice: '',
//         sellPrice: '',
//         profit: '',
//       }}
//     >
//       {({ handleSubmit, handleChange, values, touched, errors }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           {/* Form fields and components */}
//           <ChildComponent
//             handleChange={handleChange}
//             values={values}
//             touched={touched}
//             errors={errors}
//             calculateProfit={calculateProfit}
//           />

//           <Form.Group as={Row}>
//             <Col sm={{ span: 10, offset: 2 }} className="px-5 pt-4">
//               <div></div>
//               <button type="submit" className="AddItemSubmitButton">
//                 {submitting ? (
//                   <>
//                     <Spinner animation="border" size="sm" /> Submitting...
//                   </>
//                 ) : (
//                   'Submit'
//                 )}
//               </button>
//               {submissionError && (
//                 <Alert variant="danger">Failed to add item.</Alert>
//               )}
//               {submissionSuccess && (
//                 <Alert variant="success">Item added successfully.</Alert>
//               )}
//             </Col>
//           </Form.Group>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// const ChildComponent = ({
//   handleChange,
//   values,
//   touched,
//   errors,
//   calculateProfit,
// }) => {
//   const handleBuyPriceChange = (e) => {
//     const newBuyPrice = e.target.value;
//     const profit = calculateProfit(
//       values.sellPrice,
//       newBuyPrice,
//       values.qty
//     );
//     handleChange(e);
//     handleChange({ target: { name: 'profit', value: profit } });
//   };

//   const handleSellPriceChange = (e) => {
//     const newSellPrice = e.target.value;
//     const profit = calculateProfit(
//       newSellPrice,
//       values.buyPrice,
//       values.qty
//     );
//     handleChange(e);
//     handleChange({ target: { name: 'profit', value: profit } });
//   };

//   return (
//     <>

//   <div className="d-flex d-block flex-row flex-wrap justify-content-start">
//           <div className="d-flex flex-row w-100">
//                <div>
//                 <Form.Group as={Row}>
//                   <Form.Label row sm="10">
//                     Serial No
//                   </Form.Label>
//                   <Col sm="10">
//                     <Form.Control
//                       type="number"
//                       name="serialNo"
//                       value={values.serialNo}
//                       onChange={handleChange}
//                       isValid={touched.serialNo && !errors.serialNo}
//                       isInvalid={touched.serialNo && !!errors.serialNo}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.serialNo}
//                     </Form.Control.Feedback>
//                   </Col>
//                 </Form.Group>
//               </div> 
//               <div>
//                 <Form.Group as={Row}>
//                   <Form.Label row sm="10">
//                     Quantity
//                   </Form.Label>
//                   <Col sm="10">
//                     <Form.Control
//                       type="number"
//                       name="qty"
//                       value={values.qty}
//                       onChange={handleChange}
//                       isValid={touched.qty && !errors.qty}
//                       isInvalid={touched.qty && !!errors.qty}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.qty}
//                     </Form.Control.Feedback>
//                   </Col>
//                 </Form.Group>
//                 </div>
//           </div>    
//           <div className="d-flex flex-row w-100">
//              <div>
//                 <Form.Group as={Row}>
//                   <Form.Label row sm="10">
//                     Buy Price
//                   </Form.Label>
//                   <Col sm="10">
//                     <Form.Control
//                       type="number"
//                       name="buyPrice"
//                       value={values.buyPrice}
//                       onChange={handleBuyPriceChange}
//                       isValid={touched.buyPrice && !errors.buyPrice}
//                       isInvalid={touched.buyPrice && !!errors.buyPrice}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.buyPrice}
//                     </Form.Control.Feedback>
//                   </Col>
//                 </Form.Group>
//                 </div>
//                 <div>
//                 <Form.Group as={Row}>
//                   <Form.Label row sm="10">
//                     Sell Price
//                   </Form.Label>
//                   <Col sm="10">
//                     <Form.Control
//                       type="number"
//                       name="sellPrice"
//                       value={values.sellPrice}
//                       onChange={handleSellPriceChange}
//                       isValid={touched.sellPrice && !errors.sellPrice}
//                       isInvalid={touched.sellPrice && !!errors.sellPrice}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.sellPrice}
//                     </Form.Control.Feedback>
//                   </Col>
//                 </Form.Group >
//                  </div>
//            </div> 
//       <div className="w-100">
//       <Form.Group as={Row}>
//         <Form.Label row sm="11">
//           Category
//         </Form.Label>
//         <Col sm="11">
//           <Form.Control
//             type="text"
//             name="category"
//             value={values.category}
//             onChange={handleChange}
//             isValid={touched.category && !errors.category}
//             isInvalid={touched.category && !!errors.category}
//           />
//           <Form.Control.Feedback type="invalid">
//             {errors.category}
//           </Form.Control.Feedback>
//         </Col>
//       </Form.Group>
//       </div>
//       <div className="w-100">
//       <Form.Group as={Row}>
//         <Form.Label row sm="11">
//           Item Description
//         </Form.Label>
//         <Col sm="11">
//           <Form.Control
//             type="text"
//             name="itemDescription"
//             value={values.itemDescription}
//             onChange={handleChange}
//             isValid={touched.itemDescription && !errors.itemDescription}
//             isInvalid={touched.itemDescription && !!errors.itemDescription}
//           />
//           <Form.Control.Feedback type="invalid">
//             {errors.itemDescription}
//           </Form.Control.Feedback>
//         </Col>
//       </Form.Group>
//       </div>
//   </div>
//     </>
//   );
// };

// export default AddItemForm;
