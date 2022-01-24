const {User} = require("../../models/migration")
const {Departement} = require("../../models/migration")

class UserController {
    getAll = async(req,res)=>{

        const  users = await User.findAll({
            raw: true
        })
        const deprt = await Departement.findAll({
            raw: true
        })
        res.render('user/readUser', {  users, deprt })
    }

    addUser = async (req,res)=>{
        const Uname = req.body.name
        const email = req.body.email
        const password = req.body.password
        const departement = req.body.DepartementId

        const dprt = await Departement.findOne({
            where: {
                name: departement
            }
        })
        console.log(dprt)
        const reslt = await User.create({
            name: Uname,
            email: email,
            password: password,
            departement: departement,
            DepartementId: dprt.id
        },()=>{
            console.log("user added successfuly")
        })

        res.redirect('/user', )

        

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
        res.redirect('/user')
    }


    deleteUser = async (req,res)=>{
        console.log(req)
        const id = req.params.id
        const rslt = await User.destroy({
            where: {
                id: id,
            }
        });
        res.redirect('/user')
        console.log(users)

    }
}


module.exports = UserController



