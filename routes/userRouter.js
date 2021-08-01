const router = require('express').Router()
const {userCreate, elementById,elementUpdate, elementDelete, getAll} = require('../controller/userController')

router.post('/create',userCreate)
router.get('/all',getAll)
router.route('/:id')
    .get(elementById)
    .put(elementUpdate)
    .delete(elementDelete)

module.exports = router