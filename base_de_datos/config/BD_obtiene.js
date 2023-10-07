const db = require("../modelos");

module.exports = {
	obtieneColores: () => db.colores.findAll({order: [["nombre", "ASC"]]}),
	obtieneColoresConRelaciones: () =>
		db.colores.findAll({
			include: ["encabezado_cf", "encabezado_cl", "titulos_cf", "titulos_cl", "titulos_cfb", "titulos_clb", "titulos_cbb"],
			order: [["nombre", "ASC"]],
		}),
	obtieneColoresEncabezado: () => db.encabezado.findAll({include: ["color_fondo", "color_letras"], order: [["orden", "ASC"]]}),
	obtieneTitulos: () =>
		db.titulos.findAll({
			include: ["color_fondo", "color_letras", "color_fondo_boton", "color_letras_boton", "color_borde_boton", "imagen"],
			order: [["orden", "ASC"]],
		}),
	obtieneProyectos: () =>
		db.proyectos.findAll({include: ["imagenes"], order: [["orden", "ASC"]]}).then((n) =>
			n.map((m) => {
				m.imagenes.sort((a, b) => (a.orden < b.orden ? -1 : a.orden > b.orden ? 1 : 0));
				return m;
			})
		),
	obtieneTodos: (entidad) =>
		db[entidad].findAll({
			order: [
				["grupo", "ASC"],
				["orden", "ASC"],
			],
		}),
	obtienePorId: (entidad, id) => db[entidad].findByPk(id),
	cambiaImagenEnBD: (entidad, id, archivo) => db[entidad].update({archivo: archivo}, {where: {id: id}}),
	agregaImagenEnBD: (entidad, grupo, orden, archivo) => db[entidad].create({grupo: grupo, orden: orden, archivo: archivo}),
};
