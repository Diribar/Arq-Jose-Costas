window.addEventListener("load", () => {
	// Variables generales
	let eliminar = document.querySelectorAll(
		"tbody tr.color_existente .eliminar i.fa-trash-alt"
	);
	IDs = document.querySelectorAll(
		"tbody tr.color_existente .eliminar i.ocultar"
	);

	// Acciones
	for (let i = 0; i < IDs.length; i++) {
		eliminar[i].addEventListener("click", () => {
			id = IDs[i].innerHTML;
			eliminarColor(id);
		});
	}
});

const eliminarColor = async (id) => {
	await fetch("/editar/coloreliminar/?id=" + id);
	location.reload();
};
