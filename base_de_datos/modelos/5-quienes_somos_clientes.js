module.exports = (sequelize, dt) => {
	const alias = "quienes_somos_imagenes";
	const columns = {
		id: { type: dt.INTEGER, primaryKey: true },
		grupo: { type: dt.INTEGER },
		orden: { type: dt.INTEGER },
		texto: { type: dt.STRING(50) },
		archivo: { type: dt.STRING(50) },
	};
	const config = {
		tableName: "5_quienes_somos_clientes",
		timestamps: false,
	};
	const entidad = sequelize.define(alias, columns, config);
	return entidad;
};
