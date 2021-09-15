window.addEventListener("load", async () => {
	// Acciones si se cambia un valor
	let IDs = document.querySelectorAll(".filas #id");
	let ne = document.querySelectorAll(".filas input[name='ne']"); // Nombre en el encabezado
	let ts = document.querySelectorAll(".filas input[name='ts']"); // Título en la sección
	let scff = document.querySelectorAll(".filas select[name='cff']"); // Color de fondo
	let sclf = document.querySelectorAll(".filas select[name='clf']"); // Color de letra
	for (let i = 0; i < ts.length; i++) {
		// Validar sintaxis y largo
		ne[i].addEventListener("input", () => {
			OKne = validar(ne[i], 20);
		});
		ts[i].addEventListener("input", () => {
			OKts = validar(ts[i], 50);
		});
		// Hacer cambios en la BD
		ne[i].addEventListener("change", async () => {
			OKne ? await funcionTexto(ne[i], IDs[i], "nombre_encabezado") : "";
		});
		ts[i].addEventListener("change", async () => {
			OKts ? await funcionTexto(ts[i], IDs[i], "titulo_seccion") : "";
		});
		scff[i].addEventListener("change", async () => {
			await funcionTexto(scff[i], IDs[i], "color_fondo_id");
		});
		sclf[i].addEventListener("change", async () => {
			await funcionTexto(sclf[i], IDs[i], "color_letras_id");
		});
	}
});

// FÓRMULAS *************************************************
let validar = (campo, largoMax) => {
	campo.addEventListener("keypress", (e) => {
		campo.value.length >= largoMax ? e.preventDefault() : "";
	});
	valNombre = /^[A-Z][A-Za-z áéíóúüñ\d+-]+$/;
	valNombre.test(campo.value) && campo.value.length <= largoMax
		? (contenidoOK = true)
		: (contenidoOK = false);
	!contenidoOK
		? campo.classList.add("rojo")
		: campo.classList.remove("rojo");
	return contenidoOK
};

let funcionTexto = async (celda, ID, campo) => {
		id = ID.innerHTML;
		dato = celda.value;
		await fetch(
			"/editar/cambiarvalor/?entidad=titulos" +
				"&id=" +
				id +
				"&dato=" +
				dato +
				"&campo=" +
				campo
		);
		campo == "color_fondo_id" || campo == "color_letras_id"
			? location.reload()
			: "";
};
