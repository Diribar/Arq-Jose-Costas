"use strict";

// Variables
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const credenciales = require("../variables/Credenciales.js");

module.exports = {
	enviaMail: async ({asunto: subject, nombre, mail, telefono, comentario}) => {
		// create reusable transporter object using the default SMTP transport
		const {host, puerto, soloEnvios, contrasena: pass} = credenciales.mail;
		const datosTransporte = {host, port: Number(puerto), auth: {user: soloEnvios, pass}, secure: true}; // secure: true for 465, false for other ports
		const transporte = nodemailer.createTransport(datosTransporte);

		// Contenido del mail
		const datos = {
			from: "Web Arquitecto Jose Costas <" + soloEnvios + ">",
			to: entProducc ? "josericardocostas@hotmail.com" : "diegoiribarren2015@gmail.com",
			subject,
			html:
				comentario.replace(/[\r\n]/g, "<br>") +
				(nombre || telefono || mail ? "<br><br><br>" : "<br>") +
				(nombre ? nombre + "<br>" : "") +
				(telefono ? telefono + "<br>" : "") +
				(mail ? mail + "<br>" : ""),
		};

		// Envía mail
		const mailEnviado = await transporte
			.sendMail(datos)
			.then(() => {
				console.log("Mail enviado a " + datos.to);
				return true;
			})
			.catch((error) => {
				console.log("Mail no enviado a " + datos.to, error);
				return false;
			});

		// Fin
		return mailEnviado;
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
