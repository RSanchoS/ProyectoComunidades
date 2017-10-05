'use strict'
// //Conexion a la base de datos
// //Creacion del Servidor

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;


mongoose.connect('mongodb://Admin:admin@ds163494.mlab.com:63494/provincias-ciudades',
function (err, res) {
 if (err) {
    throw err;
  }
 else {
  console.log("Conexion a Base de datos establecida");
    app.listen(port, function(){
     console.log("Servidor Activo");
   });
  }
});
