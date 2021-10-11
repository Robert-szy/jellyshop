const Products = require('../models/product.model');

exports.loadAll = async (req, res) => {

  try {
    res.json(await Products.find());
    console.log('prod control', Products.find());
  } catch(err) {
    res.status(500).json(err);
  }

};
