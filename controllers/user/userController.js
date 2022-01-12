const {User} = require("../../models/migration")

class UserController {
    getAll = async(req,res)=>{

        const  users = await User.findAll({
            raw: true
        })
        res.render('user/readUser', {  users })
    }

    addUser = async (req,res)=>{
        console.log('body hire :', req.body)
        const Uname = req.body.name
        const email = req.body.email
        const password = req.body.password
        const departement = req.body.DepartementId
        const reslt = await User.create({
            name: Uname,
            email: email,
            password: password,
            DepartementId: departement
        },()=>{
            console.log("user added successfuly")
        })

        const users = await User.findAll({
            raw: true
        })

        res.redirect('user/readUser')

        

    }

    updateUser = async (req,res)=>{
            const id = req.params.id
            const name = req.body.name
            const email = req.body.email
            const password = req.body.password
            console.log(id)

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
            raw: true
        })
        res.render('user/createUser', { users})
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



