const router = require('express').Router()
const {getAll,elementById} = require('../controller/mainController')

router.get('/',getAll)
router.get('/:id',elementById)

module.exports = router