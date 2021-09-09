window.addEventListener("load", () => {
	// Variables generales
	let IDs = document.querySelectorAll(".filas #id");
	let cont = document.querySelectorAll(".filas input[name='cont']");
	let scff = document.querySelectorAll(".filas select[name='cff']");
	let sclf = document.querySelectorAll(".filas select[name='clf']");
	let scbf = document.querySelectorAll(".filas select[name='cbf']");

	// Acciones si se cambia un valor
	for (let i = 0; i < cont.length; i++) {
		cont[i].addEventListener("change", async () => {
			id = IDs[i].innerHTML;
			dato = cont[i].value;
			campo = "contenido";
			await funcionTexto(id, dato, campo);
		});
		scff[i].addEventListener("change", async () => {
			id = IDs[i].innerHTML;
			dato = scff[i].value;
			campo = "color_fondo_id";
			await funcionTexto(id, dato, campo);
			location.reload();
		});
		sclf[i].addEventListener("change", async () => {
			id = IDs[i].innerHTML;
			dato = sclf[i].value;
			campo = "color_letras_id";
			await funcionTexto(id, dato, campo);
			location.reload();
		});
		scbf[i].addEventListener("change", async () => {
			id = IDs[i].innerHTML;
			dato = scbf[i].value;
			campo = "color_borde_id";
			await funcionTexto(id, dato, campo);
			location.reload();
		});
	}
});

const funcionTexto = async (id, dato, campo) => {
	await fetch(
		"/editar/cambiarvalor/?entidad=proyectos" +
			"&id=" +
			id +
			"&dato=" +
			dato +
			"&campo=" +
			campo
	);
};
