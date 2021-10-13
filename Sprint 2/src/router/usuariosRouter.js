const usuariosController = require('.././controller/usuariosController');
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const logueoMw = require('.././middlewares/logueoMw');
const profileMw = require('.././middlewares/profileMw');
const validacionesR = require('.././middlewares/validacionesR');

/* Multer config */

const configImagenPerfil = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/img/usuarios'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: configImagenPerfil });

router.get('/login', /*logueoMw,*/ usuariosController.login) ;
router.post('/login', usuariosController.ingreso) ;
router.get('/profile', /*profileMw,*/ usuariosController.perfil) ;
router.get('/register', /*logueoMw, */usuariosController.registro) ;
router.post('/register', uploadFile.single ('nombreImagen'), validacionesR, usuariosController.guardar) ;
router.get('/edit/:id', usuariosController.editar) ;
router.put('/edit/:id', uploadFile.single ('nombreImagen'), usuariosController.modificar);
router.delete('/edit/:id', usuariosController.borrar); 
router.get('/logout', usuariosController.logout);

module.exports = router;