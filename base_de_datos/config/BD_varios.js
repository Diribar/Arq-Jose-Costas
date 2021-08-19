const db = require("../modelos");

module.exports = {
	ObtenerTitulos: () => {
		return db.titulos_encabezado.findAll({
			include: ["color_fondo", "color_letras", "imagen"],
			order: [["orden", "ASC"]],
		});
	},

	ObtenerProyectos: async () => {
		let aux = await db.proyectos_datos.findAll({
			include: ["proyecto_imagenes"],
			order: [
				["orden", "ASC"],
			],
		});
		aux = aux.map((n) => {
			n.proyecto_imagenes.sort((a, b) => {
				return a.orden < b.orden ? -1 : a > b ? 1 : 0;
			})
			return n
		})
		return aux
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
