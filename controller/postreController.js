const Poster = require('../models/poster')
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

exports.posterCreate = async (req,res,next)=>{
    try { 
        let originalImage = req.file.filename
        let compressedFile = path.join(__dirname, '../public/uploads', md5(new Date().getTime()) + '.jpg')
    await sharp(originalImage) // req.file.path - bu original rasm
      .resize(260, 310)
      .jpeg({ quality: 100 })
      .toFile(compressedFile, (error) => {
       if (error) {
        res.send(error)
       }
      })

    const {name} = req.body;
    const poster = new Poster({name, poster:originalImage,image:compressedFile})
    await poster.save()
    res.redirect('/admin')
    } catch (error) {
        return res.redirect('/admin')
    }
}

exports.getAll = async (req,res,next)=>{
    const poster = await Poster.find()
    res.send(poster)
}