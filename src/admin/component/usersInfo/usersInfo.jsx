import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert, Button, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import apiService from '../../../api-service/apiService';
import '../usersInfo/userInfo.css';

const UserInfo = () => {
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState('');

  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isInputActive, setIsInputActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowChangePasswordForm = () => {
    setShowChangePasswordForm(true);
  };

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  console.log(oldPassword);
  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handlePasswordChangeSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log({
        userName: loggedInUser,
        password: oldPassword,
      });
      const loginResponse = await apiService.post('/users/login', {
        userName: loggedInUser,
        password: oldPassword,
      });

      const response = loginResponse.data.message;
      console.log(response);
      if (response === 'Login successful') {
        if (newPassword !== confirmPassword) {
          throw new Error('New password and confirm password do not match');
        }

        const changePasswordResponse = await apiService.put('/users/change-password', {
          userName: loggedInUser,
          password: newPassword,
        });

        const successMessage = `User ${loggedInUser}'s password has been updated`;
        if (!successMessage) {
          const errorData = changePasswordResponse.data.message;
          alert('error');
          throw new Error(errorData.message);
        } else {
          setShowModal(true);
        }

        ///// Password changed successfully
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setShowChangePasswordForm(false);
        setError('');
      } else {
        throw new Error('Old password entered not match');
      }
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError('');
      }, 20000);
    }
  };

  useEffect(() => {
    const fetchBusinessUserData = async () => {
      try {
        const response = await apiService.post('/users/user-info', {
          userName: loggedInUser,
        });

        const userData = response.data;
        setUserInfo(userData);
        setError('');
      } catch (error) {
        setError(error.message);
        setUserInfo(null);
      }
    };

    if (loggedInUser) {
      fetchBusinessUserData();
    }
  }, [loggedInUser]);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      
      <div className="pt-5">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={8} md={6}>
              {userInfo && (
                <div className="d-flex justify-content-center w-100 userDetailsContainer">
                  <div className="w-75 pt-2">
                    <div className="text-center pb-3 pt-3">
                       <h1>User's Information</h1>
                    </div>
                    <div className="d-flex flex-row flex-wrap">
                      <div className="tagName">
                        <h4>Business Name:</h4>
                      </div>
                      <div className="d-flex justify-content-left px-2 pb-2">
                        <h4>{userInfo.businessName}</h4>
                      </div>
                    </div>
                    <div className="d-flex flex-row flex-wrap">
                      <div className="tagName">
                        <h4>First Name:</h4>
                      </div>
                      <div className="d-flex justify-content-left px-2 pb-2">
                        <h4>{userInfo.firstName}</h4>
                      </div>
                    </div>
                    <div className="d-flex flex-row flex-wrap">
                      <div className="tagName">
                        <h4>Last Name: </h4>
                      </div>
                      <div className="d-flex justify-content-left px-2 pb-2">
                        <h4>{userInfo.lastName}</h4>
                      </div>
                    </div>
                    <div className="d-flex flex-row flex-wrap">
                      <div className="tagName">
                        <h4>Username:</h4>
                      </div>
                      <div className="d-flex justify-content-left px-2 pb-2">
                        <h4>{userInfo.userName}</h4>
                      </div>
                    </div>
                    <div className="d-flex flex-row flex-wrap">
                      <div className="tagName">
                        <h4>Email:</h4>
                      </div>
                      <div className="d-flex justify-content-left px-2 pb-2">
                        <h4>{userInfo.email}</h4>
                      </div>
                    </div>
                    {/* <p>Password: {userInfo.password}</p> */}
                    <div className="d-flex flex-row flex-wrap">
                      <div className="tagName">
                        <h4>Password:</h4>
                      </div>
                      <div className="d-flex justify-content-left px-2 pb-3">
                      <Button className="change-password-form" onClick={handleShowChangePasswordForm}>
                        Change Password
                      </Button>
                      </div>
                    </div>
                    <div className="text-center">
                      {error && !isInputActive && <Alert variant="danger">{error}</Alert>}
                    </div>
                    {showChangePasswordForm && (
                      <Form onSubmit={handlePasswordChangeSubmit}>
                        <Form.Group controlId="oldPassword">
                          <Form.Label>Enter Old Password</Form.Label>
                          <Form.Control
                            required
                            className="input-password-field"
                            type="password"
                            placeholder="Enter old password"
                            value={oldPassword}
                            onChange={handleOldPasswordChange}
                            onFocus={() => setIsInputActive(true)}
                            onBlur={() => setIsInputActive(false)}
                          />
                        </Form.Group>
                        <Form.Group controlId="newPassword">
                          <Form.Label>Enter New Password</Form.Label>
                          <Form.Control
                            required
                            className="input-password-field"
                            placeholder="Enter new password"
                            type="password"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                            onFocus={() => setIsInputActive(true)}
                            onBlur={() => setIsInputActive(false)}
                          />
                        </Form.Group>
                        <Form.Group controlId="confirmPassword">
                          <Form.Label>Confirm New Password</Form.Label>
                          <Form.Control
                            required
                            className="input-password-field"
                            placeholder="Confirm new password"
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            onFocus={() => setIsInputActive(true)}
                            onBlur={() => setIsInputActive(false)}
                          />
                        </Form.Group>
                        <div className="pt-3 pb-4">
                          <Button className="changePasswordSubmitButton" type="submit">
                            Submit
                          </Button>
                        </div>
                      </Form>
                    )}
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      {showModal && (
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>Password is updated</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default UserInfo;



