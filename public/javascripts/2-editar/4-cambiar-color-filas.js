window.addEventListener("load", () => {
	// Variables generales
	let color_fondo_encabezado = document.querySelector(
		"select[name='color_fondo_encabezado']"
	);
	let color_letras_encabezado = document.querySelector(
		"select[name='color_letras_encabezado']"
	);

	// Cambiar los colores
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

	// Acciones si se cambia un valor
	color_fondo_encabezado.addEventListener("change", () => {
		dato = color_fondo_encabezado.value;
		campo = "color_fondo_id";
		changeColor(1, dato, campo);
	});
	color_letras_encabezado.addEventListener("change", () => {
		dato = color_letras_encabezado.value;
		campo = "color_letras_id";
		changeColor(1, dato, campo);
	});
});

const changeColor = async (id, dato, campo) => {
	await fetch(
		"/editar/cambiar_color_filas/?id=" +
			id +
			"&dato=" +
			dato +
			"&campo=" +
			campo
	);
	location.reload();
};
