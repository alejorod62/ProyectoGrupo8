const db = require('../database/models');
const cursos = require('../database/models/cursos');
const { validationResult } = require('express-validator');

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
		db.cursos.findAll().then((cursos) =>{

			let listaCursos=[];

			for (let u of cursos){
				listaCursos.push(u);
			}
        res.render('products/cart', {cursos: listaCursos})
    	})
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
			return res.render('products/new', {listaTemas:temas});
		})
    } ,

    guardar: function (req, res) {
		const errors = validationResult(req);
		const temas = db.temas.findAll()
		if (errors.isEmpty()){
			db.cursos.create({
				nombre: req.body.nombre,
				descripcion: req.body.descripcion,
				duracion: req.body.duracion,
				horarios: req.body.horarios,
				requisitos: req.body.requisitos,
			/*	temas: req.body.temas,*/
				precio: req.body.precio,
				cuotas: req.body.cuotas,
				nombreImagen: req.body.nombreImagen,
			});
			res.redirect('/')
		} else {
			res.render('products/new', {errors: errors.array(), listaTemas: temas});
		}
	},

    editar: (req, res) => {
		let pedidoCurso = db.cursos.findByPk(req.params.id);
		let pedidoTemas = db.temas.findAll();

		Promise.all([pedidoCurso, pedidoTemas]).then(function ([cursos, temas]){
			res.render('products/edit', {cursoAEditar: cursos, temas: temas})    
		})
    },

    modificar: function (req, res) {
		const errors = validationResult(req);
/*		let temasElegidos = []; */
		if (errors.isEmpty()){
		/*	for (tema of req.body.temas){
				temasElegidos.push(tema)
			}*/
			db.cursos.update({
				nombre: req.body.nombre, 
				precio: req.body.precio,
				nombreImagen: req.body.nombreImagen,
				descripcion: req.body.descripcion,
				horarios: req.body.horarios,
/*				temas: temasElegidos, */
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
		} else {
			res.render('products/edit', {errors: errors.array(), listaTemas: temas});
		}
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