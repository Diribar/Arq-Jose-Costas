module.exports = (sequelize, dt) => {
	const alias = "colores";
	const columns = {
		id: { type: dt.INTEGER, primaryKey: true },
		nombre: { type: dt.STRING(20) },
		codigo: { type: dt.STRING(20) },
	};
	const config = {
		tableName: "colores",
		timestamps: false,
	};
	const entidad = sequelize.define(alias, columns, config);
	entidad.associate = n => {
		entidad.hasMany(n.encabezado, {as: "encabezado_cf",foreignKey: "color_fondo_id"});
		entidad.hasMany(n.encabezado, {as: "encabezado_cl",foreignKey: "color_letras_id"});
		entidad.hasMany(n.titulos, {as: "titulos_cf",foreignKey: "color_fondo_id"});
		entidad.hasMany(n.titulos, {as: "titulos_cl",foreignKey: "color_letras_id"});
		entidad.hasMany(n.proyectos, {as: "proyectos_cf",foreignKey: "color_fondo_id"});
		entidad.hasMany(n.proyectos, {as: "proyectos_cl",foreignKey: "color_letras_id"});
	};
	return entidad;
};
