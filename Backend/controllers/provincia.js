'use strict'

var Provincia = require('../models/provincia');

module.exports = {
  'getProvincia':function (req, res) {
    var nameProvincia = req.params.name;

    Provincia.find({name: nameProvincia}).exec(function(err, provincia) {
      if (err) {
        res.status(500).send({message: 'Error al buscar la provincia'});
      } else {
        if (!provincia) {
          res.status(404).send({message: 'No se ha encontrado la provincia'});
        } else {
          res.status(200).send({provincia: provincia});
        }
      }
    });
  }

  }
