window.addEventListener("load", () => {
	// Variables generales
	let IDs = document.querySelectorAll(".imagenes input[name='id']");
	let texto = document.querySelectorAll(".imagenes input[name='texto']");
	let verTexto = /^[A-Z][A-Za-z áéíóúüñ,.\d]+$/;
	let largoMax = 50;
	let entidad = document.querySelector("input[name='entidad']").value;

	// Acciones si se cambia un valor
	for (let i = 0; i < texto.length; i++) {
		// Validar nombre vs sintaxis y largo
		let contenido = texto[i].addEventListener("input", () => {
			// Validar longitud del texto
			verificarLargo(texto[i], 50);
			(verTexto.test(texto[i].value) &&
				texto[i].value.length <= largoMax) ||
			texto[i].value == ""
				? (contenidoOK = true)
				: (contenidoOK = false);
			!contenidoOK
				? texto[i].classList.add("rojo")
				: texto[i].classList.remove("rojo");
			return contenidoOK
		});
		// Acciones cuando se terminó de escribir
		contenido ? funcionModificar(texto[i], IDs, entidad) : "";
	}
});

// FÓRMULAS *************************************************
let verificarLargo = (campo, largoMax) => {
	campo.addEventListener("keypress", (e) => {
		campo.value.length >= largoMax ? e.preventDefault() : "";
	});
};

let funcionModificar = (celda, ID, entidad) => {
	celda.addEventListener("change", async () => {
		id = ID.value;
		dato = celda.value;
		campo = "texto";
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
	});
};
