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
app.use(express.json())
app.use(express.urlencoded({extended:true}));

 // User Routing//



app.get("/user",(req,res)=>{
    const cont = new UserController
    const rslt = cont.getAll(req,res)
})

app.get("/updateUser/:id", (req,res)=>{
    const id =  req.params.id
    res.render("user/updateUser" , { id })
})

app.post("/user", (req,res)=>{
    const cont = new UserController
    const rslt = cont.addUser(req,res)
})

app.get("/user/:id", (req,res)=>{
    const cont = new UserController
    const rslt = cont.deleteUser(req,res)
})

app.post("/userUpdate/:id", (req,res)=>{
    const cont = new UserController
    const rslt = cont.updateUser(req,res)
})



//departement Routing//


app.get("/departement",(req,res)=>{
    const cont = new DepartementController
    const rslt = cont.getAll(req,res)
})

app.get("/updateUser/:id", (req,res)=>{
    const id =  req.params.id
    res.render("departement/updateDepartement" , { id })
})

app.post("/departement", (req,res)=>{
    const cont = new DepartementController
    const rslt = cont.addDeprt(req,res)
})

app.get("/departement/:id", (req,res)=>{
    const cont = new DepartementController
    const rslt = cont.deleteDeprt(req,res)
})

app.post("/departement/:id", (req,res)=>{
    const cont = new DepartementController
    const rslt = cont.updateDeprt(req,res)
})


