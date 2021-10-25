const db = require('../database/models');
const Op = db.Sequelize.Op

module.exports = {

    usuarios: (req, res) => {
        db.usuarios.findAll().then((usuarios) => {

            let usuariosPublicos = [];
            for (usuario of usuarios) {
                let usuarioPublico = {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    apellido: usuario.apellido,
                    email: usuario.email,
                    ciudad: usuario.ciudad,
                    pais: usuario.pais,
                    nombreImagen: usuario.nombreImagen,
                    profesor: usuario.profesor
                }
                usuariosPublicos.push(usuarioPublico)
            }
               
            return res.json({
                code: 200,
                data: usuariosPublicos,
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
        db.usuarios.findByPk(req.params.id, {include: [{association: "cursos"}, {association: "cursosP"}]})
        .then((usuario) => {
            let dictando = []; 
            let cursando = [];

            if (usuario.cursos) {

                for (curso of usuario.cursos) {
                    cursando.push(curso.nombre)
                }
            } else if (usuario.cursosP) {
                for (cursoP of usuario.cursosP) {
                    dictando.push(cursoP.nombre)
                }
            }
            let usuarioPublico = {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    apellido: usuario.apellido,
                    email: usuario.email,
                    ciudad: usuario.ciudad,
                    pais: usuario.pais,
                    cursa: cursando,
                    dicta: dictando,
                    nombreImagen: usuario.nombreImagen,
                    profesor: usuario.profesor,
                }
/* ver pq suma un solo curso */
            return res.json({
                code: 200,
                data: usuarioPublico,
            })
        })
    },

/*    busquedaUsuarios: (req, res) => {
        db.usuarios.findAll({
            where: {
                nombre: {[Op.like]: '%' + req.query.keyword + '%' }
            }
        })
        .then((usuarios) =>{
            return res.json(usuarios)
        })
    },
*/

/////////////////////////////// CURSOS ///////////////////////////////

    cursos: (req, res) => {
        db.cursos.findAll({include: [{association: 'temas'}]})
        .then((cursos) => {

            let listaCursos = [];
            for (curso of cursos) {
                let listaTemas = [];
                for (tema of curso.temas) {
                    listaTemas.push(tema.titulo)
                }
                let cursoConTema = {
                    id: curso.id,
                    nombre: curso.nombre,
                    precio: curso.precio,
                    nombreImagen: curso.nombreImagen,
                    descripcion: curso.descripcion,
                    horarios: curso.horarios,
                    duracion: curso.duracion,
                    requisitos: curso.requisitos,
                    cuotas: curso.cuotas,
                    temas: listaTemas,
                }
                listaCursos.push(cursoConTema)
            }

            return res.json({
                code: 200,
                total: cursos.length,
                data: listaCursos,
            })
        })
    },

    conteoCursos: (req, res) => {
        db.cursos.findAll().then((cursos) => {
            return res.json({
                code: 200,
                total: cursos.length,
            })
        })
    },

    cursosPorTema: (req, res) => {
        db.temas.findAll().then((temas) => {
            let listaTemas = [];
            for (tema of temas) {
                listaTemas.push({tema: tema.titulo}, {cursos: tema.CursosFK})
            }
        return res.json({
            code: 200,
            data: listaTemas})
        })
    }, 

    cursosPorId: (req, res) => {
        db.cursos.findByPk(req.params.id, {include: [{association: 'temas'}]}).then((curso) => {
                let listaTemas = [];
                for (tema of curso.temas) {
                    listaTemas.push(tema.titulo)
                }
                let cursoConTema = {
                    id: curso.id,
                    nombre: curso.nombre,
                    precio: curso.precio,
                    nombreImagen: curso.nombreImagen,
                    descripcion: curso.descripcion,
                    horarios: curso.horarios,
                    duracion: curso.duracion,
                    requisitos: curso.requisitos,
                    cuotas: curso.cuotas,
                    temas: listaTemas,
                }

            return res.json({
                code: 200,
                data: cursoConTema,
            })
        })
    },

/*    busquedaCursos: (req, res) => {
        db.cursos.findAll({
            where: {
                nombre: {[Op.like]: '%' + req.query.keyword + '%' }
            }
        }).then((curso) =>{
            let listaTemas = [];
            for (tema of curso.temas) {
                listaTemas.push(tema.titulo)
            }
            let cursoConTema = {
                id: curso.id,
                nombre: curso.nombre,
                precio: curso.precio,
                nombreImagen: curso.nombreImagen,
                descripcion: curso.descripcion,
                horarios: curso.horarios,
                duracion: curso.duracion,
                requisitos: curso.requisitos,
                cuotas: curso.cuotas,
                temas: listaTemas,
            }

        return res.json({
            code: 200,
            data: cursoConTema,
        })
    })
},
*/
/////////////////////////////// TEMAS ///////////////////////////////

    temas: (req, res) => {
        db.temas.findAll().then((temas) => {
            return res.json({
                code: 200,
                total: temas.length,
                data: temas,
            })
        })
        /* sacar los cursos*/
    },
}
