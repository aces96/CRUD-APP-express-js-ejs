const {Departement} = require("../../models/migration")

class DepartementController {
    getAll = async(req,res)=>{

        const  departement = await Departement.findAll({
            raw: true
        })
        res.render('departement/read', {  departement })
    }

    addDeprt = async (req,res)=>{
        const Dname = req.body.name
        const description = req.body.description
        const reslt = await Departement.create({
            name: Dname,
            description: description,
        },()=>{
            console.log("departement added successfuly")
        })

        res.redirect('departement')

        

    }

    updateDeprt = async (req,res)=>{
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
        res.redirect('departement')
    }


    deleteDeprt = async (req,res)=>{
        console.log(req)
        const id = req.params.id
        const rslt = await Departement.destroy({
            where: {
                id: id,
            }
        });
        res.redirect("/departement")
        console.log(users)

    }
}


module.exports = DepartementController



