// **** Requires ***********
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

module.exports = {
	enviaMail: async ({asunto, nombre, mail, telefono, comentario}) => {
		// create reusable transporter object using the default SMTP transport
		const {host, puerto, user, pass} = process.env;
		const transporter = nodemailer.createTransport({host, port: Number(puerto), secure: true, auth: {user, pass}});
		// secure: true for 465, false for other ports

		// Contenido del mail
		let datos = {
			from: '"www.arquitectojosecostas.com.ar" <' + user + ">",
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
		// await transporter.sendMail(datos, (error) => {
		// 	if (error) {
		// 		console.log({errorEnvioDeMail: error});
		// 		resultado = error;
		// 	}
		// });

		// Envía mail a Diego
		datos.to = "diegoiribarren2015@gmail.com";
		await transporter.sendMail(datos, (error) => {
			if (error) {
				console.log({errorEnvioDeMail: error});
				resultado = error;
			}
		});

		// Fin
		return resultado;
	},

	eliminaImagen: (ruta, nombre) => {
		// Variables
		const rutaNombre = path.resolve(ruta + nombre);

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
