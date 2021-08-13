const {Router} = require('express')
const router = Router()

//Aqui escribiremos la rutas que necesitemos
router.get('/hello',(req,res)=> res.send('hello '))

module.exports = router