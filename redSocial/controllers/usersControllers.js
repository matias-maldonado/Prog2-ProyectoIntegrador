let user= require("../data/user")
let post= require("../data/post")
const loginController ={
    login: function (req, res) {
        return res.render('login');
    },
    register: function (req, res) {
        return res.render('registracion');
    },
    profile: function (req, res) {
        return res.render('miPerfil',{
            user: user.lista[0],
            posteo: post.lista,
        });
    },
    edit: function (req, res) {
        return res.render('editarPerfil');
    }

}
module.exports = loginController;