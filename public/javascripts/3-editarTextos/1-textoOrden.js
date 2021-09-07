window.addEventListener("load", () => {
	// Variables generales
	let flechasUp = document.querySelectorAll(".fa-arrow-alt-circle-up");
	let flechasDown = document.querySelectorAll(".fa-arrow-alt-circle-down");
	let IDs = document.querySelectorAll("#id");
	let orden = document.querySelectorAll("#orden");
	entidad = document.querySelector("header div.ocultar").innerHTML;

	// Acciones si se elige una flecha
	for (let i = 0; i < IDs.length; i++) {
		flechasUp[i].addEventListener("click", async () => {
			id1 = IDs[i].innerHTML;
			orden1 = parseInt(orden[i - 1].innerHTML);
			id2 = IDs[i - 1].innerHTML;
			orden2 = parseInt(orden[i].innerHTML);
			await cambiarOrden(id1, orden1, id2, orden2);
		});
		flechasDown[i].addEventListener("click", async () => {
			id1 = IDs[i].innerHTML;
			orden1 = parseInt(orden[i + 1].innerHTML);
			id2 = IDs[i + 1].innerHTML;
			orden2 = parseInt(orden[i].innerHTML);
			await cambiarOrden(id1, orden1, id2, orden2);
		});
	}
});

const cambiarOrden = async (id1, o1, id2, o2) => {
	await fetch(
		"/editar/ordenarregistros/?id=" +
			id1 +
			"&orden=" +
			o1 +
			"&entidad=" +
			entidad
	);
	await fetch(
		"/editar/ordenarregistros/?id=" +
			id2 +
			"&orden=" +
			o2 +
			"&entidad=" +
			entidad
	);
	location.reload();
};
