// **** Requires ***********
const nodemailer = require("nodemailer");

// **** Exportar ***********
module.exports = {
	homeForm: (req, res) => {
		res.render("home", {
			title: "Arq. José Costas",
			titulos_encabezado: datosBD.titulos_encabezado,
			inicio_imagenes: datosBD.inicio_imagenes,
			clientes: datosBD.clientes,
			suma1: Math.round(Math.random() * 12),
			suma2: Math.round(Math.random() * 12),
		});
	},

	homeGuardar: (req, res) => {
		let { nombre, mail, telefono, comentario, suma1, suma2, suma } =
			req.body;
		// Validaciones
		let errorNombre = !/^[A-Z ]+$/i.test(nombre) || nombre == "";
		let errorMail =
			!/^[\w\-\.\+]+\@[a-z0-9\.\-]+\.[a-z0-9]{2,5}$/i.test(mail) ||
			mail == "";
		let errorTelefono = !/^[\d -()/+]+$/.test(telefono) || telefono == "";
		let errorComentario = comentario == "";
		let errorSuma = parseInt(suma1) + parseInt(suma2) != suma || suma == "";
		// Volver al formulario si hay algún error
		if (
			errorNombre ||
			errorMail ||
			errorTelefono ||
			errorComentario ||
			errorSuma
		) {
			res.render("home", {
				datos: req.body,
				title: "Arq. José Costas",
				titulos_encabezado: datosBD.titulos_encabezado,
				inicio_imagenes: datosBD.inicio_imagenes,
				clientes: datosBD.clientes,
				suma1: Math.round(Math.random() * 12),
				suma2: Math.round(Math.random() * 12),
			});
		}
		enviarMail().catch(console.error);
		return res.send("éxito");
	},

	loginForm: (req, res) => {
		res.send("Formulario de login");
	},
};

// **** Variables **********
let datosBD = {
	titulos_encabezado: [
		{
			id: 1,
			seccion: "inicio",
			nombre_a_mostrar: "Inicio",
			color_fondo: "#f1c757",
			color_letras: "RGB(118, 113, 113)",
		},
		{
			id: 2,
			seccion: "habilitaciones",
			nombre_a_mostrar: "Habilitaciones",
			color_fondo: "#828383",
			color_letras: "white",
		},
		{
			id: 3,
			seccion: "proyectos",
			nombre_a_mostrar: "Proyectos y Obras",
			color_fondo: "#f1c757",
			color_letras: "RGB(118, 113, 113)",
		},
		{
			id: 4,
			seccion: "servicios",
			nombre_a_mostrar: "Otros Servicios",
			color_fondo: "#828383",
			color_letras: "white",
		},
		{
			id: 5,
			seccion: "quienes_somos",
			nombre_a_mostrar: "Quiénes Somos",
			color_fondo: "#f1c757",
			color_letras: "RGB(118, 113, 113)",
		},
		{
			id: 6,
			seccion: "contactanos",
			nombre_a_mostrar: "Contactanos",
			color_fondo: "#828383",
			color_letras: "white",
		},
	],
	inicio_imagenes: ["Buenos Aires", "Instituto", "Teatro Aptra 2", "Cocina"],
	clientes: [
		{
			nombre: "Aptra",
			imagen: "Aptra.jpg",
		},
		{
			nombre: "Furman",
			imagen: "Furman.png",
		},
		{
			nombre: "Ysonut",
			imagen: "Ysonut.jfif",
		},
		{
			nombre: "TCMax",
			imagen: "TCMax.jpg",
		},
		{
			nombre: "Kopelco",
			imagen: "Kopelco.png",
		},
		{
			nombre: "Dullyll",
			imagen: "Dullyll.jpg",
		},
		{
			nombre: "Brothers Viajes",
			imagen: "Brothers Viajes.jpeg",
		},
		{
			nombre: "MP Inmuebles",
			imagen: "MP Inmuebles.png",
		},
		{
			nombre: "Distrib. Don Gaspar",
			imagen: "Distrib. Don Gaspar.jfif",
		},
		{
			nombre: "El Tanque Cultural",
			imagen: "El Tanque Cultural.jpg",
		},
	],
};

// Función enviar mail
let enviarMail = async () => {
	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	let testAccount = await nodemailer.createTestAccount();

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: testAccount.user, // generated ethereal user
			pass: testAccount.pass, // generated ethereal password
		},
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: '"Fred Foo 👻" <foo@example.com>', // sender address
		to: "bar@example.com, baz@example.com", // list of receivers
		subject: "Hello ✔", // Subject line
		text: "Hello world?", // plain text body
		html: "<b>Hello world?</b>", // html body
	});

	console.log("Message sent: %s", info.messageId, "qué?", "sí");
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
