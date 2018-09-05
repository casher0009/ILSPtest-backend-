const express = require('express')
const router = express.Router()
const Registro = require('../models/Registro')

router.post("/new", (req, res) => {
  Registro.create(req.boby)
    .then(registro => {console.log(registro)
      return res.status(201).json(registro);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});



module.exports = router;
