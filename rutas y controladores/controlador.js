// **** Requires ***********
const nodemailer = require("nodemailer");
const BD_varios = require("../base_de_datos/config/BD_varios");

// **** Exportar ***********
module.exports = {
	homeForm: async (req, res) => {
		titulos_encabezado = await BD_varios.ObtenerTitulos();
		inicio_imagenes = await BD_varios.ObtenerTodos("inicio_imagenes");
		proyectos_datos = await BD_varios.ObtenerTodos("proyectos_datos");
		clientes_imagenes = await BD_varios.ObtenerTodos("clientes_imagenes");
		//return res.send(imagen_habilitaciones);
		res.render("home", {
			title: "Arq. José Costas",
			titulos_encabezado,
			inicio_imagenes,
			proyectos_datos,
			clientes_imagenes,
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
		return res.send(
			"Tiene inactivado javascript en el front-end. Su mensaje fue enviado con éxito"
		);
	},

	form: async (req, res) => {
		let { nombre, mail, telefono, comentario } = req.query;
		comentario = decodeURIComponent(comentario);
		await enviarMail(nombre, mail, telefono, comentario).catch(
			console.error
		);
		return res.json();
	},

	loginForm: (req, res) => {
		res.send("Formulario de login");
	},
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
		to: "diegoiribarren2015@gmail.com", // josericardocostas@hotmail.com
		subject: "Mensaje de la página web", // Subject line
		text: comentario + "\n" + nombre + "\n" + telefono + "\n" + mail, // plain text body
		html:
			comentario.replace(/\r/g, "<br>").replace(/\n/g, "<br>") +
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

// Función ordenar alfabéticamente
let ordenarDatos = (datos) => {
	datos.length > 1
		? datos.sort((a, b) => {
			return b.orden < a.orden
				? 1
				: b.orden > a.orden
					? -1
					: 0;
		})
		: "";
	return datos;
};
