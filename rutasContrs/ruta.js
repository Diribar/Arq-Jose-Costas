"use strict";

// Requires
var express = require("express");
var router = express.Router();
const vista = require("./controladorVista");
const API = require("./controladorAPI");

// Middlewares de Validaciones
const soloUsuarios = require("../middlewares/soloUsuarios");
const uploadFile = require("../middlewares/multer");

// Controladores de API
// Home
router.get("/contactanos", API.contactanos);
router.get("/api-login", API.login);

// Edicion
router.get("/edicion/ordena-registros", API.editarOrdenarRegistros);
router.get("/edicion/cambia-el-valor", API.editarCambiarValor);
router.get("/edicion/elimina-registro", API.editarEliminarRegistro);
router.get("/edicion/coloragregar", API.editarColorAgregar);
router.get("/edicion/textoagregar", API.editarTextoAgregar);
router.get("/edicion/elimina-grupo", API.editarGrupoEliminar);

// Controladores de Vistas
// Varios
router.get("/", vista.home);
router.post("/contactanos", vista.contactanos);

// Login
router.get("/login", vista.login.form);
router.post("/login", vista.login.guardar);
router.get("/logout", vista.login.logout);

// Edición
router.get("/edicion/home", soloUsuarios, vista.edicion.home);
router.get("/edicion/colores", soloUsuarios, vista.edicion.colores);
router.get("/edicion/textos/:id", soloUsuarios, vista.edicion.textos);
router.get("/edicion/imagenes/:id", soloUsuarios, vista.edicion.imagenes);
router.get("/edicion/botones/:id", soloUsuarios, vista.edicion.botones);

// Imagen
router.post("/edicion/agregarImagen", uploadFile.single("imagen"), vista.imagen.agregar);
router.post("/edicion/reemplazarImagen", uploadFile.single("imagen"), vista.imagen.reemplazar);

// Exportarlo
module.exports = router;
