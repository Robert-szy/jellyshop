const mongoose = require('mongoose');

const connectToDB = () => {

  // connect to DB
  mongoose.connect('mongodb://localhost:27017/jellyshopDB', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;

  // on success
  db.once('open', () => {
    console.log('Connected to the database db:', db);
  });

  // on error
  db.on('error', (err) => console.log('Error ' + err));
};

module.exports = connectToDB;
