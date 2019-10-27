# SaveAir
SD Hacks 2019 project\
Do you know how contaminated the air you breath is?\
Check out our website's map to find out!\
Our project was to raise awareness of global air quality, direct your to great recources on how to help keep the world clean, and visualize an aspect of the world's air quality.

Here's a look at what our map looks like:
![Image](https://github.com/vedeeva/SaveAir/blob/master/public/media/Screen%20Shot%202019-10-27%20at%208.31.18%20AM.png)

To access our website, please [click here](http://18.191.117.19:3001/index.html#top). 

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

# Deployment
If you would like to have the public site updated with your work, please contact any of the authors displayed. We'll have to deploy it using AWS on our side.

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
- Donald Wolfson (dwolfson486)

## License
MIT License.
