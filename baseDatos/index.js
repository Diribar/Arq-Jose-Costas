"use strict";

// Variables
const fs = require("fs");
const path = require("path");
const esteArch = path.basename(__filename);
const carpModelos = path.join(__dirname, "modelos");
const tablas = {};

// Agrega cada tabla a 'tablas'
fs.readdirSync(carpModelos)
	.filter((archivo) => archivo.indexOf(".") !== 0 && archivo !== esteArch && archivo.slice(-3) === ".js")
	.forEach((archivo) => {
		const tabla = require(path.join(carpModelos, archivo))(sequelize, Sequelize.DataTypes);
		tablas[tabla.name] = tabla;
	});

// Agrega las asociaciones
for (const tabla in tablas) if (tablas[tabla].associate) tablas[tabla].associate(tablas);

// Agrega las funciones
tablas.sequelize = sequelize;
tablas.Sequelize = Sequelize;

// Fin
module.exports = tablas;
