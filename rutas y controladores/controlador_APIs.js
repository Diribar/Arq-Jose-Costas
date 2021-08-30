// **** Requires ***********
const BD_varios = require("../base_de_datos/config/BD_varios");

// **** Exportar ***********
module.exports = {
	contactanosFrontEnd: async (req, res) => {
		let { nombre, mail, telefono, comentario } = req.query;
		comentario = decodeURIComponent(comentario);
		await enviarMail(nombre, mail, telefono, comentario).catch(
			console.error
		);
		return res.json();
	},

	orden_obtener_id: async (req, res) => {
		let { orden } = req.query;
		let id = await BD_varios.Orden_obtener_id(orden);
		return res.json(id);
	},
	id_fijar_orden: async (req, res) => {
		let { id, orden } = req.query;
		await BD_varios.ID_fijar_orden(id, orden);
		return res.json();
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
