
module.exports= (sequelize, DataTypes)=>{
    let alias="Comment";
    let cols= {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha:{
            type:DataTypes.DATE,
        },
        comentario:{
            type:DataTypes.STRING,
        },
        postId:{
            type:DataTypes.INTEGER,
        },
        userId:{
            type:DataTypes.INTEGER,
        },
    }
    let config= {
        tableName: "comments",
        timestamps: false,
    }
    const Comment= sequelize.define(alias,cols,config)
    Comment.associate= (model)=>{
        Comment.belongsTo(model.User,{
            as:"user",
            foreingKey:"userId"
        })
    Comment.belongsTo(model.Post,{
        as: "post",
        foreingKey:"postId"
    })}
    return Comment
}