// **** Requires ***********
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

module.exports = {
	enviarMail: async (asunto, nombre, mail, telefono, comentario) => {
		// Remitente
		let remitente = "mensaje.web.02@gmail.com"; // dirección de gmail
		let contrasena = process.env.contrMail; // contraseña de gmail
		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
			//service: "gmail",
			host: "smtp.gmail.com",
			port: 465,
			secure: true, // true for 465, false for other ports
			auth: {
				user: remitente,
				pass: process.env.contrAplicacion, // contraseña de aplicación de gmail
			},
		});
		// transporter.verify().then(() => {
		//console.log("Listo para enviar mails");
		// });
		// send mail with defined transport object
		datos = {
			from: '"arquitectojosecostas.com.ar" <' + remitente + ">",
			to: "josericardocostas@hotmail.com",
			subject: asunto,
			html:
				comentario.replace(/[\r\n]/g, "<br>") +
				"<br>" +
				"<br>" +
				nombre +
				"<br>" +
				telefono +
				"<br>" +
				mail,
		};
		//await transporter.sendMail(datos);
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
