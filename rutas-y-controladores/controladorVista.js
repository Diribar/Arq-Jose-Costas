"use strict";
// **** Requires ***********
const path = require("path");
const BD_obtiene = require("../base_de_datos/config/BD_obtiene");
const funciones = require("./funciones");

// **** Exportar ***********
module.exports = {
	home: async (req, res) => {
		const encabezado = await BD_obtiene.obtieneColoresEncabezado();
		res.render("home", {
			encabezado: encabezado[0],
			titulos: await BD_obtiene.obtieneTitulos(),
			inicio: await BD_obtiene.obtieneTodos("inicio"),
			inicio_imagenes: await BD_obtiene.obtieneTodos("inicio_imagenes"),
			habilitaciones: await BD_obtiene.obtieneTodos("habilitaciones"),
			proyectos: await BD_obtiene.obtieneProyectos(),
			servicios: await BD_obtiene.obtieneTodos("servicios"),
			quienes_somos: await BD_obtiene.obtieneTodos("quienes_somos"),
			clientes_imagenes: await BD_obtiene.obtieneTodos("quienes_somos_imagenes"),
			contactanos: await BD_obtiene.obtieneTodos("contactanos"),
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
	login: {
		form: (req, res) => {
			// Si el login se generó hace menos de una hora, va directamente a 'edicion/home
			if (req.cookies.aceptado) return res.redirect("/edicion/home");

			// Variables
			let datos = {asunto: "Código de Login"};

			// Genera un código y lo guarda en session
			const codigo = Math.round(Math.random() * Math.pow(10, 10)) + "";
			req.session.codigo = codigo;

			// Envía un mail con el código
			datos.comentario = "El código a ingresar para el Login es: " + codigo;
			funciones.enviaMail(datos).catch(console.error);

			// Va a la vista
			return res.render("login");
		},
		guardar: (req, res) => {
			if (req.body.codigo == req.session.codigo) {
				res.cookie("aceptado", true, {maxAge: 60 * 60 * 1000});
				return res.redirect("/edicion/home");
			} else return res.redirect("/login");
		},
		logout: (req, res) => {
			req.session.codigo = null;
			res.cookie("aceptado", false, {maxAge: 10});
			res.redirect("/");
		},
	},
	edicion: {
		home: async (req, res) => {
			const encabezado = await BD_obtiene.obtieneColoresEncabezado();
			res.render("1-editarHome", {
				encabezado: encabezado[0],
				titulos: await BD_obtiene.obtieneTitulos(),
				footer: encabezado[1],
				colores: await BD_obtiene.obtieneColores(),
			});
		},
		colores: async (req, res) => {
			res.render("2-editarColores", {colores: await BD_obtiene.obtieneColoresConRelaciones()});
		},
		textos: async (req, res) => {
			const datos = await variables(req);
			res.render("3-editarTextos", {...datos, datos: await BD_obtiene.obtieneTodos(seccion)});
		},
		imagenes: async (req, res) => {
			// Variables
			const datos = await variables(req);
			const {seccion} = datos;

			// Va a la vista
			res.render("4-editarImagenes", {...datos, datos: await BD_obtiene.obtieneTodos(seccion + "_imagenes")});
		},
		botones: async (req, res) => {
			const datos = await variables(req);
			res.render("5-editarBotones", {...datos, colores: await BD_obtiene.obtieneColoresConRelaciones()});
		},
	},
	imagen: {
		agregar: async (req, res) => {
			// Variables
			const {home, entidad, ruta, grupo} = req.body;

			// Verifica la nueva imagen y avisa si tiene algún error
			const condiciones = verificarImagenNueva(ruta, req.file);
			if (condiciones[0])
				return res.render("errorImagen", {
					condicion,
					home,
					archivo: req.file,
					condiciones,
				});

			// Averigua el orden
			const orden = await BD_obtiene.obtieneTodos(entidad)
				.then((n) => n.filter((m) => m.grupo == grupo))
				.then((n) => n.map((m) => m.orden))
				.then((n) => Math.max(...n) + 1);

			// Agrega el nombre del archivo en la BD
			await BD_obtiene.agregaImagenEnBD(entidad, grupo, orden, req.file.filename);

			// Redirecciona
			return res.redirect(req.body.home);
		},
		reemplazar: async (req, res) => {
			const {home, id, entidad, ruta} = req.body;
			const condiciones = verificarImagenNueva(ruta, req.file);
			if (condiciones[0]) {
				return res.render("errorImagen", {
					condicion,
					home,
					archivo: req.file,
					condiciones,
				});
			}

			// Borra el archivo anterior
			const archivoAnterior = await BD_obtiene.obtienePorId(entidad, id);
			funciones.eliminaImagen(ruta, archivoAnterior.archivo);

			// Reemplaza el nombre del archivo en la BD
			await BD_obtiene.cambiaImagenEnBD(entidad, id, req.file.filename);

			// Termina
			return res.redirect(home);
		},
	},
};

let verificarImagenNueva = (ruta, file) => {
	// Variables
	const extensionesOK = [".jpg", ".png", ".gif", ".bmp"];
	const ext = path.extname(file.originalname);

	// Verificaciones
	const condicion1 = !extensionesOK.includes(ext)
		? 'La extensiones de archivo aceptadas son: "' + extensionesOK.join('", "') + '"'
		: "";
	const condicion2 = file.size > 5000000 ? "El tamaño del archivo es demasiado grande. Debe ser de hasta 5 MB" : "";

	// Frena el proceso si no se cumple alguna condición
	const condicion = condicion1 || condicion2;
	if (condicion) funciones.eliminaImagen(ruta, file.filename);

	// Termina
	return [condicion, condicion1, condicion2];
};
let variables = async (req) => {
	// Variables
	const url = req.url;
	const seccion = url.slice(url.lastIndexOf("/") + 1);
	const titulos = await BD_obtiene.obtieneTitulos();
	const titulo = titulos.find((n) => n.nombre_seccion == seccion);

	// Fin
	return {url, seccion, titulo};
};
