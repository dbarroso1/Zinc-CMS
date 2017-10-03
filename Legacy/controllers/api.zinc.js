const express = require('express'), router = express.Router(), mongoose = require('mongoose')

router.get('/api', function (req, res) {
    res.send({
        title: 'Zinc-CMS',
        author: 'D. Barroso',
        version: '0.0.1',
        GitHub: 'https://github.com/dbarroso/Zinc-CMS'
    })
})

// exports everything we're doing
module.exports = router