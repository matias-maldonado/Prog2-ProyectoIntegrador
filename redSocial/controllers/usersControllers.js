let user= require("../data/user")
const loginController ={
    login: function (req, res) {
        return res.render('login');
    },
    register: function (req, res) {
        return res.render('registracion');
    },
    profile: function (req, res) {
        return res.render('miPerfil',{
            user: user.lista[0]

        });
    },
    edit: function (req, res) {
        return res.render('editarPerfil');
    }

}
module.exports = loginController;