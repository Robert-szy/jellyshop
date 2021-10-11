const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },

});


module.exports = mongoose.model('Categories', categoriesSchema);
