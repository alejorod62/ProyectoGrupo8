const fs = require('fs');
const path = require('path');

const profileFilePath = path.join(__dirname, '../database/dataUsuarios.json');
const usuariosTotal = JSON.parse(fs.readFileSync(profileFilePath, 'utf-8'));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const usuariosController = {
    login: (req, res) => {
        res.render('user/login')
    },
    perfil: (req, res) => {
        const profile = JSON.parse(fs.readFileSync(profileFilePath, 'utf-8'));
        res.render('user/profile', {profiles: profile})
    }, 
    registro: (req, res) => {
        res.render('user/register')
    },
    crear: (req, res) => {
        res.render('products/new')
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
				usuario.contraseña= req.body.contraseña;
				usuario.telefono= req.body.telefono;
		}
		fs.writeFileSync(profileFilePath, JSON.stringify(usuario, null, ' '))
		res.redirect('/')
    	}
    },
    
    guardar: (req, res) => {
		let idNuevo
		for (usuario of usuariosTotal){
			if (idNuevo<usuario.id){
				idNuevo = usuario.id
			}
		}
		idNuevo++
		let cursoNuevo = {
			id: idNuevo,
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			email: req.body.email,
			contrseña: req.body.contraseña,
            telefono: req.body.telefono,		
		}
        fs.writeFileSync(profileFilePath, JSON.stringify(cursoNuevo, null, ' '))
		res.redirect('/')
    }
    
}

module.exports = usuariosController;