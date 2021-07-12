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

app.get('/product', (req,res) =>{
   res.sendFile(path.join(__dirname, './views/product.html'));
});

app.use(express.static(path.join(__dirname, './public')));  

app.listen(process.env.PORT || 3000, () => {
   console.log("Servidor corriendo");
});