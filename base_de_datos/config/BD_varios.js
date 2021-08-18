const db = require("../modelos");

module.exports = {
	ObtenerTodos: (entidad) => {
		return db[entidad].findAll({
			order: [["orden", "ASC"]],
		});
	},

	ObtenerTodosConInclude: (entidad, include) => {
		return db[entidad].findAll({
			include: include,
			order: [["orden", "ASC"]],
		});
	},

	ObtenerPorId: (id, entidad, include) => {
		return db[entidad].findByPk(id, {
			include: [include],
		});
	},

	ObtenerFiltrandoPorCampo: (entidad, campoWhere, valorWhere) => {
		return db[entidad].findAll({
			where: { [campoWhere]: valorWhere },
		});
	},

	ObtenerTodosIncludeOrder: (
		entidad,
		camposInclude,
		campoOrder,
		valorOrder
	) => {
		return db[entidad].findAll({
			include: [camposInclude],
			order: [[campoOrder, valorOrder]],
		});
	},
};
