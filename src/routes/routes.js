const {Router} = require('express')
const router = Router()

const controller = require('../controllers/controller.js')

router.get('/hello', controller)

module.exports = router