const express = require('express');
const rutaslocales = express.Router();
const verduras = require('../Public/verduras');


//home
rutaslocales.get('/', (req,res) => {
    res.render('home');
})

//calculo
rutaslocales.post('/calculo', (req,res) => {

    const datos = req.body;

    res.render('calculo', { verduras,datos } );

})

module.exports = rutaslocales;