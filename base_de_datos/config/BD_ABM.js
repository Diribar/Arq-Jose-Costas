const db = require("../modelos");

module.exports = {
	editarOrdenarRegistros: (entidad, id, orden) => {
		return db[entidad].update({ orden: orden }, { where: { id: id } });
	},

	editarCambiarValor: (entidad, id, dato, campo) => {
		return db[entidad].update({ [campo]: dato }, { where: { id: id } });
	},

	editarEliminarRegistro: (entidad, id) => {
		return db[entidad].destroy({
			where: { id: id },
		});
	},

	editarAgregarColor: (nombre, codigo) => {
		return db.colores.create({
			nombre,
			codigo,
		});
	},

	editarAgregarTexto: (entidad, contenido, grupo, orden) => {
		return db[entidad].create({
			contenido,
			grupo,
			orden,
		});
	},
};
