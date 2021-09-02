window.addEventListener("load", () => {
	// Variables generales
	let eliminar = document.querySelectorAll(".imagenes i.fa-trash-alt");
	let id = document.querySelectorAll(".imagenes i.ocultar");

	// Acciones
	for (let i = 0; i < id.length; i++) {
		eliminar[i].addEventListener("click", () => {
			dato_id = id[i].innerHTML;
			console.log(dato_id)
			eliminarImagen(dato_id);
		});
	}
});

const eliminarImagen = async (id) => {
	await fetch("/editar/eliminar_imagen/?id=" + id);
	//location.reload();
};
