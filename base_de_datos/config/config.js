module.exports = {
	development: {
		username: "root",
		password: "",
		database: process.env.DB_NAME,
		host: "127.0.0.1",
		dialect: "mysql",
		logging: false,
	},
	production: {
		host: process.env.DB_HOST,
		database: process.env.DB_NAME,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		dialect: "mysql",
		logging: false,
	},
};
