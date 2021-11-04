
module.exports= (sequelize, DataTypes)=>{
    let alias="User";
    let cols= {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email:{
            type: DataTypes.STRING,
        },
        userName:{
            type:DataTypes.STRING,
        },
        img:{
            type:DataTypes.STRING,
        },
        fecha:{
            type:DataTypes.DATE,
        },
        password:{
            type:DataTypes.STRING,
        },
        age:{
            type:DataTypes.INTEGER,
        },
    }
    let config= {
        tableName: "users",
        timestamps: false,
    }
    const User= sequelize.define(alias,cols,config)
    User.associate= (model)=>{
        User.hasMany(model.Post,{
            as:"posts",
            foreingKey:"userId"
        })
        User.hasMany(model.Comment,{
        as: "comments",
        foreingKey:"userId"
    })}
    return User
}