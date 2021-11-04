const post = require("../../data/post");
const User = require("./User");

module.exports= (sequelize, DataTypes)=>{
    let alias="Post";
    let cols= {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        img:{
            type:DataTypes.STRING,
        },
        fecha:{
            type:DataTypes.DATE,
        },
        description:{
            type:DataTypes.STRING,
        },
        userId:{
            type:DataTypes.INTEGER,
        },
    }
    let config= {
        tableName: "posts",
        timestamps: false,
    }
    const Post= sequelize.define(alias,cols,config)
    Post.associate= (model)=>{
        Post.belongsTo(model.User,{
            as:"user",
            foreingKey:"userId"
        })
    Post.hasMany(model.Comment,{
        as: "comments",
        foreingKey:"postId"
    })

    }
    return Post
}