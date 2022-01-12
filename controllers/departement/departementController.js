const {Departement} = require("../../models/migration")

class DepartementController {
    getAll = async(req,res)=>{

        const  departement = await Departement.findAll({
            raw: true
        })
        res.render('departement/read', {  departement })
    }

    addUser = async (req,res)=>{
        const Dname = req.body.name
        const description = req.body.email
        const reslt = await Departement.create({
            name: Dname,
            description: description,
        },()=>{
            console.log("departement added successfuly")
        })

        res.redirect('departement')

        

    }

    updateUser = async (req,res)=>{
            const id = req.params.id
            const name = req.body.name
            const description = req.body.description
            console.log(id)

        const rslt = await Departement.update({
            name: name,
            description: description,
        }, {
            where: {
                id: id
            }
        })
        res.render('departement')
    }


    deleteUser = async (req,res)=>{
        console.log(req)
        const id = req.params.id
        const rslt = await Departement.destroy({
            where: {
                id: id,
            }
        });
        
        const users = await Departement.findAll({
            raw: true
        })
        res.redirect("/departement")
        console.log(users)

    }
}


module.exports = DepartementController



