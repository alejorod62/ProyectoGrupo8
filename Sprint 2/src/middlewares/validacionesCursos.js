const { body } = require('express-validator')

let validacionesCursos = [
    body('nombre')
        .isEmpty().withMessage('Campo vacío')
        .isLength({ max: 30}),
    body('precio')
        .isEmpty().withMessage('Campo vacío')
        .isNumeric().withMessage('Ingrese un valor numérico')
        .isLength({min: 2, max: 30}),
    body('descripcion').isEmpty('Campo vacío'),
    body('horarios')
        .isLength({max:100})
        .isAlphanumeric(),
    body('duracion')
        .isLength({max:50})
        .isAlphanumeric(),
    body('requisitos').isLength({max: 200}),
    body('cuotas')
        .isNumeric().withMessage('Ingrese un valor numérico')
        .isLength({max:100}),
];  

module.exports = validacionesCursos;