const { Sequelize } = require("sequelize")


const sequelize = new Sequelize(
    "crudApp",
    'root',
    null,
    {host: "localhost", dialect: "mysql"}
)


module.exports= sequelize

