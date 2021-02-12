const mongoose = require('mongoose');
const { Schema } = mongoose;


perroSchema = new Schema(
    {
        raza: String,
        tamano: String
    }
);


module.exports = mongoose.model('perros', perroSchema);

