// **** Requires ***********
const nodemailer = require("nodemailer");
const BD_varios = require("../base_de_datos/config/BD_varios");

// **** Exportar ***********
module.exports = {
	home: async (req, res) => {
		let encabezado = await BD_varios.ObtenerColoresEncabezado();
		//return res.send(encabezado[1]);
		res.render("home", {
			encabezado: encabezado[0],
			titulos: await BD_varios.ObtenerTitulos(),
			inicio: await BD_varios.ObtenerTodos("inicio"),
			inicio_imagenes: await BD_varios.ObtenerTodos("inicio_imagenes"),
			habilitaciones: await BD_varios.ObtenerTodos("habilitaciones"),
			proyectos: await BD_varios.ObtenerProyectos(),
			servicios: await BD_varios.ObtenerTodos("servicios"),
			quienes_somos: await BD_varios.ObtenerTodos("quienes_somos"),
			clientes_imagenes: await BD_varios.ObtenerTodos(
				"clientes_imagenes"
			),
			contactanos: await BD_varios.ObtenerTodos("contactanos"),
			footer: encabezado[1],
			suma1: Math.round(Math.random() * 12),
			suma2: Math.round(Math.random() * 12),
		});
	},

	contactanosBackEnd: (req, res) => {
		return res.send(
			"Tiene inactivado javascript en el front-end. Actívelo para poder enviar el mail correctamente. Gracias."
		);
	},

	loginForm: (req, res) => {
		// return res.send("Formulario de login");
		res.redirect("/editar/home");
	},

	editarHomeForm: async (req, res) => {
		let encabezado = await BD_varios.ObtenerColoresEncabezado();
		//return res.send(encabezado[1]);
		res.render("1-editarHome", {
			encabezado: encabezado[0],
			titulos: await BD_varios.ObtenerTitulos(),
			footer: encabezado[1],
			colores: await BD_varios.ObtenerColores(),
		});
	},

	editarColores: (req, res) => {
		res.send("Editar colores");
	},

	editarTexto: (req, res) => {
		res.send("Editar texto");
	},

	editarImagenes: (req, res) => {
		res.send("Editar imágenes");
	},
};
