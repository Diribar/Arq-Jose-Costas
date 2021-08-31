const db = require("../modelos");

module.exports = {
	ObtenerColores: () => {
		return db.colores.findAll({
			order: [["nombre", "ASC"]],
		});
	},

	ObtenerColoresEncabezado: () => {
		return db.encabezado.findAll({
			include: ["color_fondo", "color_letras"],
			order: [["orden", "ASC"]],
		});
	},

	ObtenerTitulos: () => {
		return db.titulos.findAll({
			include: ["color_fondo", "color_letras", "imagen"],
			order: [["orden", "ASC"]],
		});
	},

	ObtenerProyectos: () => {
		return db.proyectos
			.findAll({
				include: [
					"color_fondo",
					"color_letras",
					"color_borde",
					"imagenes",
				],
				order: [["orden", "ASC"]],
			})
			.then((n) =>
				n.map((m) => {
					m.imagenes.sort((a, b) => {
						return a.orden < b.orden
							? -1
							: a.orden > b.orden
							? 1
							: 0;
					});
					return m;
				})
			);
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
	Orden_obtener_id: (orden) => {
		return db.titulos
			.findOne({
				where: { orden: orden },
			})
			.then((n) => n.id);
	},
	ID_fijar_orden: (id, orden) => {
		return db.titulos.update({ orden: orden }, { where: { id: id } });
	},
	Cambiar_valor: (id, dato, campo) => {
		return db.titulos.update({ [campo]: dato }, { where: { id: id } });
	},
};
