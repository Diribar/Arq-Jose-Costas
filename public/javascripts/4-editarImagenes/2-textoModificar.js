window.addEventListener("load", () => {
	// Variables generales
	let IDs = document.querySelectorAll(".imagenes input[name='id']");
	let texto = document.querySelectorAll(".imagenes input[name='texto']");
	let verTexto = /^[A-Z][A-Za-z áéíóúü,.\d]+$/;

	// Acciones si se cambia un valor
	for (let i = 0; i < texto.length; i++) {
		// Acciones mientras se escribe
		texto[i].addEventListener("input", () => {
			// Validar nombre vs sintaxis
			contenidoOK = false;
			verTexto.test(texto[i].value)
				? (contenidoOK = true)
				: (contenidoOK = false);
			// Consecuencias
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

const funcionModificar = async (id, dato, campo) => {
	console.log("acá")
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
