// **** Requires ***********
const BD_varios = require("../base_de_datos/config/BD_varios");

// **** Exportar ***********
module.exports = {
	editarHomeForm: async (req, res) => {
		let encabezado = await BD_varios.ObtenerColoresEncabezado();
		//return res.send(encabezado[1]);
		res.render("1-editarHome", {
			encabezado: encabezado[0],
			titulos: await BD_varios.ObtenerTitulos(),
			footer: encabezado[1],
			colores: await BD_varios.ObtenerColores(),
		});
	},

	editarTexto: (req, res) => {
		res.send("Editar texto")
	},
	home: async (req, res) => {

	},
};