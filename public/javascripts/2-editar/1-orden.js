window.addEventListener("load", () => {
	// Variables generales
	let flechasUp = document.querySelectorAll(".fa-arrow-alt-circle-up");
	let flechasDown = document.querySelectorAll(".fa-arrow-alt-circle-down");

	// Acciones si se elige una flecha
	for (let i = 0; i < flechasUp.length; i++) {
		flechasUp[i].addEventListener("click", async () => {
			await cambiarOrden(i, 2, 1);
		});
		flechasDown[i].addEventListener("click", async () => {
			await cambiarOrden(i, 1, 2);
		});
	}
});

const cambiarOrden = async (i, v1, v2) => {
	id1 = await fetch("/editar/orden_obtener_id/?orden=" + (i + v1)).then((n) =>
		n.json()
	);
	id2 = await fetch("/editar/orden_obtener_id/?orden=" + (i + v2)).then((n) =>
		n.json()
	);
	await fetch("/editar/id_fijar_orden/?id=" + id1 + "&orden=" + (i + v2));
	await fetch("/editar/id_fijar_orden/?id=" + id2 + "&orden=" + (i + v1));
	location.reload();
};