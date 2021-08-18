module.exports = (sequelize, dt) => {
	const alias = "colores";
	const columns = {
		id: { type: dt.INTEGER, primaryKey: true },
		nombre: { type: dt.STRING(20) },
		color: { type: dt.STRING(20) },
	};
	const config = {
		tableName: "colores",
		timestamps: false,
	};
	const entidad = sequelize.define(alias, columns, config);
	return entidad;
};
