const loginController ={
    login: function (req, res) {
        return res.render('login');
    },
    register: function (req, res) {
        return res.render('registracion');
    },
    profile: function (req, res) {
        return res.render('miPerfil');
    },
    edit: function (req, res) {
        return res.render('editarPerfil');
    }

}
module.exports = loginController;