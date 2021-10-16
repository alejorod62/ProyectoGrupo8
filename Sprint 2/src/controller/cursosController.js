const db = require('../database/models');
const cursos = require('../database/models/cursos');

const cursosController = {
    index: (req, res) => {
		db.cursos.findAll().then((cursos) =>{

			let listaCursos=[];

			for (let u of cursos){
				listaCursos.push(u);
			}
//			db.cursos.catch((error)=>{}) ;
			
		res.render('products/courses',{Allcursos: listaCursos});	
		});
    }, 

    carrito: (req, res) => {
        res.render('products/cart', {cursos: cursosTotal})
    },

    detalle: (req, res) => {
		db.cursos.findByPk(req.params.id, {include: [{association: 'temas'}]}).then((curso) =>{	
		res.render('products/details',{cursoElegido: curso});
		}
//			db.cursos.catch((error)=>{}) ;
		);

	},

    crear: (req, res) => {
		db.temas.findAll().then(function(temas){
			return res.render('products/new', {temas:temas});
		})
    } ,

    guardar: function (req, res) {
		db.cursos.create({
			nombre: req.body.nombre,
			precio: req.body.precio,
			nombreImagen: req.body.nombreImagen,
			descripcion: req.body.descripcion,
			horarios: req.body.horarios,
			duracion: req.body.duracion,
			requisitos: req.body.requisitos,
			cuotas: req.body.cuotas
		});
		res.redirect('index')
	},

    editar: (req, res) => {
		let pedidoCurso = db.cursos.findByPk(req.params.id);
		let pedidoTemas = db.temas.findAll();

		Promise.all([pedidoCurso, pedidoTemas]).then(function ([cursos, temas]){
			res.render('products/edit', {cursoAEditar: cursos, temas: temas})    
		})
    },

    modificar: function (req, res) {
		db.cursos.update({
			nombre: req.body.nombre, 
			precio: req.body.precio,
			nombreImagen: req.body.nombreImagen,
			descripcion: req.body.descripcion,
			horarios: req.body.horarios,
			duracion: req.body.duracion,
			requisitos: req.body.requisitos,
			cuotas: req.body.cuotas,
		},
		{
			where: {
				id: req.params.id
			}
		})

		res.redirect('/') ;
	},

    borrar: (req, res) => { 
          db.cursos.destroy ({
			where: {
				id: req.params.id
			}

		  }) ;
	
		res.redirect('/');
	}
}

module.exports = cursosController;