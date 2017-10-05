const express = require('express'), router = express.Router(), mongoose = require('mongoose'),
    msg = require('./zinc.logger'), config = require('./zinc.config');

const Password = require('./models/password')
const User = require('./models/user')
const Version = require('./models/version')

// routes to API [ //localhost/api ]
router.get('/', getApi)

function getApi(req, res) { res.send(config.api); msg.log(config.api.message) }

module.exports = router //exports everything we're doing