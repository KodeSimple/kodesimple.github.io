const express = require('express');

const usersController = require('../controllers/users.controller');

const userRouter = express.Router();

userRouter.post('/signup', usersController.addUser); //http://localhost:8080/users/signup
userRouter.post('/login', usersController.login); //http://localhost:8080/users/login
userRouter.get('/getUsers', usersController.getAllUsers); //http://localhost:8080/users/getUsers
userRouter.put('/change-password', usersController.changePassword); //http://localhost:8080/users/change-password
userRouter.post('/productList', usersController.productList); //http://localhost:8080/users/pruductList
// Add a new product
userRouter.post('/addproduct', usersController.addProduct);  //http://localhost:8080/users/add-product

module.exports = userRouter;
