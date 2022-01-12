const sequelize = require("../config/db")
const User = require("./userModal")
const Departement = require("./departementModel")



User.belongsTo(Departement)
Departement.hasMany(User)



sequelize.sync({ force: false },()=>{

    console.log("The table for the User model was just (re)created!");

});

module.exports = {
    User,
    Departement
}