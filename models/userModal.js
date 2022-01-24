const { DataTypes, Model} = require("sequelize")

const sequelize = require("../config/db")

class User extends Model {}

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
    password: {
        type: DataTypes.STRING
    },
    departement: {
        type: DataTypes.STRING
    }

    
},{
    sequelize,
    modelName: "User"
}
)


module.exports = User;
    

