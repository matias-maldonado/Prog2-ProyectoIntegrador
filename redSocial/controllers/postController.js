let post= require("../data/post")
let user= require("../data/user")
let comments= require("../data/comments");
const db = require("../database/models");
const postController ={
    add: function (req, res) {
        return res.render('agregarPost');
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
        });  
    }
}
module.exports = postController;