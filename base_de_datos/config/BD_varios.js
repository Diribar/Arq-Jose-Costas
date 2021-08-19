const db = require("../modelos");

module.exports = {
	ObtenerTitulos: () => {
		return db.titulos_encabezado.findAll({
			include: ["color_fondo", "color_letras", "imagen"],
			order: [["orden", "ASC"]],
		});
	},

	ObtenerProyectos: () => {
		return db.proyectos_datos.findAll({
			include: ["proyecto_imagenes"],
			order: [
				["orden", "ASC"],
			],
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
