const router = require('express').Router();
const Distros = require('../models').Distros;
const models = require('../models/index')

function allDistros(req, res) {
  Distros.findAll({}).then(function(data) {
    res.send(data)
  }).catch(function(error) {
    console.log(" Error returning Distros", error);
    res.sendStatus(500);
  })
}


router.route('/')
.get(allDistros)

module.exports = router;
