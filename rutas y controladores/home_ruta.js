// Requires ************************************************
var express = require("express");
var router = express.Router();
const controlador = require("./home_controlador");

// Controladores *******************************************
router.get("/", controlador.homeForm);
router.post("/", controlador.homeGuardar);

router.get("/login", controlador.loginForm)

// Exportarlo **********************************************
module.exports = router;
