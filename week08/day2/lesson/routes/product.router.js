const { getAllProducts, getProductById, insertProduct } = require('../controllers/products.controller.js')

const express = require('express')

const router = express.Router()

router.get('/api/products', getAllProducts);
router.get('/api/products/:id', getProductById);
router.post('/api/products', insertProduct);

module.exports = {
    router
};