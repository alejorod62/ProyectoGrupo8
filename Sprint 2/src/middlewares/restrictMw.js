function restrictMw (req, res, next) {
    res.locals.logueado = false;
    if (req.session.usuario) {
        res.locals.logueado = true;
    }

    next();
}

module.exports = restrictMw;