// Requires ************************************************
var express = require("express");
var router = express.Router();
const controlador = require("./controlador");

// Controladores *******************************************
router.get("/", controlador.home);
router.get("/form", controlador.contactanosFrontEnd);
router.post("/form", controlador.contactanosBackEnd);

router.get("/login", controlador.loginForm)

router.get("/editar/home", controlador.editarHomeForm);
router.get("/editar/colores", controlador.editarHomeForm);
router.get("/editar/texto/:id", controlador.editarHomeForm);
router.get("/editar/imagenes/inicio", controlador.editarHomeForm);
router.get("/editar/imagenes/proyectos", controlador.editarHomeForm);

// Exportarlo **********************************************
module.exports = router;
