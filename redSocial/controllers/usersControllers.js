let user= require("../data/user")
let post= require("../data/post")
const db = require("../database/models");
let bcrypt = require('bcryptjs')
const loginController ={
    login: function (req, res) {
        return res.render('login');
    },
    loginPost: function (req, res) {
        db.User.findOne({
            where : {
                email: req.body.email
            }
        })
        .then(user => {
        let passwordCorrecta = bcrypt.compareSync(req.body.password,user.password)
        if (passwordCorrecta == true){
            req.session.user= user
            res.cookie("usuarioId", user.id, {maxAge: 1000 * 60 * 30})
            res.redirect('/')
        }
        })
    },
    register: function (req, res) {
        return res.render('registracion');
    },
    store: function (req, res) {
        let passwordEncriptada = bcrypt.hashSync(req.body.password,10)
        db.User.create({
            email: req.body.email,
            userName: req.body.userName,
            img: req.file.filename,
            fecha:req.body.fecha,
            password: passwordEncriptada,
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
                {association: 'comments'}],
            order: [['posts','id','desc']]

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