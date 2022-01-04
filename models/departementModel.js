const {Sequelize, DataTypes, Model} = require("sequlieze")
const User = require("./userModal")

const sequelize = new Sequelize('crudApp', 'root',null,{
    host: 'localhost',
    dialect: 'mysql'
})



class Departement extends Model{}

Departement.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
})


Departement.belongsTo(User)