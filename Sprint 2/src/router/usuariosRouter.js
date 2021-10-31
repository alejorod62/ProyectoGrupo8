const usuariosController = require('.././controller/usuariosController');
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const profileMw = require('.././middlewares/profileMw');
const registerMw = require('.././middlewares/registerMw');
const validacionesReg = require('.././middlewares/validacionesReg');
const validacionesEdit = require('.././middlewares/validacionesEdit');

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

router.get('/login', usuariosController.login) ;
router.post('/login', usuariosController.ingreso) ;
router.get('/profile', profileMw, usuariosController.perfil) ;
router.get('/register', registerMw, usuariosController.registro) ;
router.post('/register', uploadFile.single ('nombreImagen'), validacionesReg, usuariosController.guardar) ;
router.get('/edit', usuariosController.editar) ;
router.post('/edit', uploadFile.single ('nombreImagen'), validacionesEdit, usuariosController.modificar);
router.delete('/edit', usuariosController.borrar); 
router.get('/logout', usuariosController.logout);

module.exports = router;