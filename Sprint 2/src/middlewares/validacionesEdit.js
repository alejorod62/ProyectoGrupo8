const { check } = require('express-validator')

let validacionesEdit = [
    check('nombre')
        .isLength({ min: 5, max: 30}).withMessage('Debe ingresar entre 10 y 30 caracteres'),
	check('apellido').isLength({ min: 2, max:50 }).withMessage('Debe ingresar entre 2 y 50 caracteres'),
	check('email').isEmail().withMessage('Ingrese una dirección del email válida'),
    check('clave').isLength({ min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
    check('direccion')
        .isAlphanumeric().withMessage('Ingrese una dirección válida')
        .contains(' ').withMessage('Ingrese una dirección válida'),
    check('telefono').isNumeric().withMessage('Ingrese un número telefónico sin guiones ni puntos')
];  

module.exports = validacionesEdit;

