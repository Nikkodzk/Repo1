const express = require('express');
const rutas = express.Router();
const Perro = require('../models/perro');


// rutas.get('/', async (req, res) => {
//     const perros = await Perro.find();
//     res.render('index', { perros });
// })

rutas.get('/', (req, res) => {

    res.send('OK');
})

rutas.post('/add', async (req, res, next) => {

    // res.send(req.body);
    
    // console.log('CONSOLE LOG => ', req.body );
    const perro = new Perro(req.body);
    // perro.raza = req.body.raza;
    // perro.tamano = req.body.tamano;
    await perro.save();

    res.redirect('/');
})



module.exports = rutas;