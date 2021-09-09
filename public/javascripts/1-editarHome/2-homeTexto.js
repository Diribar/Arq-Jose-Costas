window.addEventListener("load", () => {
	// Variables generales
	let IDs = document.querySelectorAll(".filas .id");
	let ne = document.querySelectorAll(".filas input[name='ne']");
	let ts = document.querySelectorAll(".filas input[name='ts']");
	let scff = document.querySelectorAll(".filas select[name='cff']");
	let sclf = document.querySelectorAll(".filas select[name='clf']");

	// Acciones si se cambia un valor
	for (let i = 0; i < ts.length; i++) {
		ne[i].addEventListener("change", () => {
			id = IDs[i].innerHTML;
			dato = ne[i].value;
			campo = "nombre_a_mostrar";
			funcionTexto(id, dato, campo);
		});
		ts[i].addEventListener("change", async () => {
			id = IDs[i].innerHTML;
			dato = ts[i].value;
			campo = "titulo_seccion";
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
	}
});

const funcionTexto = async (id, dato, campo) => {
	await fetch(
		"/editar/cambiarvalor/?entidad=titulos" +
			"&id=" +
			id +
			"&dato=" +
			dato +
			"&campo=" +
			campo
	);
};
