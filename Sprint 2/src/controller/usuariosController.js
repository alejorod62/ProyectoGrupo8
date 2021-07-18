const usuariosController = {
    login: (req, res) => {
        res.render('user/login')
    },
    perfil: (req, res) => {
        res.render('user/profile')
    }, 
    registro: (req, res) => {
        res.render('user/register')
    }    
}

module.exports = usuariosController;