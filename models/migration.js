const sequelize = require("../config/db")
const User = require("./userModal")
const {Departement} = require("./departementModel")


sequelize.sync({ force: true },()=>{

    console.log("The table for the User model was just (re)created!");

});
