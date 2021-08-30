window.addEventListener("load", () => {
	// Variables generales
	let flechasUp = document.querySelectorAll(".fa-arrow-alt-circle-up");
	let flechasDown = document.querySelectorAll(".fa-arrow-alt-circle-down");

	// Acciones si se elige una flecha
	for (let i = 0; i < flechasUp.length; i++) {
		flechasUp[i].addEventListener("click", async () => {
			id1 = await fetch("/editar/orden_obtener_id/?orden=" + (i + 2));
			id2 = await fetch("/editar/orden_obtener_id/?orden=" + (i + 1));
			await fetch(
				"/editar/id_fijar_orden/?id=" + id1 + "orden=" + (i + 1)
			);
			await fetch(
				"/editar/id_fijar_orden/?id=" + id2 + "orden=" + (i + 2)
			);
		});
		flechasDown[i].addEventListener("click", async () => {
			id1 = await fetch("/editar/orden_obtener_id/?orden=" + (i + 1));
			id2 = await fetch("/editar/orden_obtener_id/?orden=" + (i + 2));
			await fetch(
				"/editar/id_fijar_orden/?id=" + id1 + "orden=" + (i + 2)
			);
			await fetch(
				"/editar/id_fijar_orden/?id=" + id2 + "orden=" + (i + 1)
			);
		});
	}
});
