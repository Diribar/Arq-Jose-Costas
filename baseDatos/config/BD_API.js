const db = require("../modelos");

module.exports = {
	OrdenarRegistros: (entidad, id, orden) => {
		return db[entidad].update({orden: orden}, {where: {id}});
	},

	CambiarValor: (entidad, id, dato, campo) => {
		return db[entidad].update({[campo]: dato}, {where: {id}});
	},

	EliminarRegistro: (entidad, id) => {
		return db[entidad].destroy({
			where: {id},
		});
	},

	AgregarColor: (nombre, codigo) => {
		return db.colores.create({
			nombre,
			codigo,
		});
	},

	AgregarTexto: (entidad, contenido, grupo, orden) => {
		return db[entidad].create({
			contenido,
			grupo,
			orden,
		});
	},

	EliminarGrupo: (entidad, grupo) => {
		return db[entidad].destroy({
			where: {grupo: grupo},
		});
	},
};
