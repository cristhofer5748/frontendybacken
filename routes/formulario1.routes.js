const express = require('express');
const { check, validationResult } = require('express-validator');
const empleadopermanente =require('../models/formulario1.model');

const router = express.Router();
const empleadopermanente_controler = require('../controlers/formulario1.controler');


router.get('/',(req,res)=>{
  res.render('index')
})
router.get('/data',empleadopermanente_controler.empleadopermanente_data);


router.get('/test',empleadopermanente_controler.test);

router.post("/crear",[check("dpi").isLength({min:10})], (req, res,next)=> {
    
const errors = validationResult(req);

if(!errors.isEmpty()){
  return res.status(422).json({errors: errors.array()})
}
  //instanciamos el objeto producto
let  empleado = new empleadopermanente({
  dpi: req.body.dpi,
  nip: req.body.nip,
  pnombre: req.body.pnombre,
  snombre: req.body.snombre,
  papellido: req.body.papellido,
  sapellido: req.body.sapellido,
  fnacimiento: req.body.fnacimiento,
  apecasada: req.body.apecasada,
  pnominal: req.body.pnominal,
  pfuncional: req.body.pfuncional,
  dep: req.body.dep,
  einstitucional: req.body.einstitucional,
  epersonal: req.body.epersonal,
  ntelcasa: req.body.ntelcasa,
  ntelcelular:req.body.ntelcelular,
  });

  //invocamos el metodo save de mongoose.
  empleado.save(function (err) {
    if (err) {
      return next(err);
    }
    res.status(201).send("Empleado Registrado con éxito");
  });
});

router.get('/:id',empleadopermanente_controler.empleadopermanente_buscar);


router.put('/:id/actualizar',empleadopermanente_controler.empleadopermanente_actualizar);
router.delete("/:id/borrar", empleadopermanente_controler.empleadopermanente_borrar);

module.exports = router;


