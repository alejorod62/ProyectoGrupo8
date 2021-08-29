const fs = require('fs');
const path = require('path');

const User = {
    fileName: path.join(__dirname, '../database/dataUsuarios.json'),
    getData: function (){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf8'));
    },
    findAll: function  () {
        return this.getData()
    },
    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser){
            return lastUser.id+1
        } else {
            return 1
        }
    },
    findByPk: function (id) {
        let allUsers = this.findAll();
        let foundUser;
        for (user of allUsers) {
            if (user.id === id) {
                foundUser = user;
            }
        }
        return foundUser;
    },
    findByEmail: function (email) {
        let allUsers = this.findAll();
        let foundUser;
        for (user of allUsers) {
            if (user.email === email) {
                foundUser = user;
            }
        }
        return foundUser;
    },
    create: function(userData){
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData,
        };
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },
    delete: function(id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(function(e){
            return e.id !== id
        })
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}

module.exports = User;
