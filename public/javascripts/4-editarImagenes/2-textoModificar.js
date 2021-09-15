window.addEventListener("load", () => {
	// Variables generales
	let IDs = document.querySelectorAll(".imagenes input[name='id']");
	let texto = document.querySelectorAll(".imagenes input[name='texto']");
	let verTexto = /^[A-Z][A-Za-z áéíóúü,.\d]+$/;

	// Acciones si se cambia un valor
	for (let i = 0; i < texto.length; i++) {
		// Validar longitud del texto
		verificarLargo(texto[i], 50);
		// Validar nombre vs sintaxis
		texto[i].addEventListener("input", () => {
			contenidoOK = false;
			verTexto.test(texto[i].value) || texto[i].value == ""
				? (contenidoOK = true)
				: (contenidoOK = false);
			!contenidoOK
				? texto[i].classList.add("rojo")
				: texto[i].classList.remove("rojo");
		});
		// Acciones cuando se terminó de escribir
		texto[i].addEventListener("change", () => {
			if (contenidoOK) {
				id = IDs[i].value;
				dato = texto[i].value;
				campo = "texto";
				funcionModificar(id, dato, campo);
			}
		});
	}
});

let verificarLargo = (campo, largoMax) => {
	campo.addEventListener("keydown", (e) => {
		campo.value.length > largoMax ? e.preventDefault() : "";
	});
	campo.addEventListener("keypress", (e) => {
		campo.value.length >= largoMax ? e.preventDefault() : "";
	});
};

let funcionModificar = async (id, dato, campo) => {
	entidad = document.querySelector("input[name='entidad']").value;
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
