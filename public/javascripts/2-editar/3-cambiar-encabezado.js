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

	// Cambiar los colores del encabezado
	let cfe = document.querySelector("#cfe").innerHTML;
	let cle = document.querySelector("#cle").innerHTML;
	document.querySelector("#encabezado").style.backgroundColor = cfe;
	opciones = document.querySelectorAll("#encabezado option");
	for (opcion of opciones) {
		opcion.style.backgroundColor = cfe
	}
	document.querySelector("#encabezado").style.color = cle;
	document.querySelector("#encabezado strong").style.color = cle;
	document.querySelectorAll("#encabezado select")[0].style.color = cle;
	document.querySelectorAll("#encabezado select")[1].style.color = cle;

	// Cambiar los colores del footer
	let cff = document.querySelector("#cff").innerHTML;
	let clf = document.querySelector("#clf").innerHTML;
	document.querySelector("#footer").style.backgroundColor = cff;
	opciones = document.querySelectorAll("#footer option");
	for (opcion of opciones) {
		opcion.style.backgroundColor = cff;
	}
	document.querySelector("#footer").style.color = clf;
	document.querySelector("#footer strong").style.color = clf;
	document.querySelectorAll("#footer select")[0].style.color = clf;
	document.querySelectorAll("#footer select")[1].style.color = clf;

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

const cambiarColor = async (id, dato, campo) => {
	await fetch(
		"/editar/cambiar_encabezado/?id=" +
			id +
			"&dato=" +
			dato +
			"&campo=" +
			campo
	);
	location.reload();
};
