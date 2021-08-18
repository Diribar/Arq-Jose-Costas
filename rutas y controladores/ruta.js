// Requires ************************************************
var express = require("express");
var router = express.Router();
const controlador = require("./controlador");

// Controladores *******************************************
router.get("/", controlador.homeForm);
router.post("/", controlador.homeGuardar);

router.get("/form", controlador.form);

router.get("/login", controlador.loginForm)

// Exportarlo **********************************************
module.exports = router;
