//importando elementos a utilizar
const path = require('path')
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const helmet = require('helmet')
const bodyParser = require("body-parser"); //
const app = express();


//conectando a la base de datos

mongoose.connect('mongodb://administrador:123456@localhost:27017/Empleados')
.then(db => console.log('Db conectada'))
.catch(err => console.log(err));

//importando rutas
const formulario_1 = require('./routes/formulario1.routes');
const formulario_2 = require('./routes/formulario2.routes')

//ajustes de configuraciones

app.set('port',process.env.PORT || 8080);
app.set('views',path.join(__dirname,'public','views'));
app.set('view engine','ejs');


//middlewares
app.use(helmet());
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //<= sólo permitirá conexiones cruzadas desde esta URI
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//routes

app.use('/formulariouno',formulario_1);
app.use('/formulariodos',formulario_2);

//iniciando servidor 


app.listen(app.get('port'), ()=>{
    console.log(`Esta escuchando el puerto ${app.get('port')}`)
});