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
router.get("/editar/texto/:id", soloUsuarios, controlador_varios.editarTexto);
router.get("/editar/imagenes/:id", soloUsuarios, controlador_varios.editarImagenes);

// Controladores de APIs ***********************************
// Home
router.get("/contactanos", controlador_APIs.homeContactanosFrontEnd);
// Editar - Varios
router.get("/editar/ordenarregistros", controlador_APIs.editarOrdenarRegistros);
// Editar - Home
router.get("/editar/hometexto", controlador_APIs.editarHomeTexto);
router.get("/editar/homecolorenc", controlador_APIs.editarHomeColorEnc);
// Editar - Colores
router.get("/editar/coloragregar", controlador_APIs.editarColorAgregar);
router.get("/editar/colormodificar", controlador_APIs.editarColorModificar);
router.get("/editar/coloreliminar", controlador_APIs.editarColorEliminar);

router.get("/editar/imageneliminar", controlador_APIs.editarImagenEliminar);

// Exportarlo **********************************************
module.exports = router;
