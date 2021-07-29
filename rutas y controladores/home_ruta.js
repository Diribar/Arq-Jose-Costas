// Requires ************************************************
var express = require("express");
var router = express.Router();
const controlador = require("./home_controlador");

// Controladores *******************************************
router.get("/login", controlador.loginForm)
router.get("/", controlador.home);

// Exportarlo **********************************************
module.exports = router;
