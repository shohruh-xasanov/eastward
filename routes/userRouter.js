const router = require('express').Router()
const {userCreate, elementById,logout,login,elementUpdate, elementDelete, getAll} = require('../controller/userController')

router.post('/create',userCreate)
router.get('/all',getAll)
router.route('/:id')
    .get(elementById)
    .put(elementUpdate)
    .delete(elementDelete)
router.post('/login', login)
router.get('/admin/logout', logout)
module.exports = router