const fs = require('fs');
const path = require('path');
const User = require('../models/User')

const profileFilePath = path.join(__dirname, '../database/dataUsuarios.json');
const usuariosTotal = JSON.parse(fs.readFileSync(profileFilePath, 'utf-8'));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const usuariosController = {
    login: (req, res) => {
        res.render('user/login')
    },
	ingreso: (req, res) => {
        res.send('holi')
    },
    perfil: (req, res) => {
		let id = req.params.id;
        let usuarioElegido

        for (let usuario of usuariosTotal)
            if (id == usuario.id) {
                usuarioElegido = usuario 
            }
        res.render('user/profile', {perfil: usuarioElegido}) 
    }, 
    registro: (req, res) => {
		console.log ("anda")
        res.render('user/register')
    },
	guardar: (req, res) => {
		/*User.create(req.body)*/
		let idNuevo=0
		for (usuario of usuariosTotal){
			if (idNuevo<usuario.id){
				idNuevo = usuario.id
			}
		}
		idNuevo++ ;

		let nombreImagen = req.file.filename;

		let cursoNuevo = {
			id: idNuevo,
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			email: req.body.email,
			password: req.body.password,
            direccion: req.body.direccion,	
			ciudad: req.body.ciudad,
			pais: req.body.pais,
			cp: req.body.cp,
			ImagenPerfil: nombreImagen

		}

		usuariosTotal.push(cursoNuevo);

        fs.writeFileSync(profileFilePath, JSON.stringify(usuariosTotal, null, ' '))
		res.redirect('/') 
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
	/*	let id = req.params.id;
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
    	} */
    } ,
    borrar: (req, res) => {
		let id = req.params.id;
        let usuarioElegido
		let Nusuario = usuariosTotal.filter(function(e){
			return id!=e.id
		})

		for (let usuario of usuariosTotal){
			if (usuario.id == id){
				usuarioElegido = curso
			}
		}
	}
}

module.exports = usuariosController;