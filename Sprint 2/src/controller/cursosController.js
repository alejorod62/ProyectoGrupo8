const cursosController = {
    index: (req, res) => {
        res.render('products/courses')
    }, 
    carrito: (req, res) => {
        res.render('products/cart')
    }
}

module.exports = cursosController;