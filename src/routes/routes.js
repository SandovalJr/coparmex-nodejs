const {Router} = require('express')
const router = Router()

const controller = require('../controllers/controller.js')

router.get('/', controller.getControlador)

module.exports = router