const express = require('express');
const getAllUsersController = require('../controllers/getAllUsers.controller');
const productListController = require('../controllers/productList.controller');
const addProductController = require('../controllers/addProduct.controller');
const changePasswordController = require('../controllers/changePassword.controller');
const addUserController = require('../controllers/addUser.controller');
const loginController = require('../controllers/login.controller');
const currentProductController = require('../controllers/getAvailableBalance.controller');

const userRouter = express.Router();

userRouter.post('/signup', addUserController.addUser); //http://localhost:8080/users/signup
userRouter.post('/login', loginController.login); //http://localhost:8080/users/login
userRouter.get('/getUsers', getAllUsersController.getAllUsers); //http://localhost:8080/users/getUsers
userRouter.put('/change-password', changePasswordController.changePassword); //http://localhost:8080/users/change-password
userRouter.post('/productList', productListController.productList); //http://localhost:8080/users/pruductList
// Add a new product
userRouter.post('/addproduct', addProductController.addProduct);  //http://localhost:8080/users/add-product
userRouter.post('/current-product', currentProductController.availableBalance);  //http://localhost:8080/users/add-product

module.exports = userRouter;
