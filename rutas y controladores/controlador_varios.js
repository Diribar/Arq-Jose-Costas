// **** Requires ***********
const BD_varios = require("../base_de_datos/config/BD_varios");
const nodemailer = require("./nodemailer");

// **** Exportar ***********
module.exports = {
	home: async (req, res) => {
		let encabezado = await BD_varios.ObtenerColoresEncabezado();
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
				"quienes_somos_imagenes"
			),
			contactanos: await BD_varios.ObtenerTodos("contactanos"),
			footer: encabezado[1],
			suma1: Math.round(Math.random() * 12),
			suma2: Math.round(Math.random() * 12),
		});
	},

	logout: (req, res) => {
		req.session.codigo = null;
		res.redirect("/");
	},

	contactanosBackEnd: (req, res) => {
		return res.send(
			"Tiene inactivado javascript en el front-end. Actívelo para poder enviar el mail correctamente. Gracias."
		);
	},

	loginForm: (req, res) => {
		//res.redirect("/editar/home");
		asunto = "Código de Login";
		nombre = "";
		mail = "";
		telefono = "";
		codigo = Math.round(Math.random() * Math.pow(10, 10)) + "";
		comentario = "El código a ingresar para el Login es: " + codigo;
		req.session.codigo = codigo;
		nodemailer
			.enviarMail(asunto, nombre, mail, telefono, comentario)
			.catch(console.error);
		return res.render("login");
	},

	loginDatos: (req, res) => {
		if (req.body.codigo == req.session.codigo) {
			return res.redirect("/editar/home");
		} else {
			return res.render("login");
		}
	},

	editarHome: async (req, res) => {
		let encabezado = await BD_varios.ObtenerColoresEncabezado();
		res.render("1-editarHome", {
			encabezado: encabezado[0],
			titulos: await BD_varios.ObtenerTitulos(),
			footer: encabezado[1],
			colores: await BD_varios.ObtenerColores(),
		});
	},

	editarColores: async (req, res) => {
		res.render("2-editarColores", {
			colores: await BD_varios.ObtenerColoresConRelaciones(),
		});
	},

	editarTexto: async (req, res) => {
		url = req.url;
		seccion = url.slice(url.lastIndexOf("/") + 1);
		titulos = await BD_varios.ObtenerTitulos();
		titulo = titulos.find((n) => n.nombre_seccion == seccion);
		res.render("3-editarTexto", {
			seccion,
			titulo,
			datos: await BD_varios.ObtenerTodos(seccion),
		});
	},

	editarImagenes: async (req, res) => {
		url = req.url;
		seccion = url.slice(url.lastIndexOf("/") + 1);
		titulos = await BD_varios.ObtenerTitulos();
		titulo = titulos.find((n) => n.nombre_seccion == seccion);
		res.render("4-editarImagenes", {
			seccion,
			titulo,
			datos: await BD_varios.ObtenerTodos(seccion + "_imagenes"),
		});
	},

	editarColoresProyectos: async (req, res) => {
		res.send("editarColoresProyectos");
	},
};
