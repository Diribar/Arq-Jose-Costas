window.addEventListener("load", async () => {
	// Variables generales
	let IDs = document.querySelectorAll(".filas #id");
	let ne = document.querySelectorAll(".filas input[name='ne']"); // Nombre en el encabezado
	let ts = document.querySelectorAll(".filas input[name='ts']"); // Título en la sección
	let scff = document.querySelectorAll(".filas select[name='cff']"); // Color de fondo
	let sclf = document.querySelectorAll(".filas select[name='clf']"); // Color de letra

	// Acciones si se cambia un valor
	for (let i = 0; i < ts.length; i++) {
		// Validar sintaxis y largo del nombre
		OKne = verificar(ne[i], 20);
		OKts = verificar(ts[i], 50);
		// Hacer cambios en la BD
		OKne ? await funcionTexto(ne[i], IDs[i], "nombre_encabezado") : "";
		OKts ? await funcionTexto(ts[i], IDs[i], "titulo_seccion") : "";
		await funcionTexto(scff[i], IDs[i], "color_fondo_id");
		await funcionTexto(sclf[i], IDs[i], "color_letras_id");
	}
});

// FÓRMULAS *************************************************
let verificar = (campo, largoMax) => {
	campo.addEventListener("keypress", (e) => {
		campo.value.length >= largoMax ? e.preventDefault() : ""
	});
	verNombre = /^[A-Z][a-z áéíóúüñ\d+-]+$/;
	let contenido = campo.addEventListener("input", () => {
		verNombre.test(campo.value) && campo.value.length <= largoMax
			? (contenidoOK = true)
			: (contenidoOK = false);
		!contenidoOK
			? campo.classList.add("rojo")
			: campo.classList.remove("rojo");
		return contenidoOK
	})
	return contenido
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
