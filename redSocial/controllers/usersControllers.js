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
    store: function (req, res) {
        db.User.create({
            email: req.body.email,
            userName: req.body.userName,
            img: req.file.filename,
            fecha:req.body.fecha,
            password:req.body.password,
            age: req.body.age,
        })
        .then(user=>{
            return res.redirect ('/users/login')
        })
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