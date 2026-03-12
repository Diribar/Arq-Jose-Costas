"use strict";

// Start-up - última versión subida: 1.09
console.clear();

// Requires
require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({secret: "keyboard cat", resave: false, saveUninitialized: false}));

// view engine setup
app.set("views", [
	path.resolve(__dirname, "./views"),
	path.resolve(__dirname, "./views/0-partials"),
	path.resolve(__dirname, "./views/1-secciones"),
	path.resolve(__dirname, "./views/2-edicion"),
]);
app.set("view engine", "ejs");

// Crea carpetas públicas
global.carpetaExterna = path.join(__dirname, "../9-Imagenes");
app.use("/formato", express.static(path.join(__dirname, "publico/formatos")));
app.use("/javascript", express.static(path.join(__dirname, "publico/javascripts")));
app.use("/imagenes", express.static(carpetaExterna));

// Obtiene la versión y el año
global.version = process.env.version;

// Ruta
const router = require("./rutasContrs/ruta");
app.use("/", router);

// Variables que toman valores de 'path'
global.entProducc = path.basename(__dirname) == "1-Actual";
global.entPrueba = path.basename(__dirname) == "2-Prueba";
global.entDesarr = !entProducc && !entPrueba;

// Listener
const puerto = entProducc ? 4200 : entPrueba ? 4206 : 3000;
app.listen(puerto, () => console.log("\nJosé Costas - Servidor funcionando...")); // Para conectarse con el servidor
