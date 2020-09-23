const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const formulariotemporal = new Schema({

        nombre: { type: String, required: true},
        puesto:{ type: String, required: true},
        lugar: { type: String, required: true},
        fecha: { type: String, required: true},
        telefono: { type: Number, required: true}

})
module.exports = mongoose.model('empleadoTemporales',formulariotemporal);