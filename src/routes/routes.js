const {Router} = require('express')
const router = Router()

const controller = require('../controllers/controller.js')

router.get('/', controller.getEmpresas)
router.post('/',controller.registrarempresa)
router.delete('/:id',controller.deleteEmpresa)

module.exports = router