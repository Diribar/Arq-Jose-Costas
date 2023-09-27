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
				pass: process.env.contrMail, // contraseña de aplicación de gmail
			},
		});

		// Contenido del mail
		let datos = {
			from:
				'"www.arquitectojosecostas.com.ar" <' +
				process.env.direccMail +
				">",
			to: "josericardocostas@hotmail.com",
			subject: asunto,
			html:
				comentario.replace(/[\r\n]/g, "<br>") +
				"<br><br><br>" +
				nombre +
				"<br>" +
				(telefono ? telefono + "<br>" : "") +
				mail,
		};

		// Envía mail a José Costas
		let resultado;
		await transporter.sendMail(datos, (error) => {
			if (error) resultado = error;
		});

		// Envía mail a Diego
		datos.to = "diegoiribarren2015@gmail.com";
		await transporter.sendMail(datos);

		// Fin
		return resultado;
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
