const userShema = require('../models/model-user')
const path = require('path');
var im = require('imagemagick');


exports.createNewPhoto = (req, res, next) => {
    const fileName = req.files.image.name
    const pathFile = path.join(__dirname, '../public/images/') + fileName

    req.files.image.mv(pathFile, (error) => {
        if(error) {
            res.writeHead(500, {
                'Content-Type': 'application/json'
            })
            res.end(JSON.stringify({ status: 'error', message: error }))
            return
        }
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify({ status: 'success', path: 'http://localhost:8050/public/images/' + fileName }))
    })    
}

exports.createNewUser = async (req, res, next) => {
    const newUser = new userShema({
        name: req.body.name,
        profession: req.body.position,
        email: req.body.email,
        phone: req.body.phone,
        photo: req.body.pathPhoto

    })
    await newUser.save()
    res.send()
}

exports.getUsers = async (req, res, next) => {
    const allUsers = await userShema.find({})
    res.send(allUsers)
}