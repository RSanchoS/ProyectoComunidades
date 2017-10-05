'use strict'

var express = require('express');
var ProvinciaController = require('../controllers/provincia.js');

var api = express.Router();

api.get('/search/:name', ProvinciaController.getProvincia);

module.exports = api;
