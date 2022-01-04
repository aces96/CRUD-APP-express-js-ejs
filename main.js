const express = require("express")
const app = express()
const { Sequelize } = require("sequelize")

app.listen(3000,()=>{
    console.log('connected')
})


const sequelize = new Sequelize('crudApp', 'root',null,{
    host: 'localhost',
    dialect: 'mysql'
})


app.get("/",(req,res)=>{
    res.send("hello world")
})


try{
    sequelize.authenticate();
    console.log("connection successful")
}catch(error){
    console.log(error)
}