const express = require('express')
const app = require('./middleware')
const mongoose = require('mongoose')

async function start() {
    try {
        await mongoose.connect('mongodb+srv://Pavel:pavel123@cluster0-lelfu.mongodb.net/users',{
            useNewUrlParser:true, 
            useFindAndModify:false,
            useUnifiedTopology: true  
        })
        app.listen(8050, ()=> {
            console.log('Server started')
        })
    } catch(e) {
        console.log(e)
    }
}
//Pavel
//pavel123

start()

