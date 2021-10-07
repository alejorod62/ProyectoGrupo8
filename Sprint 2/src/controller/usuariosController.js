const fs = require('fs');
const path = require('path');
const User = require('../models/User')
const bcryptjs = require('bcryptjs');

const db = require('../database/models');
const usuarios = require('../database/models/usuarios');

const profileFilePath = path.join(__dirname, '../data/dataUsuarios.json');
const usuariosTotal = JSON.parse(fs.readFileSync(profileFilePath, 'utf-8'));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const usuariosController = {
    login: (req, res) => {
        res.render('user/login')
    },
	ingreso: (req, res) => {
		console.log (req) ;
		let usuarioExistente = User.findOne(req.body.email);
		if (usuarioExistente){
			let passCorrecta = bcryptjs.compareSync(req.body.password, usuarioExistente.password);
			if (passCorrecta==true) {
				delete usuarioExistente.password;
				req.session.usuarioLogueado = usuarioExistente
				res.redirect('/user/profile', {perfil: usuarioElegido}); 
			} else {
				res.send('Contraseña incorrecta') //proximamente armamos error y validaciones 
			}
		} else {
			res.send('Usuario inexistente') //proximamente armamos error y validaciones 
		}
	},
    perfil: (req, res) => {
		let id = req.params.id;
        let usuarioElegido

        for (let usuario of usuariosTotal)
            if (id == usuario.id) {
                usuarioElegido = usuario;
				break;
            }
        res.render('user/profile', {
			usuario: req.session.usuarioLogueado,
		}) 
    }, 
    registro: (req, res) => {
        res.render('user/register')
    },
	guardar: (req, res) => {	
		let usuarioNuevo= {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			nombreImagen: req.file.filename
		}

		db.usuarios.findOne({
			where: {
				email: req.body.email,
			}
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
        let id = req.params.id;
        let usuarioElegido

        for (let usuario of usuariosTotal)
            if (id == usuario.id) {
                usuarioElegido = usuario 
            }
        res.render('user/edit', {usuarioEditable: usuarioElegido})    
    },
    modificar: (req, res) => {
		let id = req.params.id;
		for (let usuario of usuariosTotal){
			if (id==usuario.id){ 
				usuario.nombre= req.body.nombre; 
				usuario.apellido= req.body.apellido;
				usuario.email= req.body.email;
				usuario.password= req.body.password;
				usuario.direccion= req.body.direccion;
				usuario.ciudad= req.body.ciudad;
				usuario.pais= req.body.pais;
				usuario.cp= req.body.cp;
				usuario.ImagenPerfil= req.body.ImagenPerfil;
		}
		fs.writeFileSync(profileFilePath, JSON.stringify(usuario, null, ' '))
		res.redirect('/')
    	} 
    } ,
    borrar: (req, res) => {
		let id = req.params.id;
        let usuarioElegido
		let Nusuario = usuariosTotal.filter(function(e){
			return id!=e.id
		})

		for (let usuario of usuariosTotal){
			if (usuario.id == id){
				usuarioElegido = usuario
			}
		}
	},
	logout: (req, res) => {
		req.session.destroy()
		return res.redirect('/')
	}
}

module.exports = usuariosController;