// **** Requires ***********
const path = require("path");
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

	logout: (req, res) => {
		req.session.codigo = null;
		res.redirect("/");
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
			url,
		});
	},

	editarBotones: async (req, res) => {
		url = req.url;
		seccion = url.slice(url.lastIndexOf("/") + 1);
		titulos = await BD_obtener.ObtenerTitulos();
		titulo = titulos.find((n) => n.nombre_seccion == seccion);
		res.render("5-editarBotones", {
			seccion,
			titulo,
			colores: await BD_obtener.ObtenerColoresConRelaciones(),
		});
	},

	agregarImagen: async (req, res) => {
		let { home, entidad, ruta, grupo } = req.body;
		//return res.send(req.file)
		let condiciones = verificarImagenNueva(ruta, req.file);
		if (condiciones[0]) {
			return res.render("errorImagen", {
				condicion,
				home,
				archivo: req.file,
				condiciones,
			});
		}
		// Averiguar el orden
		orden = await BD_obtener.ObtenerTodos(entidad)
			.then((n) => n.filter((m) => m.grupo == grupo))
			.then((n) =>
				n.map((m) => {
					return m.orden;
				})
			)
			.then((n) => Math.max(...n) + 1);
		// Agregar el nombre del archivo en la BD
		await BD_obtener.AgregarImagenEnBD(
			entidad,
			grupo,
			orden,
			req.file.filename
		);
		// Terminar
		res.redirect(req.body.home);
	},

	reemplazarImagen: async (req, res) => {
		let { home, id, entidad, ruta } = req.body;
		let condiciones = verificarImagenNueva(ruta, req.file);
		if (condiciones[0]) {
			return res.render("errorImagen", {
				condicion,
				home,
				archivo: req.file,
				condiciones,
			});
		}
		// Borrar el archivo anterior
		archivoAnterior = await BD_obtener.ObtenerPorId(entidad, id);
		funciones.eliminarImagen(ruta, archivoAnterior.archivo);
		// Reemplazar el nombre del archivo en la BD
		await BD_obtener.CambiarImagenEnBD(entidad, id, req.file.filename);
		// Terminar
		res.redirect(home);
	},
};

let verificarImagenNueva = (ruta, file) => {
	// Verificar si la extensión del nombre corresponde a una imagen
	let extensionesOK = [".jpg", ".png", ".gif", ".bmp"];
	ext = path.extname(file.originalname);
	condicion1 = !extensionesOK.includes(ext);
	condicion1
		? (condicion1 =
				'La extensiones de archivo aceptadas son: "' +
				extensionesOK.join('", "') + '"')
		: "";
	// Verificar el tamaño
	condicion2 = file.size > 5000000;
	condicion2
		? (condicion2 =
				"El tamaño del archivo es demasiado grande. Debe ser de hasta 5 MB")
		: "";
	// Frenar el proceso si no se cumple alguna condición
	condicion = condicion1 || condicion2;
	condicion ? funciones.eliminarImagen(ruta, file.filename) : "";
	return [condicion, condicion1, condicion2];
};
