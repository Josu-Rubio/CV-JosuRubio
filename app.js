var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('view engine', 'ejs');

// Web Routes
app.get('/', function (req, res) {
  res.render('pages/index');
});
app.get('/mng', function (req, res) {
  res.render('pages/exp/mng');
});
app.get('/tcp', function (req, res) {
  res.render('pages/exp/tcp');
});
app.get('/host', function (req, res) {
  res.render('pages/exp/host');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error');
});

module.exports = app;
