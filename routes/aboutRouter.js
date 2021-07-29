const router = require('express').Router()
const {aboutCreate, getAll} = require('../controller/aboutController')

router.post('/create',aboutCreate)
router.get('/all',getAll)

module.exports = router