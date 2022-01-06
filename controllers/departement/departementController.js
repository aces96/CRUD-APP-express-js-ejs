const Departement = require("../../models/departementModel")


class DepartementController {
    getAll = async(req,res)=>{

        const  rslt = await Departement.findAll()
        res.send(rslt)
        
    }

    addUser = async (req,res)=>{
        Uname = req.body.name
        description = req.body.description

        const reslt = await Departement.create({
            id:1,
            name: Uname,
            description: description,
        },()=>{
            console.log("departement added successfuly")
        })

        res.send(reslt)

    }

    updateUser = async (req,res)=>{
            id = req.body.id
            name = req.body.name
            description = req.body.description

        const rslt = await Departement.update({
            name: name,
            email: email,
            description: description,
        }, {
            where: {
                id:  id
            }
        })

        res.send(rslt)
    }


    deleteUser = async (req,res)=>{
        id = req.body.id
        const rslt = await Departement.destroy({
            where: {
                id: id
            }
        });
        res.send(rslt)
    }
}


module.exports = DepartementController
