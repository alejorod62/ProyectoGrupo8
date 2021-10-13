const { body } = require('express-validator')

let validacionesCursos = [
    body('nombre')
        .notEmpty().withMessage('Campo vacío').bail()
        .isLength({ min: 5, max: 30}).withMessage('Debe ingresar entre 5 y 30 caracteres'),
    body('descripcion').notEmpty().withMessage('Campo vacío'),
    body('duracion')
        .notEmpty().withMessage('Campo vacío')
        .isLength({min: 10, max:50}).withMessage('Debe ingresar entre 10 y 50 caracteres')
        .isAlphanumeric().withMessage('Especifique la duración y cantidad de encuentros'),
    body('horarios')
        .notEmpty().withMessage('Campo vacío')
        .isLength({min: 10, max:100}).withMessage('Debe ingresar entre 10 y 100 caracteres')
        .isAlphanumeric().withMessage('Especifique horarios y días'),
    body('requisitos')
        .notEmpty().withMessage('Campo vacío')
        .isLength({min: 10, max: 200}).withMessage('Debe ingresar entre 10 y 200 caracteres'),
    body('precio')
        .notEmpty().withMessage('Campo vacío')
        .isNumeric().withMessage('Ingrese un valor numérico')
        .isLength({min: 2, max: 30}).withMessage('Debe ingresar entre 2 y 30 caracteres'),
    body('cuotas')
        .notEmpty().withMessage('Campo vacío')
        .isNumeric().withMessage('Ingrese un valor numérico')
        .isLength({max:100}).withMessage('No debe superar los 100 caracteres'),
];  

module.exports = validacionesCursos;