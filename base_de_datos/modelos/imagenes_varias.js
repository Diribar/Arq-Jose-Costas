module.exports = (sequelize, dt) => {
	const alias = "imagenes_varias";
	const columns = {
		id: { type: dt.INTEGER, primaryKey: true },
		nombre: { type: dt.STRING(50) },
		archivo: { type: dt.STRING(50) },
	};
	const config = {
		tableName: "imagenes_varias",
		timestamps: false,
	};
	const entidad = sequelize.define(alias, columns, config);
	return entidad;
};
