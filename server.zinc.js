const express = require('express'), path = require('path'), favicon = require('serve-favicon'), logger = require('morgan');
const cookieParser = require('cookie-parser'), bodyParser = require('body-parser'), mongoose = require('mongoose');
const api = require('./controllers/api.zinc')

const app = express();
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Api Starts Here
app.use('/api', api, function (req, res, next) {
  res.send(err)
})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
