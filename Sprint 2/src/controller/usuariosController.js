const fs = require('fs');
const path = require('path');

const profileFilePath = path.join(__dirname, '../database/dataUsuarios.json');
const profile = JSON.parse(fs.readFileSync(profileFilePath, 'utf-8'));

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
    }    
}

module.exports = usuariosController;