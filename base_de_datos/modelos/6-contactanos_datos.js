module.exports = (sequelize, dt) => {
	const alias = "contactanos";
	const columns = {
		id: { type: dt.INTEGER, primaryKey: true },
		grupo: { type: dt.INTEGER },
		orden: { type: dt.INTEGER },
		contenido: { type: dt.STRING(50) },
	};
	const config = {
		tableName: "6_contactanos_datos",
		timestamps: false,
	};
	const entidad = sequelize.define(alias, columns, config);
	return entidad;
};
