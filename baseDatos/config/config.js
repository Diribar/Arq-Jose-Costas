module.exports = {
	production: {
		host: process.env.DB_HOST,
		database: process.env.DB_NAME,
		username: process.env.DB_NAME,
		password: process.env.DB_PASSWORD,
		dialect: "mysql",
		logging: false,
	},
	development: {
		host: "127.0.0.1",
		database: process.env.DB_NAME,
		username: "root",
		password: "",
		dialect: "mysql",
		logging: false,
	},
};
