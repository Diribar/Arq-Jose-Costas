module.exports = {
	home: (req,res) => {
		let titulos_encabezado = [
			"Inicio",
			"Habilitaciones",
			"Proyectos y Obras",
			"Otros Servicios",
			"Quiénes Somos",
			"Contactanos",
		];
		res.render("home", {
			title: "Arq. José Costas",
			titulos_encabezado,
		});
	}
}
