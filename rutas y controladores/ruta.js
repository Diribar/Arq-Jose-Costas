// Requires ************************************************
var express = require("express");
var router = express.Router();
const controlador_varios = require("./controlador_varios");
const controlador_APIs = require("./controlador_APIs");

// Middlewares de Validaciones
const soloUsuarios = require("../middlewares/soloUsuarios");

// Controladores Varios ************************************
router.get("/", controlador_varios.home);
router.post("/contactanos", controlador_varios.contactanosBackEnd);
router.get("/login", controlador_varios.loginForm);
router.post("/login", controlador_varios.loginDatos);
router.get("/logout", controlador_varios.logout);
router.get("/editar/home", soloUsuarios, controlador_varios.editarHome);
router.get("/editar/colores", soloUsuarios, controlador_varios.editarColores);
router.get("/editar/colores/proyectos", soloUsuarios, controlador_varios.editarColoresProyectos);
router.get("/editar/textos/:id", soloUsuarios, controlador_varios.editarTextos);
router.get("/editar/imagenes/:id", soloUsuarios, controlador_varios.editarImagenes);

// Controladores de APIs ***********************************
// Home
router.get("/contactanos", controlador_APIs.homeContactanosFrontEnd);
// Editar - Varios
router.get("/editar/ordenarregistros", controlador_APIs.editarOrdenarRegistros);
router.get("/editar/cambiarvalores", controlador_APIs.editarCambiarValores);
router.get("/editar/coloreliminar", controlador_APIs.editarColorEliminar);
// Editar - Colores
router.get("/editar/coloragregar", controlador_APIs.editarColorAgregar);
router.get("/editar/coloreliminar", controlador_APIs.editarColorEliminar);
// Editar - Texto
router.get("/editar/textoagregar", controlador_APIs.editarTextoAgregar);
router.get("/editar/textoeliminar", controlador_APIs.editarTextoEliminar);

router.get("/editar/imageneliminar", controlador_APIs.editarImagenEliminar);

// Exportarlo **********************************************
module.exports = router;
