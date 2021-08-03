const fs = require('fs');
const path = require('path');

const cursosFilePath = path.join(__dirname, '../database/dataCursos.json');
const cursosTotal = JSON.parse(fs.readFileSync(cursosFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const cursosController = {
    index: (req, res) => {
        res.render('products/courses', {cursos: cursosTotal})
    }, 
    carrito: (req, res) => {
        res.render('products/cart', {cursos: cursosTotal})
    },
    detalle: (req, res) => {
        let id = req.params.id;
        let cursoElegido

        for (let i = 0; i < cursosTotal.length; i++)
            if (id == cursosTotal[i].id) {
                cursoElegido = cursosTotal[i];
                break;
            }
        res.render('products/details', {cursoDetalle: cursoElegido})
    },
    crear: (req, res) => {
        res.render('products/new')
    } ,
    guardar: (req, res) => {
		let idNuevo
		for (curso of cursosTotal){
			if (idNuevo<curso.id){
				idNuevo = curso.id
			}
		}
		idNuevo++
		let fotoNueva = req.file.filename
		let cursoNuevo = {
			id: idNuevo,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: fotoNueva		
		};
		cursosTotal.push(cursoNuevo);
		fs.writeFileSync(cursosFilePath, JSON.stringify(cursosTotal, null, ' '))
		res.render('index',{cursos: cursosTotal})
	},

    editar: (req, res) => {
        let id = req.params.id;
        let cursoElegido

        for (let i = 0; i < cursosTotal.length; i++)
            if (id == cursosTotal[i].id) {
                cursoElegido = cursosTotal[i] 
            }
        res.render('products/edit', {cursoEditable: cursoElegido})    
    },
    


}

module.exports = cursosController;