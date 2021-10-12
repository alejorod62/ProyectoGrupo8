const { check } = require('express-validator')

let validacionesR = [
    check('nombre')
        .isEmpty().withMessage('Campo vacio')
        .isLength({ max: 30}),
	check('apellido').isLength({ min: 2, max:50 }).withMessage('Caracteres mal empleados'),
	check('email').isEmail,
    check('clave').isLength({ min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
    check('direccion')
        .isAlphanumeric().withMessage('Ingrese una dirección válida')
        .contains(' ').withMessage('Ingrese una dirección válida'),
    check('ciudad').isEmpty().withMessage('Campo vacío'),
    check('pais').isEmpty().withMessage('Seleccione un país'),
    check('telefono').isNumeric().withMessage('Ingrese un número telefónico sin guiones ni puntos')
];  

module.exports = validacionesR;

