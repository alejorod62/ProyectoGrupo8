const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    listaUsuarios: (req, res) => {
        db.usuarios.findAll().then(usuarios => {
            return res.json({
                total: usuarios.length,
                data: usuarios,
                status: 200
            })
        })
    }
}
