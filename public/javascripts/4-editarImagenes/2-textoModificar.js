window.addEventListener("load", () => {
	// Variables generales
	let IDs = document.querySelectorAll(".imagenes input[name='id']");
	let textos = document.querySelectorAll(".imagenes input[name='texto']");

	// Acciones si se cambia un valor
	for (let i = 0; i < textos.length; i++) {
		// Validar TEXTO: largo y sintaxis
		textos[i].addEventListener("input", () => {
			OKtexto = validarTexto(textos[i]);
			funcionConfirmar(OKtexto, confirmar[i]);
		});
		// Acciones cuando se terminó de escribir
		textos[i].addEventListener("change", () => {
			if (OKtexto) {
				id = IDs[i].innerHTML;
				dato = textos[i].value;
				campo = "contenido";
				funcionModificar(id, dato, campo);
			}
		});
	}
});

// FÓRMULAS *************************************************
let validarTexto = (dataEntry) => {
	let largoMax = 50;
	// Validar largo
	dataEntry.addEventListener("keypress", (e) => {
		dataEntry.value.length >= largoMax ? e.preventDefault() : "";
	});
	// Validar sintaxis
	let valDataEntry = /^[A-Z][A-Za-z áéíóúüñ,.\d]+$/;
	(valDataEntry.test(dataEntry.value) &&
		dataEntry.value.length <= largoMax) ||
	dataEntry.value == ""
		? (dataEntryOK = true)
		: (dataEntryOK = false);
	// Consecuencias
	!dataEntryOK
		? dataEntry.classList.add("rojo")
		: dataEntry.classList.remove("rojo");
	return dataEntryOK;
};

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
