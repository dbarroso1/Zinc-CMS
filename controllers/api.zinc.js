const express = require('express'), router = express.Router(), mongoose = require('mongoose')

router.get('/', function (req, res) {
    res.send({
        title : 'Zinc-CMS',
        version : '0.0.1'
    })
})

module.exports = router //exports everything we're doing