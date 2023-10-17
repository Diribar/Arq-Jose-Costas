// **** Requires ***********
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

module.exports = {
	enviaMail: async ({asunto, nombre, mail, telefono, comentario}) => {
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
			from: '"www.arquitectojosecostas.com.ar" <' + process.env.direccMail + ">",
			to: "josericardocostas@hotmail.com",
			subject: asunto,
			html:
				comentario.replace(/[\r\n]/g, "<br>") +
				(nombre || telefono || mail ? "<br><br><br>" : "<br>") +
				(nombre ? nombre + "<br>" : "") +
				(telefono ? telefono + "<br>" : "") +
				(mail ? mail + "<br>" : ""),
		};

		// Envía mail a José Costas
		let resultado;
		await transporter.sendMail(datos, (error) => {
			if (error) {
				console.log({errorEnvioDeMail: error});
				resultado = error;
			}
		});

		// Envía mail a Diego
		datos.to = "diegoiribarren2015@gmail.com";
		await transporter.sendMail(datos);

		// Fin
		return resultado;
	},

	eliminaImagen: (ruta, nombre) => {
		// Variables
		const rutaNombre = path.resolve(__dirname, "." + ruta + nombre);

		// Si el rutaNombre existe, lo elimina
		if (fs.existsSync(rutaNombre)) {
			fs.unlinkSync(rutaNombre);
			console.log("El archivo " + nombre + " se eliminó");
		}

		// De lo contrario, avisa
		else console.log("No se encuentra el archivo " + ruta + nombre);

		// Fin
		return;
	},
};
