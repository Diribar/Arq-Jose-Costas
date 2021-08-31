window.addEventListener("load", () => {
	// Variables generales
	let flechasUp = document.querySelectorAll(".filas .fa-arrow-alt-circle-up");
	let flechasDown = document.querySelectorAll(".filas .fa-arrow-alt-circle-down");
	let IDs = document.querySelectorAll(".filas .id");

	// Acciones si se elige una flecha
	for (let i = 0; i < IDs.length; i++) {
		flechasUp[i].addEventListener("click", async () => {
			if (i > 0) {
				id1 = IDs[i].innerHTML;
				id2 = IDs[i - 1].innerHTML;
				console.log(id1, id2, i, i + 2);
				await cambiarOrden(id1, id2, i, i+2);
			}
		});
		flechasDown[i].addEventListener("click", async () => {
			if (i < (IDs.length-1)) {
				id1 = IDs[i].innerHTML;
				id2 = IDs[i + 1].innerHTML;
				console.log(id1, id2, i+2, i);
				await cambiarOrden(id1, id2, i+2, i);
			}
		});
	}
});

const cambiarOrden = async (id1, id2, v1, v2) => {
	await fetch("/editar/id_fijar_orden/?id=" + id1 + "&orden=" + v1);
	await fetch("/editar/id_fijar_orden/?id=" + id2 + "&orden=" + v2);
	location.reload();
};
