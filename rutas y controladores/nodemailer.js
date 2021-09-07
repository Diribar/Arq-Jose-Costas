// **** Requires ***********
const nodemailer = require("nodemailer");

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
			//to: "diegoiribarren2015@gmail.com",
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
		// await transporter.sendMail(datos);
		datos = {
			from: '"Mensaje de la página web" <mensaje.web.01@gmail.com>', // sender address
			to: "diegoiribarren2015@gmail.com",
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
		// await transporter.sendMail(info, (error, info) => {
		// 	if (error) {
		// 		console.log(error);
		// 	} else {
		// 		console.log("Email sent: " + info.response);
		// 	}
		// });
	},
};
