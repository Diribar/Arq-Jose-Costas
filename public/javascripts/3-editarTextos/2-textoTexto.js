window.addEventListener("load", () => {
	// Variables generales
	let contenido = document.querySelectorAll("input[name='contenido']");
	let IDs = document.querySelectorAll("#id");

	// Acciones si se cambia un valor
	for (let i = 0; i < IDs.length; i++) {
		contenido[i].addEventListener("change", () => {
			id = IDs[i].innerHTML;
			dato = contenido[i].value;
			campo = "contenido";
			cambiarValor(id, dato, campo);
		});
	}
});

const cambiarValor = async (id, dato, campo) => {
	entidad = document.querySelector("header div.ocultar").innerHTML;
	await fetch(
		"/editar/cambiarvalores/?entidad=" +
			entidad +
			"&id=" +
			id +
			"&dato=" +
			dato +
			"&campo=" +
			campo
	);
};
