const router = require('express').Router()
const {aboutCreate,elementById, elementUpdate,elementDelete, getAll} = require('../controller/aboutController')

router.post('/create',aboutCreate)
router.get('/all',getAll)
router.route('/:id')
    .get(elementById)
    .put(elementUpdate)
    .delete(elementDelete)

module.exports = router