const User = require("../../models/userModal")

class UserController {
    getAll = async(req,res)=>{

        const  rslt = await User.findAll()
        res.send(rslt)
        
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
                id = id
            }
        })

        res.send(rslt)
    }


    deleteUser = async (req,res)=>{
        id = req.body.id
        const rslt = await User.destroy({
            where: {
                id: id
            }
        });

        res.send(rslt)
    }
}


module.exports = UserController



