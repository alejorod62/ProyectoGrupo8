const usuariosController = require('.././controller/usuariosController');
const express = require('express');
const router = express.Router();

router.get('/login', usuariosController.login)
router.get('/profile', usuariosController.perfil)
router.get('/register', usuariosController.registro)

module.exports = router;