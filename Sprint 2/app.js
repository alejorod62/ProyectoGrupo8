const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./src/router/mainRouter')

app.get('/', mainRouter);

app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/login.html'));
 });

 app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/register.html'));
 });

 app.get('/cart', (req,res) =>{
   res.sendFile(path.join(__dirname, './views/cart.html'));
});

app.get('/product', (req,res) =>{
   res.sendFile(path.join(__dirname, './views/product.html'));
});

app.use(express.static(path.join(__dirname, './public')));  

app.set('view engine', 'ejs')

app.listen(3002, () => {
    console.log("Servidor corriendo");
});