var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let mongoose = require('mongoose');
let passport = require('passport');

require('./models/User');
require('./models/Break');


require('./config/passport');

mongoose.connect("mongodb://Dennisder:denny1997@ds131997.mlab.com:31997/snookerapplicatie", { useMongoClient: true });

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());


app.use('/', index);
app.use('/snookerapplicatie/users', users);

app.use(express.static(__dirname + '/dist'));

app.all('*', (req, res) => {
  const indexFile = `${path.join(__dirname, 'dist')}/index.html`;
  res.status(200).sendFile(indexFile);
}); 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
