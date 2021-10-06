const fs = require('fs');
const path = require('path');

const cursosFilePath = path.join(__dirname, '../data/dataCursos.json');
const cursosTotal = JSON.parse(fs.readFileSync(cursosFilePath, 'utf-8'));

const db = require('../database/models');
const cursos = require('../database/models/cursos');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
		res.redirect('/')
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

		res.render('/') ;
	},
    borrar: (req, res) => {
		let id = req.params.id;
        let cursoElegido;
		let Ncursos = cursosTotal.filter(function(e){
			return id!=e.id;
		})

		for (let curso of cursosTotal){
			if (curso.id == id){
				cursoElegido = curso;
			}
		}
		fs.unlinkSync(path.join(__dirname, '../../public/img/cursos/', cursoElegido.ImagenCurso));
		fs.writeFileSync(cursosFilePath, JSON.stringify(Ncursos, null, ' '));
		res.redirect('/');
	}
}

module.exports = cursosController;