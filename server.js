const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const layout = require('express-ejs-layouts')
const path = require('path')
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const ejs = require('ejs')
const methodOverride = require('method-override')
const app = express()
connectDB()

app.use(bodyParser.json())
app.locals.moment = require("moment");
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method',{
    methods:['POST', 'GET']
}))

app.use(cookieParser())
app.use(cors())
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(layout);

app.use(express.static('public'))
app.use(express.static(path.join(__dirname + "/public/client")))
app.use(express.static(path.join(__dirname + "/public")))

app.use('/about', require('./routes/aboutRouter'))
app.use('/user', require('./routes/userRouter'))
app.use('/contact', require('./routes/contactRouters'))
app.use('/poster', require('./routes/posterRouter'))

app.listen(PORT, ()=>{
    console.log('Server is running to localhost')
})

app.get('/', (req,res)=>{
    res.render('client/index', {layout:false})
})
app.get('/admin/poster', (req,res)=>{
    res.render('admin/cart', {layout:'./admin_layout'})
})
app.get('/admin', (req,res)=>{
    res.render('admin/user', {layout:'./admin_layout'})
})
app.get('/admin/contact', (req,res)=>{
    res.render('admin/contact', {layout:'./admin_layout'})
})
app.get('/admin/about', (req,res)=>{
    res.render('admin/about', {layout:'./admin_layout'})
})
app.get('/admin/update', (req,res)=>{
    res.render('admin/update', {layout:'./admin_layout'})
})