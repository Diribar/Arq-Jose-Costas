window.addEventListener("load", () => {
	// Variables generales
	let entidad = document.querySelector("input[name='entidad']").value;
	let id = document.querySelectorAll(".imagenes i.ocultar");
	let eliminar = document.querySelectorAll(".imagenes i.fa-trash-alt");

	// Acciones
	for (let i = 0; i < id.length; i++) {
		eliminar[i].addEventListener("click", async () => {
			dato_id = id[i].innerHTML;
			await eliminarImagen(entidad, dato_id);
		});
	}
});

const eliminarImagen = async (entidad, id) => {
	await fetch("/editar/eliminarregistro/?entidad=" + entidad + "&id=" + id);
	location.reload();
};
