window.addEventListener("load", () => {
	// Variables generales
	let id = document.querySelectorAll(
		"tbody tr.color_existente #id"
	);
	let nombre = document.querySelectorAll(
		"tbody tr.color_existente input[name='nombre']"
	);

	// Acciones si se cambia un valor
	for (let i = 0; i < id.length; i++) {
		nombre[i].addEventListener("change", () => {
			dato_id = id[i].innerHTML
			dato = nombre[i].value;
			cambiarValor(dato_id, dato);
		});
	}
});

const cambiarValor = async (id, dato) => {
	await fetch(
		"/editar/colormodificar/?id=" + id + "&dato=" + dato + "&campo=nombre"
	);
};
