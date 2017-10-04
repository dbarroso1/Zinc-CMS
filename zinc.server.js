const express = require('express'),
    path = require('path'),
    http = require('http'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')
const zn = require('./bin/zinc.config'),
    log = require('./bin/zinc.logger'),
    api = require('./bin/zinc.api'),
    zinc = express();

// Start Connection to Database
mongoose.Promise = require('bluebird')
mongoose.connect(zn.databaseURI, { useMongoClient: true })
    .on('open', (err) => { log.dbCheck(err) })
    .on('error', (err) => { log.errMgmt(err); process.exit(1) })
    .on('disconnected', (err) => { log.errFatal(err); process.exit(0) })

zinc.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))//Express JSON Body Parser
zinc.use(express.static(path.join(__dirname, './public'))); // Path for Angular 

// Catchall for URL 
zinc.get('*', function (err, req, res, next) {
    res.sendfile(path.join(__dirname, 'index.html'))
})
zinc.use('/api', api) // Api Starts Here
zinc.use(function (err, req, res, next) { res.send(err); log.errMgmt(err) })

// Zinc Server Start
zinc.listen(zn.svport, zn.svhost, function () {
    log.svCheck();
})
