const { check } = require('express-validator')

let validacionesLog = [
	check('email').isEmail().withMessage('Ingrese una dirección del email válida'),
    check('clave').isLength({ min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
];  

module.exports = validacionesLog;