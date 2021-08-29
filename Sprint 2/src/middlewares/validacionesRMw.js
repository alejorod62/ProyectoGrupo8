const { body } = require('express-validator')

let validacionesR = [
    body('nombre').notEmpty().withMessage('Campo vacio'),
	body('apellido').isLength({ min: 2, max:15 }).withMessage('Caracteres mal empleados'),
	body('email').isEmail,
    body('password').isLength({ min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
    body('direccion')
        .isAlphanumeric()
        .contains(' '),
    body('cp').isNumeric
];  

module.exports = validacionesR;

