let user= require("../data/user")
let post= require("../data/post")
const db = require("../database/models");
const loginController ={
    login: function (req, res) {
        return res.render('login');
    },
    register: function (req, res) {
        return res.render('registracion');
    },
    profile: function (req, res) {
        db.User.findByPk (req.params.id,{
            include: [
                {association: 'posts'},
                {association: 'comments'}]
            })
        .then(data=> {
           //return res.send(data)
           return res.render("miPerfil",{
            user: data,
           })
        });  
    },
    edit: function (req, res) {
        return res.render('editarPerfil');
    }

}
module.exports = loginController;