const express = require('express'), path = require('path'), favicon = require('serve-favicon'), logger = require('morgan');
const cookieParser = require('cookie-parser'), bodyParser = require('body-parser'), mongoose = require('mongoose');
const api = require('./controllers/api.zinc')

const zinc = express();
const log = require('./controllers/logger.zinc')

zinc.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
zinc.use(logger('dev'));
zinc.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
zinc.use(cookieParser());
zinc.use(express.static(path.join(__dirname, 'public')));

// Api Starts Here
zinc.use('/api', api, function (req, res, next) {
  res.send(err)
})
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
  res.locals.error = req.zinc.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = zinc;
