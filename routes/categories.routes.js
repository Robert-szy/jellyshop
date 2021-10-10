const express = require('express');
const router = express.Router();

const categories = require('../controllers/categories.controller');

// GET request for all products.
router.get('/', categories);


module.exports = router;
