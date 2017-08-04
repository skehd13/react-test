module.exports = function (sequelize, DataType) {
    const User = sequelize.define("Users",{
        id:{
            type:DataType.STRING,
            primaryKey:true
        },
        password:DataType.STRING,
        phone:DataType.STRING,
        userName:DataType.STRING
    })
    return User;
}