'use strict';
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const server = express();
const PORT = process.env.PORT;


const weatherStatus = require('./modules/weather.js');
const movieHandler = require('./modules/movies.js');


server.use(cors());


server.get('/', Route)

server.get('/weather', weatherStatus)
server.get('/movie', movieHandler)



server.get('*', notFound)



function Route(req, res) {


    res.send('API is working')
}


function notFound(req, res) {


    res.send('not found')

}


server.listen(PORT, () => {

    console.log(`on port ${PORT}`);
});
