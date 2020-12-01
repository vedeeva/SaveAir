# SaveAir
SDHack 2019 Project Submission:\
Do you know how contaminated the air you breath is?\
Check out our website's map to find out!\
Our project is to raise awareness of global air quality, direct you to great resources on how to help keep the world clean, and visualize an aspect of the world's air quality.

Here's a look at what our map looks like:
![Image](https://github.com/vedeeva/SaveAir/blob/master/public/media/Screen%20Shot%202019-10-27%20at%208.31.18%20AM.png)

To access our website, please [click here](https://saveair.herokuapp.com/index.html#top). 

The website was deployed using AWS's EC2 instances.

# Installing
To get started, please clone this repository, and download all of its dependencies:
```
git clone https://github.com/vedeeva/SaveAir.git
cd SaveAir
npm install
```
To run this website locally, please use node to run the server.js:
```
nodemon server.js
```
OR
```
node server.js
```
The terminal will output the line bellow:
```
Server listening on port 3001
```
Please open your preferred web-browser and type in: `localhost:3001`

# Contributing
Feel free to contribute to our website. Our goal to continue to add more data, and visualizations. To fully deploy your work, please contact any of the authors displayed below once ready.

# Built With
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Mapbox](https://www.mapbox.com/)
- [Leaflet](https://leafletjs.com/index.html)
- [Leaflet-Heatmap.js](https://www.patrick-wied.at/static/heatmapjs/plugin-leaflet-layer.html)
- [openAQ](https://openaq.org/#/locations?_k=eg27t1)

# Authors:
- Kevin Dong (kevindong545)
- Victoria Edeeva (vedeeva)
- Vicente Montoya (looneyvicente)
- Donald Wolfson (DonaldWolfson)

## License
MIT License.
