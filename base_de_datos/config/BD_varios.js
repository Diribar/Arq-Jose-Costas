const db = require("../modelos");

module.exports = {
	ObtenerTitulos: () => {
		return db.titulos_encabezado.findAll({
			include: ["color_fondo", "color_letras"],
			order: [["orden", "ASC"]],
		});
	},

	ObtenerTodos: (entidad) => {
		return db[entidad].findAll({
			order: [["orden", "ASC"]],
		});
	},

	ObtenerImagen: (seccion_id) => {
		return db.imagenes_varias.findOne({
			where: { seccion_id: seccion_id },
		});
	},
};
