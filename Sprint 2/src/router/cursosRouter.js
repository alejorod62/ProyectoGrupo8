const cursosController = require('../controller/cursosController');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const restrictMw = require('../middlewares/restrictMw');
const validacionesCursos = require('.././middlewares/validacionesCursos');

/* Multer config */
const configuracionImagen = multer.diskStorage({
    destination: function(req, file, cb) {
     cb(null, path.join(__dirname,'../../public/img/cursos')); 
    },
    filename: function(req, file, cb) {   
     let imageName = Date.now() + file.originalname;  
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: configuracionImagen});

router.get('/', restrictMw, cursosController.index)
router.get('/cart', cursosController.carrito)
router.get('/details/:id', restrictMw, cursosController.detalle)
router.get('/new', cursosController.crear)
router.post('/new', uploadFile.single ("nombreImagen"), validacionesCursos, cursosController.guardar); 
router.get('/edit/:id', cursosController.editar)
router.post('/edit/:id' , uploadFile.single ("nombreImagen"), validacionesCursos, cursosController.modificar); 
router.post('/:id', cursosController.borrar); 

module.exports = router;