"use strict";

// Variables - credenciales
const database = "ajc_bd";
const password = "IermFU2UpKk9";

// Variables - credenciales
const dialect = "mysql";
const logging = false;

// Variables - objetos
const produccion = {
	database,
	username: database, // el usuario se llama igual que la BD - necesario para Sequelize
	password,

	// Datos que usa node_modules/sequelize/lib/sequelize
	dialect,
	logging,
};
const desarrollo = {...produccion, username: "root", password: ""};

// Exportar
module.exports = {
	bd: {produccion, desarrollo},
	session: {
		produccion: {database, user: database, password},
		desarrollo: {database, user: "root", password: ""},
	},
	mail: {
		host: "mail.arquitectojosecostas.com.ar",
		puerto: "465",
		soloEnvios: "solo-envios@arquitectojosecostas.com.ar",
		contrasena: "santijose",
	},
};
