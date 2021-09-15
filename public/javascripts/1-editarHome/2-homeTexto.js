window.addEventListener("load", async () => {
	// Variables generales
	let IDs = document.querySelectorAll(".filas #id");
	let ne = document.querySelectorAll(".filas input[name='ne']"); // Nombre en el encabezado
	let ts = document.querySelectorAll(".filas input[name='ts']"); // Título en la sección
	let scff = document.querySelectorAll(".filas select[name='cff']"); // Color de fondo
	let sclf = document.querySelectorAll(".filas select[name='clf']"); // Color de letra

	// Acciones si se cambia un valor
	for (let i = 0; i < ts.length; i++) {
		// Validar longitudes de los textos
		verificarLargo(ne[i], 20);
		verificarLargo(ts[i], 50);
		// Hacer cambios en la BD
		await funcionTexto(ne[i], IDs[i], "nombre_encabezado");
		await funcionTexto(ts[i], IDs[i], "titulo_seccion");
		await funcionTexto(scff[i], IDs[i], "color_fondo_id");
		await funcionTexto(sclf[i], IDs[i], "color_letras_id");
	}
});

let verificarLargo = (campo, largoMax) => {
	campo.addEventListener("keydown", (e) => {
		campo.value.length > largoMax ? e.preventDefault() : ""
	});
	campo.addEventListener("keypress", (e) => {
		campo.value.length >= largoMax ? e.preventDefault() : ""
	});
};

let funcionTexto = (celda, ID, campo) => {
	celda.addEventListener("change", async () => {
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
	});
};
