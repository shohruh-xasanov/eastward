const User = require('../models/user')
const jwt = require('jsonwebtoken')
const secret = require('../config/secret')

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

exports.login = async (req,res,next)=>{
    const {name,email} = req.body;
    const user = await User.findOne({email}, err=>{
        if(err) res.redirect('/admin/login')
    })
    if (!user) {
        return res.redirect('/admin/login')
    }if(!(name===user.name)){
        return res.redirect('/admin/login')
    } 
    let payload = {email:user.email}
    const acces_token = await jwt.sign(payload, secret.JWT_SECRET)
    res.cookie('acces_token', acces_token,{
        httpOnly:true,
        maxAge:7*24*60*60*1000 //7d
    })
    res.redirect('/user/all')
}

exports.logout = async (req,res,next)=>{
    try {
        const rf_token=req.cookies.acces_token;
        res.clearCookie('acces_token', rf_token,{})
        res.redirect('/admin/login')
        
    } catch (err) {
        res.status(500).json({msg:err.message})
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