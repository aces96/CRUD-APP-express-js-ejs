const {DataTypes, Model} = require("sequelize")
const sequelize = require("../config/db")


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
},{
    sequelize,
    modelName: "Departement"
}
)

module.exports = Departement