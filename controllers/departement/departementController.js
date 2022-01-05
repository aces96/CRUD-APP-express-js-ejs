const express =  require('express')
const app = express()
const department = require('../../models/departementModel')



class DepartementCont {

    getAll = ()=>{
        let depart = new department
        depart.findAll()
        .then(project=>{
            
        })
    }


}