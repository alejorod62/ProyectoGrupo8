const apiController = require('../controller/apiController');
const express = require('express');
const router = express.Router();

router.get('/users', apiController.usuarios);
router.get('/users/count', apiController.conteoUsuarios);
router.get('/users/:id', apiController.usuariosPorId);
router.get('/users/search', apiController.busquedaUsuarios);


/////////////////////////////// CURSOS /////////////////////////////////

router.get('/courses', apiController.cursos);
router.get('/courses/count', apiController.conteoCursos);
router.get('/courses/topics', apiController.cursosPorTema);
router.get('/courses/:id', apiController.cursosPorId);
router.get('/courses/search', apiController.busquedaCursos);

router.get('/topics', apiController.temas);

module.exports = router;