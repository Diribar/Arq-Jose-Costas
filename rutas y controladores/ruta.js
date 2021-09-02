// Requires ************************************************
var express = require("express");
var router = express.Router();
const controlador_varios = require("./controlador_varios");
const controlador_APIs = require("./controlador_APIs");

// Middlewares de Validaciones
const logout = require("../middlewares/logout");
const soloUsuarios = require("../middlewares/soloUsuarios");

// Controladores Varios ************************************
router.get("/", controlador_varios.home);
router.post("/contactanos", controlador_varios.contactanosBackEnd);
router.get("/login", logout, controlador_varios.loginForm);
router.post("/login", controlador_varios.loginDatos);
router.get("/editar/home", soloUsuarios, controlador_varios.editarHome);
router.get("/editar/colores", soloUsuarios, controlador_varios.editarColores);
router.get("/editar/colores/proyectos", soloUsuarios, controlador_varios.editarColoresProyectos);
router.get("/editar/texto/:id", soloUsuarios, controlador_varios.editarTexto);
router.get("/editar/imagenes/:id", soloUsuarios, controlador_varios.editarImagenes);

// Controladores de APIs ***********************************
router.get("/contactanos", controlador_APIs.contactanosFrontEnd);
router.get("/editar/id_fijar_orden", controlador_APIs.id_fijar_orden);
router.get("/editar/cambiar_filas", controlador_APIs.cambiar_filas);
router.get("/editar/cambiar_encabezado", controlador_APIs.cambiar_encabezado);
router.get("/editar/cambiar_color", controlador_APIs.cambiar_color);
router.get("/editar/agregar_color", controlador_APIs.agregar_color);
router.get("/editar/eliminar_color", controlador_APIs.eliminar_color);
router.get("/editar/eliminar_imagen", controlador_APIs.eliminar_imagen);

// Exportarlo **********************************************
module.exports = router;
