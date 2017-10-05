const express = require('express'), path = require('path'), http = require('http'), bodyParser = require('body-parser'), mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development', zn = require('./bin/zinc.config')[env], msg = require('./bin/zinc.logger'), zinc = express();

msg.log('Server is starting up, Please wait...')

zinc.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))//Express JSON Body Parser
zinc.use(express.static(path.join(__dirname, zn.server.client))); // Path for Angular 

// Start Connection to Database
mongoose.Promise = require('bluebird')
mongoose.connect(zn.database.atlas, { useMongoClient: true })
    .on('open', (err, next) => { msg.log('Zinc is now listening for Database on Port ' + zn.database.port) })
    .on('error', (err, next) => { msg.log(msg, error = 'Uh, Oh there was an Error' + err); process.exit(1) })
    .on('disconnected', (err, next) => { msg.log(msg, error = err + ' Failed to connect to Database, Exiting...'); process.exit(0) })
// Catchall for URL 
zinc.get('*', function (err, req, res, next) { res.sendfile(path.join(__dirname, zn.server.client)) })
// Api Starts Here
zinc.use('/api', require('./bin/zinc.api'), function (err, req, res, next) { res.send(err); msg.log(msg, error = err)})
// Zinc Server Start
zinc.listen(zn.server.port, function (err) { msg.log('Zinc is now listening on Port ' + zn.server.port), error = err; })