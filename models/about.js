const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name:{type:String, required:true},
    title:{type:String, required:true},
    description:{type:String, required:true}
})

module.exports = mongoose.model('About', contactSchema)