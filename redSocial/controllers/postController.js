const postController ={
    add: function (req, res) {
        return res.render('agregarPost');
    },
    detalle: function (req, res) {
        return res.render('detallePost');
    }
}
module.exports = postController;