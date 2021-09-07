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
	let IDs = document.querySelectorAll(".filas .id");

	// Acciones si se cambia un valor
	for (let i = 0; i < titulo_seccion.length; i++) {
		nombre_encabezado[i].addEventListener("change", () => {
			id = IDs[i].innerHTML;
			dato = nombre_encabezado[i].value;
			campo = "nombre_a_mostrar";
			cambiarValor(id, dato, campo);
		});
		titulo_seccion[i].addEventListener("change", () => {
			id = IDs[i].innerHTML;
			dato = titulo_seccion[i].value;
			campo = "titulo_seccion";
			cambiarValor(id, dato, campo);
		});
		color_fondo_fila[i].addEventListener("change", async () => {
			id = IDs[i].innerHTML;
			dato = color_fondo_fila[i].value;
			campo = "color_fondo_id";
			await cambiarValor(id, dato, campo);
			location.reload();
		});
		color_letras_fila[i].addEventListener("change", async () => {
			id = IDs[i].innerHTML;
			dato = color_letras_fila[i].value;
			campo = "color_letras_id";
			await cambiarValor(id, dato, campo);
			location.reload();
		});
	}
});

const cambiarValor = async (id, dato, campo) => {
	await fetch(
		"/editar/cambiarvalores/?entidad=titulos" +
			"&id=" +
			id +
			"&dato=" +
			dato +
			"&campo=" +
			campo
	);
};
