const db = require('../database/models');
const Op = db.Sequelize.Op

module.exports = {

    usuarios: (req, res) => {
        db.usuarios.findAll()
        .then((usuarios) => {
            return res.json({
                code: 200,
                data: usuarios,
            })
        })
    },
    conteoUsuarios: (req, res) => {
        db.usuarios.findAll().count().then((usuarios) => {
            return res.json({
                code: 200,
                total: usuarios.length,
            })
        })
    },
    usuariosPorId: (req, res) => {
        db.usuarios.findByPk(req.params.id, {include: [{association: "cursos"}, {association: "cursosP"}]}).then((usuario) => {
            return res.json({
                code: 200,
                data: usuario,
            })
        })
// (no retornar password o datos sensibles)
    },
    busquedaUsuarios: (req, res) => {
        db.usuarios.findAll({
            where: {
                nombre: {[Op.like]: '%' + req.query.keyword + '%' }
            }
        })
        .then((usuarios) =>{
            return res.json(usuarios)
        })
    },


/////////////////////////////// CURSOS ///////////////////////////////

/*** Un servicio retorne todos los productos, tendrá un objeto con la estructura:

. countByCategory --> Cantidad de productos por categoría

*/

    cursos: (req, res) => {
        db.cursos.findAll({include: [{association: 'temas'}]}).then((cursos) => {
            return res.json({
                total: cursos.length,
                data: cursos,
                code: 200,
            })
        })
    },
    conteoCursos: (req, res) => {
        db.cursos.findAll().count().then((cursos) => {
            return res.json({
                code: 200,
                total: cursos.length,
            })
        })
    },
    cursosPorId: (req, res) => {
        db.cursos.findByPk(req.params.id, {include: [{association: 'temas'}]}).then((cursos) => {
            return res.json({
                code: 200,
                data: cursos,
            })
        })
        //  Tener en cuenta los datos de tablas relacionadas y la ruta de la imagen del producto //
    },
    busquedaCursos: (req, res) => {
        db.cursos.findAll({
            where: {
                nombre: {[Op.like]: '%' + req.query.keyword + '%' }
            }
        }).then((cursos) =>{
            return res.json(cursos)
        })
    },

/////////////////////////////// TEMAS ///////////////////////////////

    temas: (req, res) => {
        db.temas.findAll().then((temas) => {
            return res.json({
                code: 200,
                total: temas.length,
                data: temas,
            })
        })
    },

}
