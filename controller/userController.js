const User = require('../models/user')

exports.userCreate = async (req,res,next)=>{
    try {
    const {name, email} = req.body;
    const user = new User({name, email})
    await user.save()
    res.redirect('/admin')
    } catch (error) {
        return res.redirect('/register')
    }
}

exports.getAll = async (req,res,next)=>{
    const user = await User.find()
    res.send(user)
}