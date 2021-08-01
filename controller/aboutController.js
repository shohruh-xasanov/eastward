const About = require('../models/about')

exports.aboutCreate = async (req,res,next)=>{
    try {
    const {name, title, description} = req.body;
    const about = new About({name, title, description})
    await about.save()
    res.redirect('/about/all')
    } catch (error) {
        return res.redirect('/user/all')
    }
}

exports.getAll = async (req,res,next)=>{
    const result = await About.find()
    res.render('admin/about', {layout:'./admin_layout', result})
}

exports.elementById = async (req,res,next)=>{
    const result = await About.findById(req.params.id)
    res.render('admin/aboutUpdate', {layout:'./admin_layout', result})
}
exports.elementDelete = async (req,res,next)=>{
    await About.findByIdAndDelete(req.params.id)
    res.redirect('/about/all')
}
exports.elementUpdate = async (req,res,next)=>{
    const {name, title,description} = req.body
    await About.findByIdAndUpdate(req.params.id, {name, title, description})
    res.redirect('/about/all')
}