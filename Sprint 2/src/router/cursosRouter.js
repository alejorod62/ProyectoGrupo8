const cursosController = require('.././controller/cursosController');
const express = require('express');
const router = express.Router();

router.get('/', cursosController.index)
router.get('/cart', cursosController.carrito)

module.exports = router;