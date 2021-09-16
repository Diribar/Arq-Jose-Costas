window.addEventListener("load", () => {
	// Variables generales
	let IDs = document.querySelectorAll(".filas #id");
	let cont = document.querySelectorAll(".filas input[name='cont']");
	let scff = document.querySelectorAll(".filas select[name='cff']");
	let sclf = document.querySelectorAll(".filas select[name='clf']");
	let scbf = document.querySelectorAll(".filas select[name='cbf']");

	// Acciones si se cambia un valor
	for (let i = 0; i < cont.length; i++) {
		// Validar TEXTO: largo y sintaxis
		cont[i].addEventListener("input", () => {
			OKtexto = validarTexto(cont[i]);
		})
		cont[i].addEventListener("change", async () => {
			await funcionTexto(IDs[i], cont[i], "contenido");
		});
		scff[i].addEventListener("change", async () => {
			await funcionTexto(IDs[i], cont[i], "color_fondo_id");
			location.reload();
		});
		sclf[i].addEventListener("change", async () => {
			await funcionTexto(IDs[i], cont[i], "color_letras_id");
			location.reload();
		});
		scbf[i].addEventListener("change", async () => {
			await funcionTexto(IDs[i], cont[i], "color_borde_id");
			location.reload();
		});
	}
});

// FÓRMULAS *************************************************
let validarTexto = (dataEntry) => {
	let largoMax = 50;
	// Validar largo
	dataEntry.addEventListener("keypress", (e) => {
		dataEntry.value.length >= largoMax ? e.preventDefault() : "";
	});
	// Validar sintaxis
	let valDataEntry = /^[A-Z][A-Za-z áéíóúüñ,.\d]+$/;
	(valDataEntry.test(dataEntry.value) &&
		dataEntry.value.length <= largoMax) ||
	dataEntry.value == ""
		? (dataEntryOK = true)
		: (dataEntryOK = false);
	// Consecuencias
	!dataEntryOK
		? dataEntry.classList.add("rojo")
		: dataEntry.classList.remove("rojo");
	return dataEntryOK;
};

let funcionTexto = async (IDs, cont, campo) => {
	id = IDs.innerHTML;
	dato = cont.value;
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
