window.addEventListener("load", () => {
	// Variables generales
	let flechasUp = document.querySelectorAll(".filas .fa-arrow-alt-circle-up");
	let flechasDown = document.querySelectorAll(
		".filas .fa-arrow-alt-circle-down"
	);
	let IDs = document.querySelectorAll(".filas .id");

	// Acciones si se elige una flecha
	for (let i = 0; i < IDs.length; i++) {
		flechasUp[i].addEventListener("click", async () => {
			fila = i + 1;
			if (fila > 1) {
				id1 = IDs[i].innerHTML;
				id2 = IDs[i - 1].innerHTML;
				await cambiarOrden(id1, fila - 1, id2, fila);
			}
		});
		flechasDown[i].addEventListener("click", async () => {
			fila = i + 1;
			if (fila < IDs.length) {
				id1 = IDs[i].innerHTML;
				id2 = IDs[i + 1].innerHTML;
				await cambiarOrden(id1, fila + 1, id2, fila);
			}
		});
	}
});

const cambiarOrden = async (id1, v1, id2, v2) => {
	await fetch(
		"/editar/ordenarregistros/?entidad=titulos&id=" + id1 + "&orden=" + v1
	);
	await fetch(
		"/editar/ordenarregistros/?entidad=titulos&id=" + id2 + "&orden=" + v2
	);
	location.reload();
};
