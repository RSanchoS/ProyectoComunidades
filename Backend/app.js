'use strict'
//Configuracion de rutas y cabeceras

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var provinciaRoutes = require('./routes/provincia.js');



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configuar cabeceras
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Method', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

  next();
});
//Carga de rutas Base

app.use('/api', provinciaRoutes);


module.exports = app;
