const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formularioEmpleadoPermanente = new Schema({
    dpi:{ type: Number, required:true},
    nip:{ type: Number, required:true},
    pnombre:{ type: String , required:true},
    snombre: { type: String},
    papellido: { type: String, required:true},
    sapellido: { type: String},
    fnacimiento: { type: String, required:true},
    apecasada: { type: String},
    pnominal: { type: String},
    pfuncional: { type: String},
    dep: { type: String},
    einstitucional: { type: String},
    epersonal: { type: String, required:true},
    ntelcasa: { type: Number},
    ntelcelular:{ type: Number, required:true},

});

module.exports = mongoose.model('empleadosPermanentes',formularioEmpleadoPermanente);