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

// List of ice cream flavors
const iceCreams = [];

// Needed to process body parameters for POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Default endpoint 
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Inserting an ice cream
app.post('/insertData', (req, res) => {
    const params = req.body;
    iceCreams.push(params.flavor);
    res.redirect('/');
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
// Gets Air Quality Data
 /*  app.get('/', async (req, res) => {
        
        const aq_url = `https://api.openaq.org/v1/latest?coordinates=${lat},${lon}`;
        const aq_response = await fetch(aq_url);
        const aq_data = await aq_response.json();
        const data = {
            air_quality: aq_data
          };
          response.json(data);
});

// TODO: Write a GET request to /count that checks iterates through 
//       the array and sends how many of a certain ice cream flavor 
//       exists to the response.
//       Use req.param.flavor to grab the flavor parameter.

// TODO: Write a GET request to /randomFlavor that sends a random 
//       flavor from our array to the response.

// Method that gets a random index from the iceCreams array
function getRandomNumber() {
    const num = Math.floor(Math.random() * iceCreams.length);
    return num;
} */