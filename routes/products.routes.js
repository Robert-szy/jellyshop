const express = require('express');
const router = express.Router();

const products = require('../controllers/products.controller');

// GET request for all products.
router.get('/', products.loadAll);
console.log('product from prod routes', products.loadAll );


// router.post('/products', products.add);
// router.put('/products/:id', products.xxx);

module.exports = router;
