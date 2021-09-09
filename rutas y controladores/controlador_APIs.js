// **** Requires ***********
const BD_ABM = require("../base_de_datos/config/BD_ABM");
const BD_obtener = require("../base_de_datos/config/BD_obtener");
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
		await BD_ABM.OrdenarRegistros(entidad, id, orden);
		return res.json();
	},

	editarCambiarValor: async (req, res) => {
		let { entidad, id, dato, campo } = req.query;
		await BD_ABM.CambiarValor(entidad, id, dato, campo);
		return res.json();
	},

	editarEliminarRegistro: async (req, res) => {
		let { entidad, id } = req.query;
		await BD_ABM.EliminarRegistro(entidad, id);
		return res.json();
	},

	editarColorAgregar: async (req, res) => {
		let { nombre, codigo } = req.query;
		await BD_ABM.AgregarColor(nombre, codigo);
		return res.json();
	},

	editarTextoAgregar: async (req, res) => {
		let { entidad, contenido, grupo } = req.query;
		orden = await BD_obtener.ObtenerTodos(entidad).then((n) =>
			n.filter((m) => m.grupo == grupo)
		);
		if ((orden == [])) {
			orden = 1;
		} else {
			orden = orden.map((m) => {
				return m.orden;
			});
			orden = Math.max(...orden) + 1;
		}
		await BD_ABM.AgregarTexto(entidad, contenido, grupo, orden);
		return res.json();
	},

	editarGrupoEliminar: async (req, res) => {
		let { entidad, grupo } = req.query;
		await BD_ABM.EliminarGrupo(entidad, grupo);
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
