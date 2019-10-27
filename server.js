const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const fetch = require('node-fetch');
require ('dotenv').config();

// Needed to process body parameters for POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Needed to use External Stylesheet with NodeJS and Express
app.use(express.static(__dirname + '/public'));

// Default endpoint 
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Server will always find an open port.
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});