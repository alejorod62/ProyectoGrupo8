const mainRouter = require('./src/router/mainRouter')
const cursosRouter = require('./src/router/cursosRouter')
const usuariosRouter = require('./src/router/usuariosRouter')

const express = require('express');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
/* const auditoriaMiddleware = require('./middlewares/auditoriaMw'); */
const session = require('express-session');
const bodyParser = require('body-parser');
//const navBarMw = require('./src/middlewares/navBarMw');

const app = express();
app.use(express.urlencoded({ extended: false }));   
app.use(express.json());  
app.use('/', mainRouter);
app.use('/courses', cursosRouter);
app.use('/user', usuariosRouter);
app.use(express.static(path.join(__dirname, './public')));  
app.use(express.static(path.join(__dirname, './views')));

app.get("*", (req, res) => {
    res.send("Ingreso a ruta invalido");
    });

app.use(session( {secret: "Este es mi secreto"} ));
//app.use(navBarMw);
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
/*app.use(auditoriaMiddleware); */

// ************ Middlewares - (don't touch) ************

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(process.env.PORT || 3002, () => {
    console.log("Servidor corriendo");
 });

 module.exports = app;