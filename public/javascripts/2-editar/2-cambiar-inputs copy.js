window.addEventListener("load", () => {
	// Variables generales
	let nombre_encabezado = document.querySelectorAll(
		"input[name='nombre_encabezado']"
	);
	let titulo_seccion = document.querySelectorAll(
		"input[name='titulo_seccion']"
	);
	let color_fondo_id = document.querySelectorAll(
		"select[name='color_fondo_id']"
	);
	let color_letras_id = document.querySelectorAll(
		"select[name='color_letras_id']"
	);

	// Acciones si se cambia un valor
	for (let i = 0; i < titulo_seccion.length; i++) {
		nombre_encabezado[i].addEventListener("change", () => {
			dato = nombre_encabezado[i].value;
			campo = "nombre_a_mostrar";
			cambiarValor(i + 1, dato, campo);
		});
		entidad = "titulo_seccion";
		titulo_seccion[i].addEventListener("change", () => {
			dato = titulo_seccion[i].value;
			campo = "titulo_seccion";
			cambiarValor(i + 1, dato, campo);
		});
		color_fondo_id[i].addEventListener("change", () => {
			dato = color_fondo_id[i].value;
			campo = "color_fondo_id";
			cambiarValor(i + 1, dato, campo);
		});
		color_letras_id[i].addEventListener("change", () => {
			dato = color_letras_id[i].value;
			campo = "color_letras_id";
			cambiarValor(i + 1, dato, campo);
		});
	}
});

const cambiarValor = (orden, dato, campo) => {
	fetch(
		"/editar/cambiar_valor/?orden=" +
			orden +
			"&dato=" +
			dato +
			"&campo=" +
			campo
	);
};
