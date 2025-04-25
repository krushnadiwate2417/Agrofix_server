const express = require('express');
const userController = require('../controllers/userController');

const userRoute = express.Router();

userRoute.route('/productCatalog').get(userController.getProducts);
userRoute.route('/placeOrder').post(userController.placeOrder);
userRoute.route('/orderStatus').get(userController.getOrders);


module.exports = userRoute;