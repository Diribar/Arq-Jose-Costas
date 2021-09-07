const db = require("../modelos");

module.exports = {
	ObtenerColores: () => {
		return db.colores.findAll({
			order: [["nombre", "ASC"]],
		});
	},

	ObtenerColoresConRelaciones: () => {
		return db.colores.findAll({
			include: [
				"encabezado_cf",
				"titulos_cf",
				"proyectos_cf",
				"encabezado_cl",
				"titulos_cl",
				"proyectos_cl",
				"proyectos_cb",
			],
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

	editarOrdenarRegistros: (id, orden, entidad) => {
		return db[entidad].update({ orden: orden }, { where: { id: id } });
	},

	editarCambiar_valores: (entidad, id, dato, campo) => {
		return db[entidad].update({ [campo]: dato }, { where: { id: id } });
	},

	editarAgregar_color: (nombre, codigo) => {
		return db.colores.create({
			nombre,
			codigo,
		});
	},

	editarEliminar_color: (id) => {
		return db.colores.destroy({
			where: { id: id },
		});
	},
};
