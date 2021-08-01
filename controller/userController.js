const User = require('../models/user')

exports.userCreate = async (req,res,next)=>{
    try {
    const {name, email} = req.body;
    const user = new User({name, email})
    await user.save()
    res.redirect('/user/all')
    } catch (error) {
        return res.redirect('/register')
    }
}

exports.getAll = async (req,res,next)=>{
    const user = await User.find()
    res.render('admin/user', {layout:'./admin_layout', user})
}

exports.elementById = async (req,res,next)=>{
    const result = await User.findById(req.params.id)
    res.render('admin/update', {layout:'./admin_layout', result})
}
exports.elementDelete = async (req,res,next)=>{
    await User.findByIdAndDelete(req.params.id)
    res.redirect('/user/all')
}
exports.elementUpdate = async (req,res,next)=>{
    const {name, email} = req.body
    await User.findByIdAndUpdate(req.params.id, {name, email})
    res.redirect('/user/all')
}