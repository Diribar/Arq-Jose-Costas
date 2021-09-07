window.addEventListener("load", () => {
	// Variables generales
	let eliminar = document.querySelectorAll(
		"tbody tr.color_existente .eliminar i.fa-trash-alt"
	);
	let id = document.querySelectorAll(
		"tbody tr.color_existente .eliminar i.ocultar"
	);

	// Acciones
	for (let i = 0; i < id.length; i++) {
		eliminar[i].addEventListener("click", () => {
			dato_id = id[i].innerHTML;
			eliminarColor(dato_id);
		});
	}
});

const eliminarColor = async (id) => {
	await fetch("/editar/coloreliminar/?id=" + id);
	location.reload();
};
