// **** Requires ***********
const BD_obtener = require("../base_de_datos/config/BD_obtener");
const funciones = require("./funciones");

// **** Exportar ***********
module.exports = {
	home: async (req, res) => {
		let encabezado = await BD_obtener.ObtenerColoresEncabezado();
		res.render("home", {
			encabezado: encabezado[0],
			titulos: await BD_obtener.ObtenerTitulos(),
			inicio: await BD_obtener.ObtenerTodos("inicio"),
			inicio_imagenes: await BD_obtener.ObtenerTodos("inicio_imagenes"),
			habilitaciones: await BD_obtener.ObtenerTodos("habilitaciones"),
			proyectos: await BD_obtener.ObtenerProyectos(),
			servicios: await BD_obtener.ObtenerTodos("servicios"),
			quienes_somos: await BD_obtener.ObtenerTodos("quienes_somos"),
			clientes_imagenes: await BD_obtener.ObtenerTodos(
				"quienes_somos_imagenes"
			),
			contactanos: await BD_obtener.ObtenerTodos("contactanos"),
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
		funciones
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
		let encabezado = await BD_obtener.ObtenerColoresEncabezado();
		res.render("1-editarHome", {
			encabezado: encabezado[0],
			titulos: await BD_obtener.ObtenerTitulos(),
			footer: encabezado[1],
			colores: await BD_obtener.ObtenerColores(),
		});
	},

	editarColores: async (req, res) => {
		res.render("2-editarColores", {
			colores: await BD_obtener.ObtenerColoresConRelaciones(),
		});
	},

	editarTextos: async (req, res) => {
		url = req.url;
		seccion = url.slice(url.lastIndexOf("/") + 1);
		titulos = await BD_obtener.ObtenerTitulos();
		titulo = titulos.find((n) => n.nombre_seccion == seccion);
		res.render("3-editarTextos", {
			seccion,
			titulo,
			datos: await BD_obtener.ObtenerTodos(seccion),
		});
	},

	editarImagenes: async (req, res) => {
		url = req.url;
		seccion = url.slice(url.lastIndexOf("/") + 1);
		titulos = await BD_obtener.ObtenerTitulos();
		titulo = titulos.find((n) => n.nombre_seccion == seccion);
		res.render("4-editarImagenes", {
			seccion,
			titulo,
			datos: await BD_obtener.ObtenerTodos(seccion + "_imagenes"),
		});
	},

	editarProyectos: async (req, res) => {
		tituloProyecto = await BD_obtener.ObtenerTitulos();
		datos = tituloProyecto.find((n) => (n.nombre_seccion = "proyectos"));
		res.render("5-editarProyectos", {
			proyectos: await BD_obtener.ObtenerProyectos(),
			colores: await BD_obtener.ObtenerColoresConRelaciones(),
			datos,
		});
	},

	reemplazarImagenHome: async (req, res) => {
		// Variables
		ruta = "/public/imagenes/varias/";
		home = "/editar/home";
		// Verificaciones
		if (req.file.filename.length > 50) {
			eliminarImagen(ruta, req.file.filename);
			return res.redirect(home);
		}
		// Borrar el archivo obsoleto
		var registroImagen = await BD_obtener.ObtenerImagenPorId(
			req.body.id
		);
		funciones.eliminarImagen(
			ruta,
			registroImagen.archivo
		);
		// Reemplazar el nombre del archivo en la BD
		await BD_obtener.CambiarImagenEnBD(req.body.id, req.file.filename);
		// Terminar
		res.redirect(home);
	},
};
