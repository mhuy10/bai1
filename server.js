const express=require('express')
const customerRouter=require('./routes/customer')
const indexRouter=require('./routes/index')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()
const app=express()

//connect database


app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

const connectFunction = async()=>{
    try{
        // await mongoose.connect('mongodb://localhost/bai1')
        await mongoose.connect(process.env.STR_CONNECT)
        console.log("Connected succesfully")
    }catch (e) {
        
        console.log("Connect failed")
    }
}

connectFunction()
// app.set('view engine', 'ejs')
// app.use(express.urlencoded({extended: false}))
app.use('/customer/',customerRouter)
app.use('/',indexRouter)

app.listen(process.env.PORT||3000)