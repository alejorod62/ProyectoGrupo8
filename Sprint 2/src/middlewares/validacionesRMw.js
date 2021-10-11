const { body } = require('express-validator')

let validacionesR = [
    body('nombre')
        .notEmpty().withMessage('Campo vacio')
        .isLength({ max: 30}),
	body('apellido').isLength({ min: 2, max:50 }).withMessage('Caracteres mal empleados'),
	body('email').isEmail,
    body('clave').isLength({ min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
    body('direccion')
        .isAlphanumeric().withMessage('Ingrese una dirección válida')
        .contains(' ').withMessage('Ingrese una dirección válida'),
    body('ciudad').notEmpty().withMessage('Campo vacío'),
    body('pais').notEmpty().withMessage('Seleccione un país'),
    body('telefono').isNumeric().withMessage('Ingrese un número telefónico sin guiones ni puntos')
];  

module.exports = validacionesR;

