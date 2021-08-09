const usuariosController = require('.././controller/usuariosController');
const express = require('express');
const router = express.Router();


router.get('/login', usuariosController.login)
router.get('/profile', usuariosController.perfil)
router.get('/register', usuariosController.registro)
router.post('/new', usuariosController.crear);
router.get('/:id/edit', usuariosController.editar)
router.put('/:id/edit', usuariosController.modificar);
module.exports = router;