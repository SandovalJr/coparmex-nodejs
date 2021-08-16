//const  hello = (req,res)=> res.send('Hola funciona rutas')
//prueba calis 1

const cont ={}
const empresaModel = require('../models/empresas')


cont.getEmpresas = async (req,res)=>{
 const empresasInfo = await empresaModel.find()
 res.json(empresasInfo)
}


cont.registrarempresa = async (req,res) => {
const newEmpresa = new empresaModel(req.body)
await newEmpresa.save()
 res.send({message: 'Empresa creada'})

}

cont.deleteEmpresa = (req,res)=> {
    res.send('eliminado')
}

module.exports = cont