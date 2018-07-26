'use strict';

var express = require('express');
var router = express.Router();
var hoteles = require('../controllers/hotelController');
var data = require('../data/data');
var app = express();


module.exports = function(app, db) {

    app.get('/hoteles', (req, resp) => {

        let name = req.query.name;
        let stars = req.query.stars;
        let filtro = data;

        if (stars && name) {
            filtro = hoteles.getByName(name, data);
            filtro = hoteles.getByStars(stars, filtro);
        } else if (name) {
            filtro = hoteles.getByName(name, data);
        } else if (stars) {
            filtro = hoteles.getByStars(stars, data);
        }

        resp.send(filtro);

    });
};