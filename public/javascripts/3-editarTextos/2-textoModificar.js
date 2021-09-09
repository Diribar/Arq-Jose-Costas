window.addEventListener("load", () => {
	// Variables generales
	IDs = document.querySelectorAll("#id");
	contenidos = document.querySelectorAll("input[name='contenido']");
	verContenido = /^[A-Z][a-z \d]+$/;

	// Acciones si se cambia un valor
	for (let i = 0; i < IDs.length; i++) {
		// Acciones mientras se escribe
		contenidos[i].addEventListener("input", () => {
			// Validar nombre vs sintaxis
			contenidoOK = false;
			verContenido.test(contenidos[i].value)
				? (contenidoOK = true)
				: (contenidoOK = false);
			// Consecuencias
			!contenidoOK
				? contenidos[i].classList.add("rojo")
				: contenidos[i].classList.remove("rojo");
		});
		// Acciones cuando se terminó de escribir
		contenidos[i].addEventListener("change", () => {
			if (contenidoOK) {
				id = IDs[i].innerHTML;
				dato = contenidos[i].value;
				campo = "contenido";
				funcionModificar(id, dato, campo);
			}
		});
	}
});

const funcionModificar = async (id, dato, campo) => {
	entidad = document.querySelector("header div.ocultar").innerHTML;
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
