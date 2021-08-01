const router = require('express').Router()
const {contactCreate, elementDelete, getAll} = require('../controller/contactController')

router.post('/create',contactCreate)
router.get('/all',getAll)
router.get('/:id')

module.exports = router