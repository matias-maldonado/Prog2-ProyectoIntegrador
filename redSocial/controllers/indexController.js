let post= require("../data/post")
let user= require("../data/user")
let comments= require("../data/comments")

const indexController ={
    index: function (req, res) {
        return res.render("index",{
            posts: post.lista,
            users: user.lista,
            comentario: comments.lista,
        });
    },
    search: function (req, res) {
        return res.render("resultadoBusqueda");
    },
}
module.exports = indexController;
