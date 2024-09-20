const express = require('express');
const { traerProductos, crearProducto, borrarProducto, actualizarProducto} = require('../controllers/productoController.js');

const router = express.Router();

router.get('/', traerProductos)

router.post('/', crearProducto);

router.delete("/:id", borrarProducto);

router.put("/:id", actualizarProducto);

module.exports = router;