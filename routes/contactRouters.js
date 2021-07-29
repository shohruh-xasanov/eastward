const router = require('express').Router()
const {contactCreate, getAll} = require('../controller/contactController')

router.post('/create',contactCreate)
router.get('/all',getAll)

module.exports = router