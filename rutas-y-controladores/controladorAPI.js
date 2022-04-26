// **** Requires ***********
const BD_API = require("../base_de_datos/config/BD_API");
const BD_obtener = require("../base_de_datos/config/BD_obtener");
const funciones = require("./funciones");

// **** Exportar ***********
module.exports = {
	contactanosFrontEnd: async (req, res) => {
		let { nombre, mail, telefono, comentario } = req.query;
		asunto = "Mensaje de un contacto";
		comentario = decodeURIComponent(comentario);
		await funciones
			.enviarMail(asunto, nombre, mail, telefono, comentario)
			.catch(console.error);
		return res.json();
	},

	editarOrdenarRegistros: async (req, res) => {
		let { entidad, id, orden } = req.query;
		await BD_API.OrdenarRegistros(entidad, id, orden);
		return res.json();
	},

	editarCambiarValor: async (req, res) => {
		let { entidad, id, dato, campo } = req.query;
		await BD_API.CambiarValor(entidad, id, dato, campo);
		return res.json();
	},

	editarEliminarRegistro: async (req, res) => {
		let { entidad, id, ruta } = req.query;
		// Borrar el archivo de imagen
		if (entidad.includes("imagenes")) {
			// Obtener los datos
			datos = await BD_obtener.ObtenerPorId(entidad, id)
			funciones.eliminarImagen(ruta, datos.archivo);
		}
		// Borrar el registro
		await BD_API.EliminarRegistro(entidad, id);
		return res.json();
	},

	editarColorAgregar: async (req, res) => {
		let { nombre, codigo } = req.query;
		await BD_API.AgregarColor(nombre, codigo);
		return res.json();
	},

	editarTextoAgregar: async (req, res) => {
		let { entidad, contenido, grupo } = req.query;
		orden = await BD_obtener.ObtenerTodos(entidad).then((n) =>
			n.filter((m) => m.grupo == grupo)
		);
		if (orden == [] || orden == "") {
			orden = 1;
		} else {
			orden = orden.map((m) => {
				return m.orden;
			});
			orden = Math.max(...orden) + 1;
		}
		await BD_API.AgregarTexto(entidad, contenido, grupo, orden);
		return res.json();
	},

	editarGrupoEliminar: async (req, res) => {
		let { entidad, grupo } = req.query;
		await BD_API.EliminarGrupo(entidad, grupo);
		return res.json();
	},

};
