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
           return res.render("index",{
            posts: data,
        })
    })
    .catch(error=> {
        console.log(error);
    });
    },
    search: function (req, res) {
        db.Post.findAll({
            where:{
                descripcion:{
                    [db.Sequelize.Op.like]:`%${req.query.search}%`
                }
            },
            include: [{
                association:'user'
                }],
            limit: 10, 
            order: [
                ['fecha','DESC']
            ]
        })
        .then(post =>{
            if (post.length> 0){
                return res.render("resultadoBusqueda",{
                    posteo: post,
                    resultado: 'resultados de busqueda:' + req.query.search
                })
            } 
            else {
                return res.render("resultadoBusqueda",{
                    posteo: post,
                    resultado: 'No existen resultados'
                })
            }
        })
    }
}
module.exports = indexController;
