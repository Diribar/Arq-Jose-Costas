// **** Requires ***********
const nodemailer = require("nodemailer");

// **** Exportar ***********
module.exports = {
	homeForm: (req, res) => {
		res.render("home", {
			title: "Arq. José Costas",
			titulos_encabezado: datosBD.titulos_encabezado,
			inicio_imagenes: datosBD.inicio_imagenes,
			clientes: datosBD.clientes,
			suma1: Math.round(Math.random() * 12),
			suma2: Math.round(Math.random() * 12),
		});
	},

	homeGuardar: (req, res) => {
		let { nombre, mail, telefono, comentario, suma1, suma2, suma } =
			req.body;
		// Validaciones
		let errorNombre = !/^[A-Z ]+$/i.test(nombre) || nombre == "";
		let errorMail =
			!/^[\w\-\.\+]+\@[a-z0-9\.\-]+\.[a-z0-9]{2,5}$/i.test(mail) ||
			mail == "";
		let errorTelefono = !/^[\d -()/+]+$/.test(telefono) || telefono == "";
		let errorComentario = comentario == "";
		let errorSuma = parseInt(suma1) + parseInt(suma2) != suma || suma == "";
		// Volver al formulario si hay algún error
		if (
			errorNombre ||
			errorMail ||
			errorTelefono ||
			errorComentario ||
			errorSuma
		) {
			res.render("home", {
				datos: req.body,
				title: "Arq. José Costas",
				titulos_encabezado: datosBD.titulos_encabezado,
				inicio_imagenes: datosBD.inicio_imagenes,
				clientes: datosBD.clientes,
				suma1: Math.round(Math.random() * 12),
				suma2: Math.round(Math.random() * 12),
			});
		}
		enviarMail(nombre, mail, telefono, comentario).catch(console.error);
		return res.send("su mensaje fue enviado con éxito");
	},

	form: (req, res) => {
		let { nombre, mail, telefono, comentario, suma1, suma2, suma } =
			req.body;
		res.send(req.body);
		// Validaciones
		let errorNombre = !/^[A-Z ]+$/i.test(nombre) || nombre == "";
		let errorMail =
			!/^[\w\-\.\+]+\@[a-z0-9\.\-]+\.[a-z0-9]{2,5}$/i.test(mail) ||
			mail == "";
		let errorTelefono = !/^[\d -()/+]+$/.test(telefono) || telefono == "";
		let errorComentario = comentario == "";
		let errorSuma = parseInt(suma1) + parseInt(suma2) != suma || suma == "";
		// Volver al formulario si hay algún error
		if (
			errorNombre ||
			errorMail ||
			errorTelefono ||
			errorComentario ||
			errorSuma
		) {
			res.render("home", {
				datos: req.body,
				title: "Arq. José Costas",
				titulos_encabezado: datosBD.titulos_encabezado,
				inicio_imagenes: datosBD.inicio_imagenes,
				clientes: datosBD.clientes,
				suma1: Math.round(Math.random() * 12),
				suma2: Math.round(Math.random() * 12),
			});
		}
		enviarMail(nombre, mail, telefono, comentario).catch(console.error);
		return res.send("su mensaje fue enviado con éxito");
	},

	loginForm: (req, res) => {
		res.send("Formulario de login");
	},
};

// **** Variables **********
let datosBD = {
	titulos_encabezado: [
		{
			id: 1,
			seccion: "inicio",
			nombre_a_mostrar: "Inicio",
			color_fondo: "var(--amarillo-oscuro)",
			color_letras: "var(--gris-letras)",
		},
		{
			id: 2,
			seccion: "habilitaciones",
			nombre_a_mostrar: "Habilitaciones",
			color_fondo: "var(--gris-oscuro)",
			color_letras: "white",
		},
		{
			id: 3,
			seccion: "proyectos",
			nombre_a_mostrar: "Proyectos y Obras",
			color_fondo: "var(--amarillo-oscuro)",
			color_letras: "var(--gris-letras)",
		},
		{
			id: 4,
			seccion: "servicios",
			nombre_a_mostrar: "Otros Servicios",
			color_fondo: "var(--gris-oscuro)",
			color_letras: "white",
		},
		{
			id: 5,
			seccion: "quienes_somos",
			nombre_a_mostrar: "Quiénes Somos",
			color_fondo: "var(--amarillo-oscuro)",
			color_letras: "var(--gris-letras)",
		},
		{
			id: 6,
			seccion: "contactanos",
			nombre_a_mostrar: "Contactanos",
			color_fondo: "var(--gris-oscuro)",
			color_letras: "white",
		},
	],
	inicio_imagenes: ["Buenos Aires", "Instituto", "Teatro Aptra 2", "Cocina"],
	clientes: [
		{
			nombre: "Aptra",
			imagen: "Aptra.jpg",
		},
		{
			nombre: "Furman",
			imagen: "Furman.jpg",
		},
		{
			nombre: "Ysonut",
			imagen: "Ysonut.jpg",
		},
		{
			nombre: "TCMax",
			imagen: "TCMax.jpg",
		},
		{
			nombre: "Kopelco",
			imagen: "Kopelco.jpg",
		},
		{
			nombre: "Dullyll",
			imagen: "Dullyll.jpg",
		},
		{
			nombre: "Brothers Viajes",
			imagen: "Brothers-Viajes.jpg",
		},
		{
			nombre: "MP Inmuebles",
			imagen: "MP-Inmuebles.jpg",
		},
		{
			nombre: "Distrib. Don Gaspar",
			imagen: "Don-Gaspar.jpg",
		},
		{
			nombre: "El Tanque Cultural",
			imagen: "El-Tanque-Cultural.jpg",
		},
	],
};

// Función enviar mail
let enviarMail = async (nombre, mail, telefono, comentario) => {

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true, // true for 465, false for other ports
		auth: {
			user: "mensaje.web.01@gmail.com", // generated mail address
			pass: "rudhfurovpjsjjzp", // generated  password
		},
	});
	transporter.verify().then(() => {
		//console.log("Listo para enviar mails");
	});
	
	// send mail with defined transport object
	let datos = {
		from: '"Mensaje de la página web" <mensaje.web.01@gmail.com>', // sender address
		to: "josericardocostas@hotmail.com", // list of receivers
		subject: "Mensaje de la página web", // Subject line
		text: comentario + "\n" + nombre + "\n" + telefono, // plain text body
		html:
			comentario.replace(/\r/g, "<br>") +
			"<br>" +
			"<br>" +
			nombre +
			"<br>" +
			telefono +
			"<br>" +
			mail,
	};
	await transporter.sendMail(datos);

	// await transporter.sendMail(info, (error, info) => {
	// 	if (error) {
	// 		console.log(error);
	// 	} else {
	// 		console.log("Email sent: " + info.response);
	// 	}
	// });
};
