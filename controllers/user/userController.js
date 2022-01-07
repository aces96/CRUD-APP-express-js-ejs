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
        console.log('body ', req.body)
        const Uname = req.body.name
        const email = req.body.email
        const password = req.body.password

        const reslt = await User.create({
            name: Uname,
            email: email,
            password: password,
            raw: true
        },()=>{
            console.log("user added successfuly")
        })

        const users = await User.findAll({
            raw: true
        })

        res.render('user/createUser', {users})

        

    }

    updateUser = async (req,res)=>{
            const id = req.body.id
            const name = req.body.name
            const email = req.body.email
            const password = req.body.password

        const rslt = await User.update({
            name: name,
            email: email,
            password: password,
        }, {
            where: {
                id: id
            }
        })

        const users = await User.findAll({
            raw:true
        })

        res.render('/user/updateUser', {users})
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



