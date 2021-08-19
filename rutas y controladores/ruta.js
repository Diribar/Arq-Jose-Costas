// Requires ************************************************
var express = require("express");
var router = express.Router();
const controlador = require("./controlador");

// Controladores *******************************************
router.get("/", controlador.home);
router.get("/form", controlador.contactanosFrontEnd);
router.post("/form", controlador.contactanosBackEnd);

router.get("/login", controlador.loginForm)
router.get("/editar", controlador.editarHomeForm);

// Exportarlo **********************************************
module.exports = router;
