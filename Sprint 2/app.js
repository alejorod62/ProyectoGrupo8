const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) =>{
   res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/login.html'));
 });

 app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/register.html'));
 });

 app.get('/cart', (req,res) =>{
   res.sendFile(path.join(__dirname, './views/cart.html'));
});

app.get('/products', (req,res) =>{
   res.sendFile(path.join(__dirname, './views/products.html'));
});

app.use(express.static(path.join(__dirname, './public')));  

app.listen(3002, () => {
    console.log("Servidor corriendo");
});