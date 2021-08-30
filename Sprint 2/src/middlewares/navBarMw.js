function navBarMw (req, res, next) {
    res.locals.logueado = false;
    
    next();
}

module.exports = navBarMw;