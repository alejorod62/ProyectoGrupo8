const cursosController = require('.././controller/cursosController');
const express = require('express');
const router = express.Router();


router.get('/', cursosController.index)
router.get('/cart', cursosController.carrito)
router.get('/:id/details', cursosController.detalle)
router.get('/new', cursosController.nuevo)
router.get('/:id/edit', cursosController.editar)

module.exports = router;