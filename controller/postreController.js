const Poster = require('../models/poster')
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const md5 = require('md5')

exports.posterCreate = async (req,res,next)=>{
    try { 
        let originalImage = req.file.filename
        let compressedFile = path.join(__dirname, '../public/uploads', md5(new Date().getTime()) + '.jpg')
    await sharp(req.file.path) // req.file.path - bu original rasm
      .resize(260, 310)
      .jpeg({ quality: 100 })
      .toFile(compressedFile, (error) => {
       if (error) {
        res.send(error)
       }
      })
    const {name} = req.body;
    const poster = new Poster({name, poster:`/public/uploads/${originalImage}`,image:path.basename(compressedFile)})
    await poster.save()
    res.redirect('/poster/all')
    } catch (error) {
        return res.json({msg:error.message})
    }
}

exports.getAll = async (req,res,next)=>{
    const poster = await Poster.find()
    res.render('admin/poster', {layout:'./admin_layout', poster})
}

exports.deletePoster