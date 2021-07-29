const Contact = require('../models/contact')

exports.contactCreate = async (req,res,next)=>{
    try {
    const {name, email, message} = req.body;
    const contact = new Contact({name, email, message})
    await contact.save()
    res.redirect('/')
    } catch (error) {
        return res.redirect('/')
    }
}

exports.getAll = async (req,res,next)=>{
    const contact = await Contact.find()
    res.send(contact)
}