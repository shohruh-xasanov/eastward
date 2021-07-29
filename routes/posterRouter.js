const router = require('express').Router()
const {posterCreate, getAll} = require('../controller/postreController')
const upload = require('../middleware/fileUpload')

router.post('/create', upload.single('poster'),posterCreate)
router.get('/all',getAll)

module.exports = router