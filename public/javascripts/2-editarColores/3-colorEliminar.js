window.addEventListener("load", () => {
	// Variables generales
	let eliminar = document.querySelectorAll(
		"tbody tr.color_exist .eliminar i.fa-trash-alt"
	);
	// Este id se obtiene así, porque no se puede eliminar cualquier registro
	let id = document.querySelectorAll(
		"tbody tr.color_exist .eliminar i.ocultar"
	);

	// Acciones
	for (let i = 0; i < id.length; i++) {
		eliminar[i].addEventListener("click", () => {
			dato_id = id[i].innerHTML;
			funcionEliminar(dato_id);
		});
	}
});

const funcionEliminar = async (id) => {
	await fetch("/edicion/eliminarregistro/?entidad=colores&id=" + id);
	location.reload();
};
