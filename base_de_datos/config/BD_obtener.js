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
				"encabezado_cl",
				"titulos_cf",
				"titulos_cl",
				"titulos_cfb",
				"titulos_clb",
				"titulos_cbb",
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
			include: [
				"color_fondo",
				"color_letras",
				"color_fondo_boton",
				"color_letras_boton",
				"color_borde_boton",
				"imagen",
			],
			order: [["orden", "ASC"]],
		});
	},

	ObtenerProyectos: () => {
		return db.proyectos
			.findAll({
				include: ["imagenes"],
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
			order: [
				["grupo", "ASC"],
				["orden", "ASC"],
			],
		});
	},

	ObtenerPorId: (entidad, id) => {
		return db[entidad].findByPk(id);
	},

	CambiarImagenEnBD: (entidad, id, archivo) => {
		return db[entidad].update({ archivo: archivo }, { where: { id: id } });
	},

	AgregarImagenEnBD: (entidad, grupo, orden, archivo) => {
		return db[entidad].create({
			grupo: grupo,
			orden: orden,
			archivo: archivo,
		});
	},
};
