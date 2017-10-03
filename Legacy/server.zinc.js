const express = require('express'),
  path = require('path'),
  http = require('http'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser');

const api = require('./controllers/api.zinc'), log = require('./controllers/logger.zinc');

const zinc = express();

zinc.use(bodyParser.json(), bodyParser.urlencoded({ extended: false })); // Json Body parser for Express
zinc.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));       // Path for Favicon
zinc.use(express.static(path.join(__dirname, './public')));             // path for Angular
zinc.use(cookieParser());
zinc.use(logger('dev'));

// Api Starts Here
zinc.use('/api', api, function (req, res, next) {
  res.send(err)
})
zinc.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// catch 404 and forward to error handler
zinc.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
zinc.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = zinc;
