function registerMw (req, res, next) {
    if (req.session.usuario){
        return res.redirect('/user/profile')
    }
        next();
}

module.exports = registerMw;