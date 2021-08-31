window.addEventListener("load", () => {
	// Variables generales
	let nombre_encabezado = document.querySelectorAll(
		"input[name='nombre_encabezado']"
	);
	let titulo_seccion = document.querySelectorAll(
		"input[name='titulo_seccion']"
	);
	let color_fondo_fila = document.querySelectorAll(
		"select[name='color_fondo_fila']"
	);
	let color_letras_fila = document.querySelectorAll(
		"select[name='color_letras_fila']"
	);

	// Acciones si se cambia un valor
	for (let i = 0; i < titulo_seccion.length; i++) {
		nombre_encabezado[i].addEventListener("change", () => {
			dato = nombre_encabezado[i].value;
			campo = "nombre_a_mostrar";
			cambiarValor(i + 1, dato, campo);
		});
		titulo_seccion[i].addEventListener("change", () => {
			dato = titulo_seccion[i].value;
			campo = "titulo_seccion";
			cambiarValor(i + 1, dato, campo);
		});
		color_fondo_fila[i].addEventListener("change", async () => {
			dato = color_fondo_fila[i].value;
			campo = "color_fondo_id";
			await cambiarValor(i + 1, dato, campo);
			location.reload();
		});
		color_letras_fila[i].addEventListener("change", async () => {
			dato = color_letras_fila[i].value;
			campo = "color_letras_id";
			await cambiarValor(i + 1, dato, campo);
			location.reload();
		});
	}
});

const cambiarValor = async (orden, dato, campo) => {
	await fetch(
		"/editar/cambiar_filas/?orden=" +
			orden +
			"&dato=" +
			dato +
			"&campo=" +
			campo
	);
};
