"use strict";

// Variables
const bd = require("../baseDatos");

// Exportar
module.exports = {
	obtieneColores: () => bd.colores.findAll({order: [["nombre", "ASC"]]}),
	obtieneColoresConRelaciones: () =>
		bd.colores.findAll({
			include: ["encabezado_cf", "encabezado_cl", "titulos_cf", "titulos_cl", "titulos_cfb", "titulos_clb", "titulos_cbb"],
			order: [["nombre", "ASC"]],
		}),
	obtieneColoresEncabezado: () => bd.encabezado.findAll({include: ["color_fondo", "color_letras"], order: [["orden", "ASC"]]}),
	obtieneTitulos: () =>
		bd.titulos.findAll({
			include: ["color_fondo", "color_letras", "color_fondo_boton", "color_letras_boton", "color_borde_boton", "imagen"],
			order: [["orden", "ASC"]],
		}),
	obtieneProyectos: () =>
		bd.proyectos.findAll({include: ["imagenes"], order: [["orden", "ASC"]]}).then((n) =>
			n.map((m) => {
				m.imagenes.sort((a, b) => (a.orden < b.orden ? -1 : a.orden > b.orden ? 1 : 0));
				return m;
			})
		),
	obtieneTodos: (entidad) =>
		bd[entidad].findAll({
			order: [
				["grupo", "ASC"],
				["orden", "ASC"],
			],
		}),
	obtienePorId: (entidad, id) => bd[entidad].findByPk(id),
	cambiaImagenEnBD: (entidad, id, archivo) => bd[entidad].update({archivo}, {where: {id}}),
	agregaImagenEnBD: (entidad, grupo, orden, archivo) => bd[entidad].create({grupo, orden, archivo}),
};
