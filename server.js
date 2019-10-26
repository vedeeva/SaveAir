const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const fetch = require('node-fetch');

// Server will always find an open port.
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});

// Needed to process body parameters for POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Default endpoint 
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

function getCities() {
    fetch('https://api.openaq.org/v1/latest?has_geo').then( response => {
        return response.json();
    }).then(data => {
            //console.log(data.results);
        for(var i = 0; i < Object.keys(data.results).length; i++){
            var lon = data.results[i].coordinates.longtitude;
            var lat = data.results[i].coordinates.latitude;
            const aq_url = `https://api.openaq.org/v1/latest?coordinates=${lat},${lon}`; 
        }     
    })
}
getCities();