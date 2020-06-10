const express = require("express");
const app = express()
const routers = require('../routers')
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());
app.use('/public',express.static('public'))
app.use((cli, res, next) => {
    res.setHeader('Allow', 'http://localhost:3000')
    res.setHeader("Content-Type", "application/json; charset=utf-8")
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept")
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    res.setHeader('Access-Control-Allow-Credentials', "true")
    
    next()
})

app.use(routers)


module.exports = app