"use strict";

// Start-up - última versión subida: 1.12
console.clear();

// Requires
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

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
global.version = "mar/2026";

// Variables que toman valores de 'path'
global.entProducc = path.basename(__dirname) == "1-Actual";
global.entPrueba = path.basename(__dirname) == "2-Prueba";
global.entDesarr = !entProducc && !entPrueba;

// Listener
const puerto = entProducc ? 4200 : entPrueba ? 4206 : 3000;
app.listen(puerto, () => console.log("\nJosé Costas - Servidor funcionando...")); // Para conectarse con el servidor

// Base de datos
const credenciales = require("./variables/Credenciales.js");
const entornoBd = !entDesarr ? "produccion" : "desarrollo";
const credencsBD = credenciales.bd[entornoBd];
const {database, username, password} = credencsBD;
global.Sequelize = require("sequelize");
global.sequelize = new Sequelize(database, username, password, credencsBD);

// Para usar la propiedad "session"
const mysql = require("mysql2");
const connection = mysql.createConnection(credenciales.session[entornoBd]);
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const unaHora = 60 * 60 * 1000;
const unDia = unaHora * 24;
const sessionStore = new MySQLStore(
	{
		expiration: unDia / 1000,
		clearExpired: true,
		checkExpirationInterval: unaHora / 1000,
		useUnixTimestamp: true, // importante para segundos
	},
	connection,
); // la sesión se borra automáticamente un día después de la última novedad del usuario
app.use(
	session({
		key: "session_id", // nombre de cookie
		secret: "jose-costas",
		resave: false, // no reescribe la sesión en la base de datos si no hubo cambios en los datos de sesión
		saveUninitialized: false,
		store: sessionStore,
		rolling: true, // reinicia la vida útil con cada novedad en la session
		cookie: {maxAge: unDia}, // la sesión expira automáticamente un día después de la última novedad del usuario
	}),
);
// sessionStore.clearExpiredSessions(); // Elimina sesiones antiguas

// Ruta
const router = require("./rutasContrs/ruta");
app.use("/", router);
