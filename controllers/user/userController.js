const User = require("../../models/userModal")

class UserController {
    getAll = async(req,res)=>{

        const  rslt = await User.findAll({
            raw: true
        })
        console.log(rslt)
        res.render('user/readUser', { rslt })
    }

    addUser = async (req,res)=>{
        Uname = req.body.name
        email = req.body.email
        password = req.body.password

        const reslt = await User.create({
            id:1,
            name: Uname,
            email: email,
            password: password
        },()=>{
            console.log("user added successfuly")
        })

        res.send(reslt)
        res.render('user/create')

    }

    updateUser = async (req,res)=>{
            id = req.body.id
            name = req.body.name
            email = req.body.email
            password = req.body.password

        const rslt = await User.update({
            name: name,
            email: email,
            password: password,
        }, {
            where: {
                id: id
            }
        })

        res.send(rslt)
    }


    deleteUser = async (req,res)=>{
        console.log(req)
        const id = req.params.id
        const rslt = await User.destroy({
            where: {
                id: id,
            }
        });
        
        const users = await User.findAll({
            raw: true
        })
        res.render("user/deleteUser", {users})
        console.log(users)

    }
}


module.exports = UserController



