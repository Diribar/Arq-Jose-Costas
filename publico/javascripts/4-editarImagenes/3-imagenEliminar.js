window.addEventListener("load", () => {
	// Variables generales
	let eliminar = document.querySelectorAll(".imagenes i.fa-trash-alt");
	let IDs = document.querySelectorAll(".imagenes input[name='id']");

	// Acciones
	for (let i = 0; i < IDs.length; i++) {
		eliminar[i].addEventListener("click", async () => {
			dato_id = IDs[i].value;
			await eliminaImagen(dato_id);
		});
	}
});

// FÓRMULAS *************************************************
const eliminaImagen = async (id) => {
	let entidad = document.querySelector("input[name='entidad']").value;
	let ruta = document.querySelector("input[name='ruta']").value;
	ruta = encodeURIComponent(ruta);
	await fetch("/edicion/elimina-registro/?entidad=" + entidad + "&id=" + id + "&ruta=" + ruta);
	location.reload();
};
