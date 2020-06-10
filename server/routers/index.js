const express = require('express')
const router = express.Router()
const { createNewPhoto, getUsers, getImages, createNewUser } = require('../controlls')

router.get('/', getUsers)
router.post('/create-photo', createNewPhoto)
router.post('/create-user', createNewUser)


module.exports = router
