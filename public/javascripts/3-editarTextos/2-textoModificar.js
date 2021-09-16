window.addEventListener("load", () => {
	// Variables generales
	let IDs = document.querySelectorAll("#texto_existente #id");
	let contenidos = document.querySelectorAll(
		"#texto_existente input[name='contenido']"
	);
	let verContenido = /^[A-Z][A-Za-z áéíóúüñ,.\d]+$/;
	let entidad = document.querySelector("header div.ocultar").innerHTML;
	let largoMax =
		entidad == "inicio" ||
		entidad == "proyectos" ||
		entidad == "contactanos"
			? 50
			: 200;

	// Acciones si se cambia un valor
	for (let i = 0; i < IDs.length; i++) {
		// Acciones mientras se escribe
		contenidos[i].addEventListener("input", () => {
			// Validar longitudes del texto
			verificarLargo(contenidos[i], largoMax);
			// Validar contenido vs sintaxis y largo
			verContenido.test(contenidos[i].value) &&
			contenidos[i].value.length <= largoMax
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

// FÓRMULAS *************************************************
let funcionModificar = async (id, dato, campo) => {
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
