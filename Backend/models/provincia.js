'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var provinciaSchema = Schema({
  name:String,
  zoom:Number,
  latLng:[{lat: Number, lng: Number}],
  citys:[{cityName: String, lat: Number, lng: Number}]
});

module.exports = mongoose.model('Provincia', provinciaSchema);
