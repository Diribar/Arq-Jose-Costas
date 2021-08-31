window.addEventListener("load", () => {
	// Variables generales
	let color_fondo_encabezado = document.querySelector(
		"select[name='color_fondo_encabezado']"
	);
	let color_letras_encabezado = document.querySelector(
		"select[name='color_letras_encabezado']"
	);
	let color_fondo_footer = document.querySelector(
		"select[name='color_fondo_footer']"
	);
	let color_letras_footer = document.querySelector(
		"select[name='color_letras_footer']"
	);

	// Acciones si se cambia un valor
	color_fondo_encabezado.addEventListener("change", () => {
		dato = color_fondo_encabezado.value;
		campo = "color_fondo_id";
		cambiarColor(1, dato, campo);
		
	});
	color_letras_encabezado.addEventListener("change", () => {
		dato = color_letras_encabezado.value;
		campo = "color_letras_id";
		cambiarColor(1, dato, campo);
	});
	color_fondo_footer.addEventListener("change", () => {
		dato = color_fondo_footer.value;
		campo = "color_fondo_id";
		cambiarColor(2, dato, campo);
	});
	color_letras_footer.addEventListener("change", () => {
		dato = color_letras_footer.value;
		campo = "color_letras_id";
		cambiarColor(2, dato, campo);
	});
});

const cambiarColor = (id, dato, campo) => {
	fetch(
		"/editar/cambiar_encabezado/?id=" +
			id +
			"&dato=" +
			dato +
			"&campo=" +
			campo
	);
};
