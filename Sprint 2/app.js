const mainRouter = require('./src/router/mainRouter')
const cursosRouter = require('./src/router/cursosRouter')
const usuariosRouter = require('./src/router/usuariosRouter')

const express = require('express');
const path = require('path');
const app = express();

app.use('/', mainRouter);

app.use('/courses', cursosRouter);

app.use('/user', usuariosRouter);

app.use(express.static(path.join(__dirname, './public')));  

app.set('view engine', 'ejs')

app.listen(3002, () => {
    console.log("Servidor corriendo");
});