const express = require('express');
const router = express.Router();

const products = require('../controllers/products.controller');

// GET request for all products.
router.get('/', products.loadAll);

// router.put('/products/:id', products.xxx);

module.exports = router;
