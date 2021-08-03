module.exports = {
	home: (req, res) => {
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
				color_fondo: "RGBA(82, 83, 83, 0.8)",
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
				color_fondo: "RGBA(82, 83, 83, 0.8)",
				color_letras: "white",
			},
		];
		let inicio_imagenes = [
			"Buenos Aires",
			"Instituto", 
			["Teatro Aptra 1", "Teatro Aptra 2"],
			"Cocina"
		];
		let clientes = [
			{
				nombre: "Aptra",
				imagen: "Aptra.jpg",
			},
			{
				nombre: "Furman",
				imagen: "Furman.webp",
			},
			{
				nombre: "Ysonut",
				imagen: "Ysonut.svg",
			},
		];
		res.render("home", {
			title: "Arq. José Costas",
			titulos_encabezado,
			inicio_imagenes,
			clientes,
		});
	},

	loginForm: (req, res) => {
		res.send("Formulario de login")
	},
}
