const express = require('express');
const router = express.Router();
const empleadosTemporales = require('../controlers/formulario2.controler');

router.get('/data',empleadosTemporales.empleadoTemporal_data);
router.get('/:id',empleadosTemporales.empleadoTemporal_buscar);

router.post('/crear',empleadosTemporales.empleadoTemporal_crear);

router.put('/:id/actualizar',empleadosTemporales.empleadoTemporal_actualizar);
router.delete("/:id/borrar", empleadosTemporales.empleadoTemporal_eliminar)

module.exports = router;