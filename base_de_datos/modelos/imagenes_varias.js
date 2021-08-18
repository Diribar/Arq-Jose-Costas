module.exports = (sequelize, dt) => {
	const alias = "imagenes_varias";
	const columns = {
		id: { type: dt.INTEGER, primaryKey: true },
		seccion_id: { type: dt.INTEGER },
		nombre: { type: dt.STRING(50) },
		imagen: { type: dt.STRING(50) },
	};
	const config = {
		tableName: "imagenes_varias",
		timestamps: false,
	};
	const entidad = sequelize.define(alias, columns, config);
	return entidad;
};
