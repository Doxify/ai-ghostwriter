require('dotenv').config();
var createError    = require('http-errors');
var express        = require('express');
var path           = require('path');
var logger         = require('morgan');
var cors           = require('cors');
var bodyParser     = require('body-parser');

// Express App
var app            = express();


// Routes

// Express configuration
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// configuring routes


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send error
  console.log(err);
  res.status(err.status || 500);
  res.json({
    message: res.locals.error || 'Invalid route.'
  })
});

module.exports = app;