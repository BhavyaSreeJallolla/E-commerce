const express = require('express');
const { getProducts, getProductById } = require('../controllers/productController');

const router = express.Router();

// Define your routes
router.get('/', getProducts);
router.get('/:id', getProductById);

module.exports = router;
