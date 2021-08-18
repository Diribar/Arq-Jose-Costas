module.exports = (sequelize, dt) => {
	const alias = "nuestros_clientes";
	const columns = {
		id: { type: dt.INTEGER, primaryKey: true },
		orden: { type: dt.INTEGER },
		nombre: { type: dt.STRING(50) },
		imagen: { type: dt.STRING(50) },
	};
	const config = {
		tableName: "5_quienes_somos_clientes",
		timestamps: false,
	};
	const entidad = sequelize.define(alias, columns, config);
	return entidad;
};
