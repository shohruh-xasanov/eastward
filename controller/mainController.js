const About = require('../models/about')
const Poster = require('../models/poster')

exports.getAll = async (req,res)=>{
    const about = await About.find()
    const poster = await Poster.find()
    res.render('client/index',{layout:'./client_layout',poster,about})
}

exports.elementById = async (req,res)=>{
    const result = await Poster.findById(req.params.id)
    res.render('client/image', {layout:false,result})
}