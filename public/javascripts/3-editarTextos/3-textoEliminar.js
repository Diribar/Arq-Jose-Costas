window.addEventListener("load", () => {
	// Variables generales
	IDs = document.querySelectorAll("#id");
	eliminar = document.querySelectorAll("i.fa-trash-alt");

	// Acciones
	for (let i = 0; i < IDs.length; i++) {
		eliminar[i].addEventListener("click", () => {
			id = IDs[i].innerHTML;
			funcion(id);
		});
	}
});

const funcion = async (id) => {
	await fetch("/editar/eliminarregistro/?id=" + id);
	location.reload();
};
