const express = require ('express')
const morgan = require ('morgan')

const app = express()
app.set('port', process.env.PORT|| 4000)

app.use(morgan('dev'))
// para que pueda entender los datos que vienen de un json 
app.use(express.json())
// para que pueda entender los datos que vienen de un formulario html 
app.use(express.urlencoded({extended:false}))

app.use("/api/empresas",require ('./routes/routes'))

module.exports = app;