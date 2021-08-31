// Requires ************************************************
var express = require("express");
var router = express.Router();
const controlador_varios = require("./controlador_varios");
const controlador_APIs = require("./controlador_APIs");

// Controladores Varios ************************************
router.get("/", controlador_varios.home);
router.post("/contactanos", controlador_varios.contactanosBackEnd);
router.get("/login", controlador_varios.loginForm);
router.get("/editar/home", controlador_varios.editarHomeForm);
router.get("/editar/colores", controlador_varios.editarColores);
router.get("/editar/colores/proyectos", controlador_varios.editarColoresProyectos);
router.get("/editar/texto/:id", controlador_varios.editarTexto);
router.get("/editar/imagenes/inicio", controlador_varios.editarImagenes);
router.get("/editar/imagenes/proyectos", controlador_varios.editarHomeForm);

// Controladores de APIs ***********************************
router.get("/contactanos", controlador_APIs.contactanosFrontEnd);
router.get("/editar/id_fijar_orden", controlador_APIs.id_fijar_orden);
router.get("/editar/cambiar_filas", controlador_APIs.cambiar_filas);
router.get("/editar/cambiar_encabezado", controlador_APIs.cambiar_encabezado);
router.get("/editar/cambiar_color", controlador_APIs.cambiar_color);

// Exportarlo **********************************************
module.exports = router;
