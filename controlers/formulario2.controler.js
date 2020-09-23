const empleadosTemporales = require('../models/formulario2.model');




//buscar emeplaeado
exports.empleadoTemporal_buscar = (req,res)=>{
    empleadosTemporales.findById(req.params.id,function (err,empleado){
        if(err) return next(err);
        res.status(200).send(empleado)
})
}

//crear empleado
exports.empleadoTemporal_crear = (req, res)=> {
    

    //instanciamos el objeto producto
  let  empleado = new empleadosTemporales({
    nombre: req.body.nombre,
    puesto: req.body.puesto,
    lugar: req.body.lugar,
    fecha: req.body.fecha,
    telefono: req.body.telefono
    });
  
    //invocamos el metodo save de mongoose.
    empleado.save(function (err) {
      if (err) {
        return next(err);
      }
      res.status(201).send("Empleado Registrado con éxito");
    });
  };


   //actualizacion de datos
exports.empleadoTemporal_actualizar = function (req, res) {
    empleadosTemporales.findByIdAndUpdate(req.params.id, { $set: req.body },  (err, empleado)=> {
      if (err) return next(err);
      res.status(200).send("Producto Actualizado.");
    });
  };
  
  //delete
 //delete
 exports.empleadoTemporal_eliminar =  function (req, res) {
  empleadosTemporales.findByIdAndDelete(req.params.id, function (err) {
    if (err) return next(err);
  res.status(200).send("Eliminado Exitósamente!");
 
  });
};

  exports.empleadoTemporal_data = async (req,res)=>{
    const empleadostem= await empleadosTemporales.find();
    res.status(200).send({empleadostem});
}