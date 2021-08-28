const cursosController = require('../controller/cursosController');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

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


router.get('/', cursosController.index)
router.get('/cart', cursosController.carrito)
router.get('/details/:id', cursosController.detalle)
router.get('/new', cursosController.crear)
router.post('/new', uploadFile.single ("ImagenCurso") , cursosController.guardar); 
router.get('/edit/:id', cursosController.editar)
router.put('/edit/:id' , uploadFile.single ("ImagenCurso") , cursosController.modificar); 
router.delete('/:id', cursosController.borrar); 

module.exports = router;