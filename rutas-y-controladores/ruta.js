// Requires ************************************************
var express = require("express");
var router = express.Router();
const path = require("path");
const controlador_varios = require("./controlador_varios");
const controlador_APIs = require("./controlador_APIs");

// Middlewares de Validaciones
const soloUsuarios = require("../middlewares/soloUsuarios");
const uploadFile = require("../middlewares/multer");

// Controladores Varios ************************************
router.get("/", controlador_varios.home);
router.post("/contactanos", controlador_varios.contactanosBackEnd);
router.get("/login", controlador_varios.loginForm);
router.post("/login", controlador_varios.loginDatos);
router.get("/logout", controlador_varios.logout);
router.get("/editar/home", soloUsuarios, controlador_varios.editarHome);
router.get("/editar/colores", soloUsuarios, controlador_varios.editarColores);
router.get("/editar/textos/proyectos", soloUsuarios, controlador_varios.editarProyectos);
router.get("/editar/textos/:id", soloUsuarios, controlador_varios.editarTextos);
router.get("/editar/imagenes/:id", soloUsuarios, controlador_varios.editarImagenes);
router.post("/editar/reemplazarImagen", uploadFile.single("imagen"), controlador_varios.reemplazarImagen);
router.post("/editar/agregarImagen", uploadFile.single("imagen"), controlador_varios.agregarImagen);

// Controladores de APIs ***********************************
// Home
router.get("/contactanos", controlador_APIs.homeContactanosFrontEnd);
// Editar - Varios
router.get("/editar/ordenarregistros", controlador_APIs.editarOrdenarRegistros);
router.get("/editar/cambiarvalor", controlador_APIs.editarCambiarValor);
router.get("/editar/eliminarregistro", controlador_APIs.editarEliminarRegistro);
// Editar - Colores
router.get("/editar/coloragregar", controlador_APIs.editarColorAgregar);
// Editar - Texto
router.get("/editar/textoagregar", controlador_APIs.editarTextoAgregar);
router.get("/editar/eliminargrupo", controlador_APIs.editarGrupoEliminar);

// Exportarlo **********************************************
module.exports = router;
