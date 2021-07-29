const About = require('../models/about')

exports.aboutCreate = async (req,res,next)=>{
    try {
    const {name, title, description} = req.body;
    const about = new About({name, title, description})
    await about.save()
    res.redirect('/admin')
    } catch (error) {
        return res.redirect('/admin')
    }
}

exports.getAll = async (req,res,next)=>{
    const about = await About.find()
    res.send(about)
}