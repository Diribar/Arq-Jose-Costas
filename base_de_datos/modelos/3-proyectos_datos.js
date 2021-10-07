module.exports = (sequelize, dt) => {
	const alias = "proyectos";
	const columns = {
		id: { type: dt.INTEGER, primaryKey: true },
		grupo: { type: dt.INTEGER },
		orden: { type: dt.INTEGER },
		contenido: { type: dt.STRING(50) },
	};
	const config = {
		tableName: "3_proyectos_datos",
		timestamps: false,
	};
	const entidad = sequelize.define(alias, columns, config);
	entidad.associate = n => {
		entidad.hasMany(n.proyectos_imagenes, {as: "imagenes",foreignKey: "grupo"});
	};
	return entidad;
};
