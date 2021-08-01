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
app.use('/public/uploads',express.static('public/uploads'))
app.use(express.static(path.join(__dirname + "/public/client")))
app.use(express.static(path.join(__dirname + "/public/admin")))

app.use('/about', require('./routes/aboutRouter'))
app.use('/user', require('./routes/userRouter'))
app.use('/contact', require('./routes/contactRouters'))
app.use('/poster', require('./routes/posterRouter'))
app.use('/', require('./routes/mainRouter'))

app.listen(PORT, ()=>{
    console.log('Server is running to localhost')
})

app.get('/home', (req,res)=>{
    res.render('client/image', {layout:false})
})