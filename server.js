const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const fetch = require('node-fetch');

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

// Get's the data from openAQ
function getCities() {
  fetch('https://api.openaq.org/v1/latest?parameter=co&has_geo').then(response => {
    return response.json();
  }).then(data => {
    var cityData=[]
    var length = Object.keys(data.results).length
    for (var i = 0; i < length; i++) {
      var city = {
        "lat" : data.results[i].coordinates.latitude,
        "lng" : data.results[i].coordinates.longitude,
        "count" : data.results[i].measurements[0].value,
      }
      cityData.push(city);
    }
  return cityData;
  }).catch(err => {
    console.log(err.error);
  });
}
var data = getCities();