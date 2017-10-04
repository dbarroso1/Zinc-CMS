const express = require('express'), router = express.Router()
const mongoose = require('mongoose')

const Password = require('./models/password')
const User = require('./models/user')
const Version = require('./models/version')

// routes to API [ //localhost/api ]
router.get('/', function (req, res) {
    res.send("[ ZinCRM - v0.0.3 API Works! ]")
    console.log( res.statusCode )
})

module.exports = router //exports everything we're doing