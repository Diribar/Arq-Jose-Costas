module.exports = {
	homeForm: (req, res) => {
		let titulos_encabezado = [
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
		];
		let inicio_imagenes = [
			"Buenos Aires",
			"Instituto", 
			"Teatro Aptra 2",
			"Cocina"
		];
		let clientes = [
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
		];
		res.render("home", {
			title: "Arq. José Costas",
			titulos_encabezado,
			inicio_imagenes,
			clientes,
			suma1: Math.round(Math.random() * 12),
			suma2: Math.round(Math.random() * 12),
		});
	},

	homeGuardar: (req, res) => {
		res.send("Recibí el mensaje del cliente")
	},

	loginForm: (req, res) => {
		res.send("Formulario de login")
	},
}
