const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const usuariosController = {
    login: (req, res) => {
        res.render('user/login')
    },
	ingreso: (req, res) => {
		let errors =[]
		db.usuarios.findOne({
            where: {
                email: req.body.email,
            }
        }) 
        .then ((usuarioExistente) => {
            if (usuarioExistente) {
            let passCorrecta = bcryptjs.compareSync(req.body.clave, usuarioExistente.clave);
            if (passCorrecta==true) {
        /*      delete usuarioExistente.clave;*/
				req.session.usuario = usuarioExistente
                res.redirect('/user/profile'); 
            } else {
                errors.push({clave: 'Contraseña incorrecta'});
                res.render('user/login', {error: errors})  
            }
			} else {
                errors.push({email: 'Usuario inexistente'});
                res.render('user/login', {error: errors})  
            }
        })
    },
    perfil: (req, res) => {
        res.render('user/profile', {perfil: req.session.usuario})
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
			where: {id: req.session.usuario.id}
		})
		.then((usuarioElegido) => {
			res.render('user/edit', {usuario: usuarioElegido})    
		})
    },
    modificar: (req, res) => {
	/*	const errors = validationResult(req);
		console.log(errors);
		res.send(errors);*/
		db.usuarios.update({
			nombre: req.body.nombre, 
			apellido: req.body.apellido,
			email: req.body.email,
			clave: req.body.clave,
			telefono: req.body.telefono,
		},
		{
			where: {
				id: req.session.usuario.id
			}
		})
		res.redirect('/courses') 			
	} ,
    borrar: (req, res) => {
		db.usuarios.destroy ({
			where: {
				id: req.session.usuario.id
			}

		  }) ;
		res.redirect('/');
	},
	logout: (req, res) => {
		req.session.destroy()
		return res.redirect('/')
	}
}

module.exports = usuariosController;