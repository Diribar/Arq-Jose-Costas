// ********************** Requires ********************************
require("dotenv").config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
//var logger = require('morgan');
var app = express();
var session = require("express-session");

// view engine setup
app.set("views", [
	path.resolve(__dirname, "./views"),
	path.resolve(__dirname, "./views/0-partials"),
	path.resolve(__dirname, "./views/1-secciones"),
	path.resolve(__dirname, "./views/2-edicion"),
]);
app.set('view engine', 'ejs');

//app.use(logger('dev')); Muestra en la terminal los archivos usados
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
// Crea carpetas públicas
global.carpetaExterna = path.join(__dirname, "../", "externa/");
app.use("/publico", express.static(path.join(__dirname, "public")));
app.use("/externa", express.static(carpetaExterna));

// Obtiene la versión y el año
const {exec} = require("child_process");
const carpeta = path.basename(path.resolve());
exec("git rev-parse --abbrev-ref HEAD", (err, stdout) => (global.version = (err ? carpeta : stdout.trim()).slice(-4)));
exec("git rev-parse --abbrev-ref HEAD", (err, stdout) => (global.ano = (err ? carpeta : stdout.trim()).slice(0, 4)));

// ************************** Router ******************************
var router = require("./rutas-y-controladores/ruta");
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
