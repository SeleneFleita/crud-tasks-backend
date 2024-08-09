import {body} from 'express-validator'

export const taskValidation = [
    body('title')
    .notEmpty().withMessage("El titulo no debe estar vacio"),
    body('description')
    .notEmpty().withMessage("La descripcion no puede estar vacia"),
    body('isComplete')
    .isBoolean().withMessage("El campo isComplete debe ser boolean")
]
