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
				user: process.env.direccMail, // dirección de gmail
				pass: process.env.contrAplicacion, // contraseña de aplicación de gmail
			},
		});
		let datos = {
			from: '"arquitectojosecostas.com.ar" <' + process.env.direccMail + ">",
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
