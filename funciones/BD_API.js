const bd = require("../baseDatos");

module.exports = {
	OrdenarRegistros: (entidad, id, orden) => {
		return bd[entidad].update({orden: orden}, {where: {id}});
	},

	CambiarValor: (entidad, id, dato, campo) => {
		return bd[entidad].update({[campo]: dato}, {where: {id}});
	},

	EliminarRegistro: (entidad, id) => {
		return bd[entidad].destroy({
			where: {id},
		});
	},

	AgregarColor: (nombre, codigo) => {
		return bd.colores.create({
			nombre,
			codigo,
		});
	},

	AgregarTexto: (entidad, contenido, grupo, orden) => {
		return bd[entidad].create({
			contenido,
			grupo,
			orden,
		});
	},

	EliminarGrupo: (entidad, grupo) => {
		return bd[entidad].destroy({
			where: {grupo: grupo},
		});
	},
};
