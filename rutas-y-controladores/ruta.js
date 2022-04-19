// Requires ************************************************
var express = require("express");
var router = express.Router();
const vista = require("./controladorVista");
const API = require("./controladorAPI");

// Middlewares de Validaciones
const soloUsuarios = require("../middlewares/soloUsuarios");
const uploadFile = require("../middlewares/multer");

// Controladores Varios ************************************
router.get("/", vista.home);
router.post("/contactanos", vista.contactanosBackEnd);
router.get("/loginnuevo", vista.loginForm);
router.post("/loginnuevo", vista.loginDatos);
router.get("/logout", vista.logout);
router.get("/editar/home", soloUsuarios, vista.editarHome);
router.get("/editar/colores", soloUsuarios, vista.editarColores);
router.get("/editar/textos/:id", soloUsuarios, vista.editarTextos);
router.get("/editar/imagenes/:id", soloUsuarios, vista.editarImagenes);
router.get("/editar/botones/:id", soloUsuarios, vista.editarBotones);
router.post("/editar/reemplazarImagen", uploadFile.single("imagen"), vista.reemplazarImagen);
router.post("/editar/agregarImagen", uploadFile.single("imagen"), vista.agregarImagen);

// Controladores de APIs ***********************************
// Home
router.get("/contactanos", API.contactanosFrontEnd);
// Editar - Varios
router.get("/editar/ordenarregistros", API.editarOrdenarRegistros);
router.get("/editar/cambiarvalor", API.editarCambiarValor);
router.get("/editar/eliminarregistro", API.editarEliminarRegistro);
// Editar - Colores
router.get("/editar/coloragregar", API.editarColorAgregar);
// Editar - Texto
router.get("/editar/textoagregar", API.editarTextoAgregar);
router.get("/editar/eliminargrupo", API.editarGrupoEliminar);

// Exportarlo **********************************************
module.exports = router;
