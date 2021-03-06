// **** Requires ***********
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

module.exports = {
	enviarMail: async (asunto, nombre, mail, telefono, comentario) => {
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
		// transporter.verify().then(() => {
		//console.log("Listo para enviar mails");
		// });
		// send mail with defined transport object
		datos = {
			from: '"Mensaje de la página web" <mensaje.web.01@gmail.com>', // sender address
			to: "josericardocostas@hotmail.com",
			subject: asunto, // Subject line
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
		datos.to = "diegoiribarren2015@gmail.com";
		await transporter.sendMail(datos);
		// await transporter.sendMail(info, (error, info) => {
		// 	if (error) {
		// 		console.log(error);
		// 	} else {
		// 		console.log("Email sent: " + info.response);
		// 	}
		// });
	},

	eliminarImagen: (ruta, nombre) => {
		archivo = path.resolve(__dirname, "." + ruta + nombre);
		// Averiguar si el archivo es Read-Only o no existe
		try {
			fs.accessSync(archivo, fs.constants.W_OK);
			// fs.unlinkSync(archivo);
			// console.log("El archivo " + nombre + " se eliminó");
		} catch (err) {
			console.log(
				"No se encuentra el archivo " +
					ruta +
					nombre +
					" o es Read-Only"
			);
		}
	},
};
