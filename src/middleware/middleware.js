import { validationResult } from 'express-validator';
const controlador = (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json(error);
    }
    next();

}
export default controlador
