// Requires ************************************************
var express = require("express");
var router = express.Router();
const controlador_home = require("./controlador_home");
const controlador_editar = require("./controlador_editar");

// Controladores *******************************************
router.get("/", controlador_home.home);
router.get("/contactanos", controlador_home.contactanosFrontEnd);
router.post("/contactanos", controlador_home.contactanosBackEnd);

router.get("/login", controlador_home.loginForm)

router.get("/editar/home", controlador_editar.editarHomeForm);
router.get("/editar/colores", controlador_editar.editarHomeForm);
router.get("/editar/texto/:id", controlador_editar.editarHomeForm);
router.get("/editar/imagenes/inicio", controlador_editar.editarHomeForm);
router.get("/editar/imagenes/proyectos", controlador_editar.editarHomeForm);

// APIs ****************************************************
//router.get("/editar/orden_obtener_id", controlador_editar.orden_obtener_id);
//router.get("/editar/id_fijar_orden", controlador_editar.id_fijar_orden);

// Exportarlo **********************************************
module.exports = router;
