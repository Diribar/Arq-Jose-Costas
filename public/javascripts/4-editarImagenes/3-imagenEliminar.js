window.addEventListener("load", () => {
	// Variables generales
	let eliminar = document.querySelectorAll(".imagenes i.fa-trash-alt");
	let IDs = document.querySelectorAll(".imagenes input[name='id']");

	// Acciones
	for (let i = 0; i < IDs.length; i++) {
		eliminar[i].addEventListener("click", async () => {
			dato_id = IDs[i].value;
			await eliminarImagen(dato_id);
		});
	}
});

const eliminarImagen = async (id) => {
	let entidad = document.querySelector("input[name='entidad']").value;
	let ruta = document.querySelector("input[name='ruta']").value;
	ruta = encodeURIComponent(ruta);
	await fetch("/editar/eliminarregistro/?entidad=" + entidad + "&id=" + id + "&ruta=" + ruta);
	location.reload();
};
