// **** Requires ***********
const BD_varios = require("../base_de_datos/config/BD_varios");
const nodemailer = require("./nodemailer");
const path = require("path");
const fs = require("fs");

// **** Exportar ***********
module.exports = {
	homeContactanosFrontEnd: async (req, res) => {
		let { nombre, mail, telefono, comentario } = req.query;
		asunto = "Mensaje de un contacto";
		comentario = decodeURIComponent(comentario);
		await nodemailer
			.enviarMail(asunto, nombre, mail, telefono, comentario)
			.catch(console.error);
		return res.json();
	},

	editarOrdenarRegistros: async (req, res) => {
		let { entidad, id, orden } = req.query;
		console.log(req.query)
		await BD_varios.editarOrdenarRegistros(entidad, id, orden);
		return res.json();
	},

	editarCambiarValores: async (req, res) => {
		let { entidad, id, dato, campo } = req.query;
		await BD_varios.editarCambiarValores(entidad, id, dato, campo);
		return res.json();
	},

	editarColorAgregar: async (req, res) => {
		let { nombre, codigo } = req.query;
		await BD_varios.editarAgregarColor(nombre, codigo);
		return res.json();
	},

	editarColorEliminar: async (req, res) => {
		let { id } = req.query;
		await BD_varios.editarEliminarColor(id);
		return res.json();
	},

	editarImagenEliminar: (req, res) => {
		let { id } = req.query;
		const archivo = path.resolve(
			__dirname,
			"../public/imagenes/5-quienes_somos/" + id
		);
		// Averiguar si el archivo es Read-Only (no puede ser que no exista)
		try {
			fs.accessSync(archivo, fs.constants.W_OK);
			resultado = false;
		} catch (err) {
			resultado = true;
		}
		//console.log(resultado);
		// Fin
		return res.json();
	},
};
