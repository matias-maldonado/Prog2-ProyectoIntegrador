let post= require("../data/post")
let user= require("../data/user")
let comments= require("../data/comments")
let db = require('../database/models')

const indexController ={
    index: function (req, res) {
        db.Post.findAll ({
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
           return res.render("index",{
            posts: data,
            
        });
        })
       
    },
    search: function (req, res) {
        return res.render("resultadoBusqueda");
    },
}
module.exports = indexController;
