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

	contactanosFrontEnd: async (req, res) => {
		let { nombre, mail, telefono, comentario } = req.query;
		comentario = decodeURIComponent(comentario);
		await enviarMail(nombre, mail, telefono, comentario).catch(
			console.error
		);
		return res.json();
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
		to: "josericardocostas@hotmail.com", // josericardocostas@hotmail.com
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
