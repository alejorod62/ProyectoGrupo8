const methodOverride =  require('method-override');
const express = require('express');
const path = require('path');
const app = express();

const mainRouter = require('./src/router/mainRouter')
const cursosRouter = require('./src/router/cursosRouter')
const usuariosRouter = require('./src/router/usuariosRouter')

app.use('/', mainRouter);
app.use('/courses', cursosRouter);
app.use('/user', usuariosRouter);

app.use(express.static(path.join(__dirname, './public')));  
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs')

app.listen(process.env.PORT || 3002, () => {
    console.log("Servidor corriendo");
 });