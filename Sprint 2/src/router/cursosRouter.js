const cursosController = require('.././controller/cursosController');
const express = require('express');
const router = express.Router();

router.get('/', cursosController.index)
router.get('/cart', cursosController.carrito)
router.get('/details/:id', cursosController.detalle)
router.get('/new', cursosController.nuevo)

module.exports = router;