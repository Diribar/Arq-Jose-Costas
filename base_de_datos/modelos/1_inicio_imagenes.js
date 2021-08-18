module.exports = (sequelize, dt) => {
	const alias = "inicio_imagenes";
	const columns = {
		id: { type: dt.INTEGER, primaryKey: true },
		orden: { type: dt.INTEGER },
		nombre: { type: dt.STRING(50) },
	};
	const config = {
		tableName: "1_inicio_imagenes",
		timestamps: false,
	};
	const entidad = sequelize.define(alias, columns, config);
	return entidad;
};
