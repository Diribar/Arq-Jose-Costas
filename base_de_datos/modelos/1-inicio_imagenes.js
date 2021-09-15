module.exports = (sequelize, dt) => {
	const alias = "inicio_imagenes";
	const columns = {
		id: { type: dt.INTEGER, primaryKey: true },
		grupo: { type: dt.INTEGER },
		orden: { type: dt.INTEGER },
		archivo: { type: dt.STRING(50) },
		texto: { type: dt.STRING(50) },
	};
	const config = {
		tableName: "1_inicio_imagenes",
		timestamps: false,
	};
	const entidad = sequelize.define(alias, columns, config);
	return entidad;
};
