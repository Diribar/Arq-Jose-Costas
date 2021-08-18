module.exports = (sequelize, dt) => {
	const alias = "proyectos_imagenes";
	const columns = {
		id: { type: dt.INTEGER, primaryKey: true },
		orden: { type: dt.INTEGER },
		nombre_a_mostrar: { type: dt.STRING(50) },
	};
	const config = {
		tableName: "3_proyectos_imagenes",
		timestamps: false,
	};
	const entidad = sequelize.define(alias, columns, config);
	return entidad;
};
