const {model,Schema} = require('mongoose')


const empresaSchema = new Schema ({
    name: {type:String,required:true},
    phone: {type:String,required:true}
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('Empresa', empresaSchema)