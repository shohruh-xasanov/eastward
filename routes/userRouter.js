const router = require('express').Router()
const {userCreate, getAll} = require('../controller/userController')

router.post('/create',userCreate)
router.get('/all',getAll)

module.exports = router