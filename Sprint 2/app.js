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

app.use(express.static(path.join(__dirname, './public')));  

app.listen(3002, () => {
    console.log("Servidor corriendo");
});