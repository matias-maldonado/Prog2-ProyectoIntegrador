let post= require("../data/post")
const postController ={
    add: function (req, res) {
        return res.render('agregarPost');
    },
    detalle: function (req, res) {
        return res.render('detallePost',{
            posts: post.lista,
        });
    }
}
module.exports = postController;