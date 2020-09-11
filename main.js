//
const express = require('express');
const app = express();
const rutaslocales = require('./Rutas/rutaslocales');


//setting
app.set('port', process.env.PORT || 1313);
app.set('view engine','ejs');

//use
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

//rutas
app.use('/', rutaslocales );


//listening
app.listen(app.get('port'), (req,res) => {
    console.log('Server runing on port: ', app.get('port'));
})