module.exports = (sequelize, dt) => {
	const alias = "titulos";
	const columns = {
		id: { type: dt.INTEGER, primaryKey: true },
		orden: { type: dt.INTEGER },
		nombre_seccion: { type: dt.STRING(20) },
		nombre_encabezado: { type: dt.STRING(20) },
		titulo_seccion: { type: dt.STRING(50) },
		color_fondo_id: { type: dt.INTEGER },
		color_letras_id: { type: dt.INTEGER },
		color_fondo_boton_id: { type: dt.INTEGER },
		color_letras_boton_id: { type: dt.INTEGER },
		color_borde_boton_id: { type: dt.INTEGER },
		imagen_id: { type: dt.INTEGER },
		editar_texto: { type: dt.BOOLEAN },
		editar_imagenes: { type: dt.BOOLEAN },
	};
	const config = {
		tableName: "0_titulos",
		timestamps: false,
	};
	const entidad = sequelize.define(alias, columns, config);
	entidad.associate = n => {
		entidad.belongsTo(n.colores, {as: "color_fondo", foreignKey: "color_fondo_id"});
		entidad.belongsTo(n.colores, {as: "color_letras", foreignKey: "color_letras_id"});
		entidad.belongsTo(n.colores, {as: "color_fondo_boton", foreignKey: "color_fondo_boton_id"});
		entidad.belongsTo(n.colores, {as: "color_letras_boton", foreignKey: "color_letras_boton_id"});
		entidad.belongsTo(n.colores, {as: "color_borde_boton", foreignKey: "color_borde_boton_id"});
		entidad.belongsTo(n.imagenes_varias, {as: "imagen", foreignKey: "imagen_id"});
	};
	return entidad;
};
