var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var router = require('./rutas y controladores/ruta');

var app = express();

// view engine setup
app.set("views", [
	path.resolve(__dirname, "./views"),
	path.resolve(__dirname, "./views/partials"),
	path.resolve(__dirname, "./views/secciones"),
]);
app.set('view engine', 'ejs');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// *********** Para conectarse con el servidor ********************
app.listen(3001, () => console.log("Servidor funcionando en puerto 3001..."));

app.use('/', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
