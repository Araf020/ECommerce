const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, getSingleProductDetails} = require('../controllers/productController');
const Product = require('../models/product');

const router = express.Router();

router.route("/products").get(getAllProducts);

router.post('/products/new', createProduct);

router.route('/products/:id').put(updateProduct);
router.route('/products/:id').delete(deleteProduct);
router.route('/products/:id').get(getSingleProductDetails);
module.exports = router;

