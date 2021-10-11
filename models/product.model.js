const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  newProduct: { type: Boolean, required: true },
  image: { type: String, required: true },

});


module.exports = mongoose.model('Products', productSchema);
