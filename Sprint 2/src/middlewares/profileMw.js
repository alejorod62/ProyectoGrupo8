function profileMw (req, res, next) {
    if (!req.session.usuarioLogueado){
        res.redirect('user/login')
    }
    next();
}

module.exports = profileMw;