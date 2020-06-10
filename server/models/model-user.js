const mongoose = require("mongoose");
const {Schema, model} = require('mongoose')
const userScheme = new Schema({
    name: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
});

module.exports = model('users', userScheme)