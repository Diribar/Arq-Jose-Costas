// **** Requires ***********
const BD_varios = require("../base_de_datos/config/BD_varios");
const nodemailer = require("./nodemailer");
const path = require("path");
const fs = require("fs");

// **** Exportar ***********
module.exports = {
	contactanosFrontEnd: async (req, res) => {
		let { nombre, mail, telefono, comentario } = req.query;
		asunto = "Mensaje de un contacto";
		comentario = decodeURIComponent(comentario);
		await nodemailer
			.enviarMail(asunto, nombre, mail, telefono, comentario)
			.catch(console.error);
		return res.json();
	},

	id_fijar_orden: async (req, res) => {
		let { id, orden } = req.query;
		await BD_varios.ID_fijar_orden(id, orden);
		return res.json();
	},

	cambiar_filas: async (req, res) => {
		let { id, dato, campo } = req.query;
		await BD_varios.Cambiar_valores("titulos", id, dato, campo);
		return res.json();
	},

	cambiar_encabezado: async (req, res) => {
		let { id, dato, campo } = req.query;
		await BD_varios.Cambiar_valores("encabezado", id, dato, campo);
		return res.json();
	},

	cambiar_color: async (req, res) => {
		let { id, dato, campo } = req.query;
		await BD_varios.Cambiar_valores("colores", id, dato, campo);
		return res.json();
	},

	agregar_color: async (req, res) => {
		let { nombre, codigo } = req.query;
		await BD_varios.Agregar_color(nombre, codigo);
		return res.json();
	},

	eliminar_color: async (req, res) => {
		let { id } = req.query;
		await BD_varios.Eliminar_color(id);
		return res.json();
	},

	eliminar_imagen: (req, res) => {
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
		console.log(resultado);
		// Fin
		return res.json();
	},
};
