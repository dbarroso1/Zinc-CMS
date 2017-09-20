const express = require('express'), router = express.Router(), mongoose = require('mongoose')

router.get('/', function (req, res) {
    res.send("[ ZinCRM - v0.0.3 API Works! ]")
})

module.exports = router //exports everything we're doing