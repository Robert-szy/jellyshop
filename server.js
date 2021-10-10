const express = require('express');
const path = require('path');
const cors = require('cors');

const connectToDB = require('./db');

// start express server
const app = express();

// connect to DB
connectToDB();

// add middleware
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/src')));

// add product routes
app.use('/', require('./routes/products.routes'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});



const server = app.listen('8000', () => {
  console.log('Server is running on port: 8000');
});

module.exports = server;
