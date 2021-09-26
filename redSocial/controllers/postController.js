let post= require("../data/post")
let user= require("../data/user")
let comments= require("../data/comments")
const postController ={
    add: function (req, res) {
        return res.render('agregarPost');
    },
    detalle: function (req, res) {
        return res.render('detallePost',{
            posts: post.lista, 
            users: user.lista,
            comentario: comments.lista,
        });

    }
}
module.exports = postController;