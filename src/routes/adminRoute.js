const express = require('express');
const adminController = require('../controllers/adminController');


const adminRoute = express.Router();

adminRoute.route('/productCatalog').get(adminController.getProducts);
adminRoute.route('/orderStatus').put(adminController.updateStatus);
adminRoute.route('/addProduct').post(adminController.addProducts);
adminRoute.route('/deleteProduct/:productId').delete(adminController.deleteProduct);
adminRoute.route('/updateProduct').put(adminController.updateProduct);


module.exports = adminRoute;