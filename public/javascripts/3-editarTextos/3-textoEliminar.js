window.addEventListener("load", () => {
	// Variables generales
	IDs = document.querySelectorAll("#id");
	eliminar = document.querySelectorAll("i.fa-trash-alt");

	// Acciones
	for (let i = 0; i < IDs.length; i++) {
		eliminar[i].addEventListener("click", () => {
			id = IDs[i].innerHTML;
			funcionEliminar(id);
		});
	}
});

const funcionEliminar = async (id) => {
	entidad = document.querySelector("header div.ocultar").innerHTML;
	await fetch("/editar/eliminarregistro/?entidad=" + entidad + "&id=" + id);
	location.reload();
};
