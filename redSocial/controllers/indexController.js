const indexController ={
    index: function (req, res) {
        return res.render("index");
    },
    search: function (req, res) {
        return res.render("resultadoBusqueda");
    },
}
module.exports = indexController;
