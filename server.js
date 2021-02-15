const express = require('express');
const app = express();
// const rutas = require('./rutas/rutas');
// const mongoose = require('mongoose');
// const engine = require('ejs-mate');

// setting
app.set('port', process.env.port || 1313);
// app.engine('ejs',engine);
// app.set('view engine','ejs');

// rutas
// app.use(express.urlencoded({extended:false}));  //JSON
// app.use('/', rutas );
app.get('/', (req, res) => {
  res.send('ok');
})

// mongoose
// mongoose.connect('mongodb://localhost:27017/perros', {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Conectado a MongoDB');
//   console.log('***************************************************');
// });


// runing
app.listen(app.get('port'), (req, res) => {
    console.log('CONSOLE LOG => Server running on port: ', app.get('port'));
});