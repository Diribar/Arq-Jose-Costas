"use strict";

// Requires
const BD_API = require("../funciones/BD_API");
const BD_obtiene = require("../funciones/BD_obtiene");
const funciones = require("../funciones/varias");

module.exports = {
	contactanos: async (req, res) => {
		// Variables
		const {nombre, mail, telefono, comentario} = req.query;
		if (!nombre || !mail || !comentario) return res.json(false);

		// Arma los datos
		const datos = {
			...{nombre, mail, telefono},
			asunto: "Mensaje de un contacto",
			comentario: decodeURIComponent(comentario),
		};

		// Envía mail
		const mailEnviado = await funciones.enviaMail(datos);

		// Fin
		return res.json(mailEnviado);
	},
	login: async (req, res) => {
		// Variables
		const datos = {asunto: "Código de Login"};

		// Genera un código y lo guarda en session
		const codigo = Math.round(Math.random() * Math.pow(10, 6)) + "";
		req.session.codigo = codigo;

		// Envía un mail con el código
		datos.comentario = "El código a ingresar para el Login es: " + codigo;
		req.session.mailEnviado = await funciones.enviaMail(datos);

		// Fin
		return res.json();
	},
	editarOrdenarRegistros: async (req, res) => {
		const {entidad, id, orden} = req.query;
		await BD_API.OrdenarRegistros(entidad, id, orden);
		return res.json();
	},
	editarCambiarValor: async (req, res) => {
		const {entidad, id, dato, campo} = req.query;
		await BD_API.CambiarValor(entidad, id, dato, campo);
		return res.json();
	},
	editarEliminarRegistro: async (req, res) => {
		const {entidad, id, ruta} = req.query;
		// Borrar el archivo de imagen
		if (entidad.includes("imagenes")) {
			// Obtener los datos
			const datos = await BD_obtiene.obtienePorId(entidad, id);
			funciones.eliminaImagen(ruta, datos.archivo);
		}
		// Borrar el registro
		await BD_API.EliminarRegistro(entidad, id);
		return res.json();
	},
	editarColorAgregar: async (req, res) => {
		const {nombre, codigo} = req.query;
		await BD_API.AgregarColor(nombre, codigo);
		return res.json();
	},
	editarTextoAgregar: async (req, res) => {
		const {entidad, contenido, grupo} = req.query;
		let orden = await BD_obtiene.obtieneTodos(entidad).then((n) => n.filter((m) => m.grupo == grupo));
		if (orden == [] || orden == "") orden = 1;
		else {
			orden = orden.map((m) => m.orden);
			orden = Math.max(...orden) + 1;
		}
		await BD_API.AgregarTexto(entidad, contenido, grupo, orden);
		return res.json();
	},
	editarGrupoEliminar: async (req, res) => {
		const {entidad, grupo} = req.query;
		await BD_API.EliminarGrupo(entidad, grupo);
		return res.json();
	},
};
