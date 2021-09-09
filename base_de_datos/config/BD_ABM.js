const db = require("../modelos");

module.exports = {
	editarOrdenarRegistros: (entidad, id, orden) => {
		return db[entidad].update({ orden: orden }, { where: { id: id } });
	},

	editarCambiarValores: (entidad, id, dato, campo) => {
		return db[entidad].update({ [campo]: dato }, { where: { id: id } });
	},

	editarAgregarColor: (nombre, codigo) => {
		return db.colores.create({
			nombre,
			codigo,
		});
	},

	editarEliminarColor: (id) => {
		return db.colores.destroy({
			where: { id: id },
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
