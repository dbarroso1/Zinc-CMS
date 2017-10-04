const express = require('express'),
    path = require('path'),
    http = require('http'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')

const env = process.env.NODE_ENV || 'development', zn = require('./bin/zinc.config')[env];
const zinc = express();

// Start Connection to Database
mongoose.Promise = require('bluebird')
mongoose.connect(zn.database.atlas, { useMongoClient: true })
    .on('open', (err) => { })
    .on('error', (err) => { process.exit(1) })
    .on('disconnected', (err) => { process.exit(0) })

zinc.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))//Express JSON Body Parser
zinc.use(express.static(path.join(__dirname, './public/dist'))); // Path for Angular 

// Catchall for URL 
zinc.get('*', function (err, req, res, next) { res.sendfile(path.join(__dirname, './public/dist')) })
zinc.use('/api', require('./bin/zinc.api')) // Api Starts Here
zinc.use(function (err, req, res, next) { res.send(err) })

// Zinc Server Start
zinc.listen(zn.server.port, function () { console.log( 'Listening on ' + zn.server.port) })