const db = require('../database/models');
const usuarios = require('../database/models/usuarios');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const usuariosController = {
    login: (req, res) => {
        res.render('user/login')
    },
	ingreso: (req, res) => {
	/* console.log(req.body.email)
	let usuarioP = db.usuarios.findOne({
			where: { email: req.body.email}
		})
		console.log(usuarioP)
	}, */
		db.usuarios.findOne({
			where: {
				email: req.body.email,
			}
		}) 
		.then ((usuarioExistente) => {
			if (usuarioExistente) {
			let passCorrecta = bcryptjs.compareSync(req.body.clave, usuarioExistente.clave);
			if (passCorrecta==true) {
				delete usuarioExistente.clave;
				req.session.usuarioLogueado = usuarioExistente
				res.redirect('/user/profile', {perfil: usuarioElegido}); 
			} else {
				res.send('Contraseña incorrecta') //proximamente armamos error y validaciones 
			}
			} else {
				res.send('Usuario inexistente') //proximamente armamos error y validaciones 
			}
		})
	},
    perfil: (req, res) => {
	/*	let id = req.params.id;
        let usuarioElegido

        for (let usuario of usuariosTotal)
            if (id == usuario.id) {
                usuarioElegido = usuario;
				break;
            }*/
        res.render('user/profile', {usuario: req.session.usuarioLogueado})
	}, 
    registro: (req, res) => {
        res.render('user/register')
    },
	guardar: (req, res) => {
		const errors = validationResult(req);
		if (errors.isEmpty()){ 
		 let usuarioNuevo= {
			...req.body,
			clave: bcryptjs.hashSync(req.body.clave, 10),
			nombreImagen: req.file.filename
		}
		db.usuarios.findOne({
			where: {email: req.body.email}
		}) 
		.then ((usuarioExistente) => {
			if (usuarioExistente) {
				res.send("Ya existe un usuario creado con el email ingresado.") //proximamente armamos error y validaciones 
			} else {
			db.usuarios.create(usuarioNuevo)
			res.redirect('/') 
			}
		})
 		} else {
		res.render('user/register', {errors: errors.array()});	
		}
	},
    editar: (req, res) => {
		db.usuarios.findOne({
			where: {id: req.params.id}
		})
		.then((usuarioElegido) => {
			res.render('user/edit', {usuario: usuarioElegido})    
		})
    },
    modificar: (req, res) => {
		db.usuarios.update({
			nombre: req.body.nombre, 
			apellido: req.body.apellido,
			email: req.body.email,
			clave: req.body.clave,
			telefono: req.body.telefono,
		},
		{
			where: {
				id: req.params.id
			}
		})
		res.redirect('/') 				
	} ,
    borrar: (req, res) => {
		db.usuarios.destroy ({
			where: {
				id: req.params.id
			}

		  }) ;
		res.redirect('/');
/*
		let id = req.params.id;
        let usuarioElegido
		let Nusuario = usuariosTotal.filter(function(e){
			return id!=e.id
		})

		for (let usuario of usuariosTotal){
			if (usuario.id == id){
				usuarioElegido = usuario
			}
		}*/
	},
	logout: (req, res) => {
		req.session.destroy()
		return res.redirect('/')
	}
}

module.exports = usuariosController;