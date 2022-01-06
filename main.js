const express = require("express")
const app = express()
const ejs = require("ejs")
const { Sequelize } = require("sequelize")
const UserController = require("./controllers/user/userController")
const DepartementController = require("./controllers/departement/departementController")

app.listen(3000,()=>{
    console.log('connected')
})

app.set('view engine', 'ejs');



const sequelize = new Sequelize('crudApp', 'root',null,{
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate();
    console.log("connection successful")
}catch(error){
    console.log(error)
}

 // User Routing//
app.use(express.json());


app.get("/user",(req,res)=>{
    const cont = new UserController
    const rslt = cont.getAll(req,res)
})

app.post("/user/:id", (req,res)=>{
    const cont = new UserController
    const rslt = cont.addUser(req,res)
})

app.get("/user/:id", (req,res)=>{
    const cont = new UserController
    const rslt = cont.deleteUser(req,res)
})

app.put("/user/:id", (req,res)=>{
    const cont = new UserController
    const rslt = cont.updateUser(req,res)
})



//departement Routing//


app.get("/user",(req,res)=>{
    const cont = new DepartementController
    const rslt = cont.getAll(req,res)
})

app.post("/user/:id", (req,res)=>{
    const cont = new DepartementController
    const rslt = cont.addUser(req,res)
})

app.get("/user/:id", (req,res)=>{
    const cont = new DepartementController
    const rslt = cont.deleteUser(req,res)
})

app.put("/user/:id", (req,res)=>{
    const cont = new DepartementController
    const rslt = cont.updateUser(req,res)
})



