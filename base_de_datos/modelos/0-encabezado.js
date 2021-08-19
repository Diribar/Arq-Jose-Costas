module.exports = (sequelize, dt) => {
	const alias = "encabezado";
	const columns = {
		id: { type: dt.INTEGER, primaryKey: true },
		orden: { type: dt.INTEGER },
		color_fondo_id: { type: dt.INTEGER },
		color_letras_id: { type: dt.INTEGER },
	};
	const config = {
		tableName: "0_encabezado_y_footer",
		timestamps: false,
	};
	const entidad = sequelize.define(alias, columns, config);
	entidad.associate = n => {
		entidad.belongsTo(n.colores, {as: "color_fondo", foreignKey: "color_fondo_id"});
		entidad.belongsTo(n.colores, {as: "color_letras", foreignKey: "color_letras_id"});
	};
	return entidad;
};
