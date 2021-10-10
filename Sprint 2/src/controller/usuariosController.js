const db = require('../database/models');
const usuarios = require('../database/models/usuarios');
const bcryptjs = require('bcryptjs');

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
        res.render('user/profile', {usuario: req.session.usuarioLogueado,
    	})
	}, 
    registro: (req, res) => {
        res.render('user/register')
    },
	guardar: (req, res) => {	
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
	},
    editar: (req, res) => {
		db.usuarios.findOne({
			where: {id: req.params.id}
		})
		.then((usuarioElegido) => {
			res.render('user/edit', {usuarioEditable: usuarioElegido})    
		})
    },
    modificar: (req, res) => {
		db.usuarios.findOne({
            where: {id: req.params.id}
        })
        .then((usuarioElegido) => {
			usuarioElegido.nombre= req.body.nombre; 
			usuarioElegido.apellido= req.body.apellido;
			usuarioElegido.email= req.body.email;
			usuarioElegido.clave= req.body.clave;
			usuarioElegido.telefono= req.body.telefono;
			usuarioElegido.nombreImagen= req.body.nombreImagen;
		res.redirect('/') 				
    	})
	} ,
    borrar: (req, res) => {
		db.usuarios.destroy ({
			where: {
				id: req.params.id
			}

		  }) ;
		res.redirect('index');
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
		return res.redirect('index')
	}
}

module.exports = usuariosController;