window.addEventListener("load", () => {
	// VARIABLES INICIALES
	let IDs = document.querySelectorAll("#txt_exist #id");
	console.log(IDs)
	let textoExist = document.querySelectorAll("#txt_exist input[name='cont']");

	// Acciones si se cambia un valor
	for (let i = 0; i < textoExist.length; i++) {
		// Validar nombre: largo y sintaxis
		textoExist[i].addEventListener("input", () => {
			OKnombre = validarTexto(textoExist[i], i);
			funcionConfirmar(OKnombre, i);
		});
		// Acciones cuando se terminó de escribir
		textoExist[i].addEventListener("change", () => {
			if (OKnombre) {
				id = IDs[i].innerHTML;
				dato = textoExist[i].value;
				campo = "contenido";
				funcionModificar(id, dato, campo);
			}
		});
	}
});

// FÓRMULAS *************************************************
let funcionModificar = async (id, dato, campo) => {
	let entidad = document.querySelector("header div.ocultar").innerHTML;
	await fetch(
		"/editar/cambiarvalor/?entidad=" +
			entidad +
			"&id=" +
			id +
			"&dato=" +
			dato +
			"&campo=" +
			campo
	);
};
