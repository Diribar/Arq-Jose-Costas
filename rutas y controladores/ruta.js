// Requires ************************************************
var express = require("express");
var router = express.Router();
const controlador_varios = require("./controlador_varios");
const controlador_APIs = require("./controlador_APIs");

// Controladores Varios ************************************
router.get("/", controlador_varios.home);
router.get("/contactanos", controlador_varios.contactanosFrontEnd);
router.post("/contactanos", controlador_varios.contactanosBackEnd);
router.get("/login", controlador_varios.loginForm)
router.get("/editar/home", controlador_varios.editarHomeForm);
router.get("/editar/colores", controlador_varios.editarHomeForm);
router.get("/editar/texto/:id", controlador_varios.editarHomeForm);
router.get("/editar/imagenes/inicio", controlador_varios.editarHomeForm);
router.get("/editar/imagenes/proyectos", controlador_varios.editarHomeForm);

// Controladores de APIs ***********************************
//router.get("/editar/orden_obtener_id", controlador_APIs.orden_obtener_id);
//router.get("/editar/id_fijar_orden", controlador_APIs.id_fijar_orden);

// Exportarlo **********************************************
module.exports = router;
