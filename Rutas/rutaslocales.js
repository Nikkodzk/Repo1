const express = require('express');
const rutaslocales = express.Router();


//home
rutaslocales.get('/', (req,res) => {
    res.render('home');
})

module.exports = rutaslocales;