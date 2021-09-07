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
		let { id, orden, entidad } = req.query;
		await BD_varios.editarOrdenarRegistros(id, orden, entidad);
		return res.json();
	},

	homeTexto: async (req, res) => {
		let { id, dato, campo } = req.query;
		await BD_varios.CambiarValores("titulos", id, dato, campo);
		return res.json();
	},

	homeColorEnc: async (req, res) => {
		let { id, dato, campo } = req.query;
		await BD_varios.CambiarValores("encabezado", id, dato, campo);
		return res.json();
	},

	colorModificar: async (req, res) => {
		let { id, dato, campo } = req.query;
		await BD_varios.CambiarValores("colores", id, dato, campo);
		return res.json();
	},

	colorAgregar: async (req, res) => {
		let { nombre, codigo } = req.query;
		await BD_varios.AgregarColor(nombre, codigo);
		return res.json();
	},

	colorEliminar: async (req, res) => {
		let { id } = req.query;
		await BD_varios.EliminarColor(id);
		return res.json();
	},

	imagenEliminar: (req, res) => {
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
