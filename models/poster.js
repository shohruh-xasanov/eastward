const mongoose = require('mongoose')

const posterSchema = new mongoose.Schema({
    name:{type:String, required:true},
    poster:{type:String, required:true},
    image:{type:String, required:true}
})

module.exports = mongoose.model('Poster', posterSchema)