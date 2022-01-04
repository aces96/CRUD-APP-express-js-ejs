const {Sequelize, DataTypes, Model} = require("sequlieze")

const sequelize = new Sequelize('crudApp', 'root',null,{
    host: 'localhost',
    dialect: 'mysql'
})

class User extends Model{}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
})


module.exports = User
