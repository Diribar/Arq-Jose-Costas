module.exports = (sequelize, dt) => {
	const alias = "proyectos";
	const columns = {
		id: { type: dt.INTEGER, primaryKey: true },
		grupo: { type: dt.INTEGER },
		orden: { type: dt.INTEGER },
		contenido: { type: dt.STRING(50) },
		color_fondo_id: { type: dt.INTEGER },
		color_letras_id: { type: dt.INTEGER },
		color_borde_id: { type: dt.INTEGER },
	};
	const config = {
		tableName: "3_proyectos_datos",
		timestamps: false,
	};
	const entidad = sequelize.define(alias, columns, config);
	entidad.associate = n => {
		entidad.belongsTo(n.colores, {as: "color_fondo", foreignKey: "color_fondo_id"});
		entidad.belongsTo(n.colores, {as: "color_letras", foreignKey: "color_letras_id"});
		entidad.belongsTo(n.colores, {as: "color_borde", foreignKey: "color_borde_id"});
		entidad.hasMany(n.proyectos_imagenes, {as: "imagenes",foreignKey: "grupo"});
	};
	return entidad;
};
