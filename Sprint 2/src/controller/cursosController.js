const fs = require('fs');
const path = require('path');

const cursosFilePath = path.join(__dirname, '../data/dataCursos.json');
const cursosTotal = JSON.parse(fs.readFileSync(cursosFilePath, 'utf-8'));

const db = require('../database/models');

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

		db.cursos.findByPk(req.params.id)
			.then(function (curso){
				res.render('products/details', {cursoElegido: curso})

			})

			db.cursos.findAll({include: [{association: 'temas'}]})
		.then(function(cursos){

			res.render('products/courses',{Allcursos: cursoElegido});

		}); 

	},
    crear: (req, res) => {
        res.render('products/new')
    } ,
    guardar: (req, res) => {

		let idNuevo = 0;
		for (curso of cursosTotal){
			if (idNuevo<curso.id){
				idNuevo = curso.id;
			}
		}
		idNuevo++ ;

		let fotoNueva = req.file.filename ;

		let cursoNuevo = {
			id: idNuevo,
			nombre: req.body.nombre,
			precio: req.body.precio,
			descripcion: req.body.descripcion,
			especific: req.body.especific,
			incluye: req.body.incluye,
			ImagenCurso: fotoNueva		
		};
		cursosTotal.push(cursoNuevo);
		fs.writeFileSync(cursosFilePath, JSON.stringify(cursosTotal, null, ' '))
		res.render('index',{cursos: cursosTotal})
	},

    editar: (req, res) => {
        let id = req.params.id;
        let cursoElegido;

        for (let curso of cursosTotal) {
            if (id == curso.id) {
                cursoElegido = curso 
            }
		}
        res.render('products/edit', {cursoEditable: cursoElegido})    
    },
    modificar: (req, res) => {
		let id = req.params.id;
		let cursoElegido;
		let fotoNueva = req.file.filename ;
		for (let curso of cursosTotal){
			if (id==curso.id){ 
				curso.nombre= req.body.nombre; 
				curso.precio= req.body.precio;
				curso.descripcion= req.body.descripcion;
				curso.especific= req.body.especific;
				curso.incluye= req.body.incluye;
				curso.ImagenCurso= fotoNueva;
				
				break;	
			//	 fs.unlinkSync(path.join(__dirname, '../../public/img/cursos/', curso.ImagenCurso));
		}
		
    	}
		fs.writeFileSync(cursosFilePath, JSON.stringify(cursosTotal, null, ' ')) ;

		res.redirect('/') ;
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