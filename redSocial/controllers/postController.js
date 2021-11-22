let post= require("../data/post")
let user= require("../data/user")
let comments= require("../data/comments");
const db = require("../database/models");
const postController ={
    add: function (req, res) {
        return res.render('agregarPost');
    },
    store: function (req, res) {
        db.Post.create({
            img: req.file.filename,
            fecha: Date.now(),
            descripcion: req.body.descripcion,
            userId: req.body.userId,
        })
        .then(user=>{
            return res.redirect ('/')
        })
        .catch(error=> {
            console.log(error);
        });
    },
    detalle: function (req, res) {
        db.Post.findByPk (req.params.id,{
            include: [
                {association: 'user'},
                {association: 'comments',
            include: {
                association: 'user'
            }}
            ]
        })
        .then(data=> {
           //return res.send(data)
           return res.render("detallePost",{
            post: data,
           })
        .catch(error=> {
            console.log(error);
            })
        });  
    }
}
module.exports = postController;