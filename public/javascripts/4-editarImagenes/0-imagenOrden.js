window.addEventListener("load", () => {
	// Variables generales
	let flechasLeft = document.querySelectorAll(".imagenes .fa-arrow-alt-circle-left");
	let flechasRight = document.querySelectorAll(".imagenes .fa-arrow-alt-circle-right");
	let IDs = document.querySelectorAll(".imagenes input[name='id']");

	// Acciones si se elige una flecha
	for (let i = 0; i < IDs.length; i++) {
		flechasLeft[i].addEventListener("click", async () => {
			orden = i + 1;
			if (orden > 1) {
				id1 = IDs[i].value;
				id2 = IDs[i - 1].value;
				await funcionOrden(id1, orden - 1, id2, orden);
			}
		});
		flechasRight[i].addEventListener("click", async () => {
			orden = i + 1;
			if (orden < IDs.length) {
				id1 = IDs[i].value;
				id2 = IDs[i + 1].value;
				await funcionOrden(id1, orden + 1, id2, orden);
			}
		});
	}
});

// FÓRMULAS *************************************************
const funcionOrden = async (id1, o1, id2, o2) => {
	entidad = document.querySelector("input[name='entidad']").value;
	await fetch(
		"/edicion/ordena-registros/?entidad=" +
			entidad +
			"&id=" +
			id1 +
			"&orden=" +
			o1
	);
	await fetch(
		"/edicion/ordena-registros/?entidad=" +
			entidad +
			"&id=" +
			id2 +
			"&orden=" +
			o2
	);
	location.reload();
};
