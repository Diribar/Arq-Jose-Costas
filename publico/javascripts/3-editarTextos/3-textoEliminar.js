window.addEventListener("load", () => {
	// Variables generales
	IDs = document.querySelectorAll("#txt_exist #id");
	eliminarTexto = document.querySelectorAll(
		"#txt_exist i.fa-trash-alt"
	);
	grupos = document.querySelectorAll("#titulo #grupo");
	eliminarGrupo = document.querySelectorAll("#titulo i.fa-trash-alt");

	// Acciones
	// Eliminar texto
	for (let i = 0; i < IDs.length; i++) {
		eliminarTexto[i].addEventListener("click", () => {
			id = IDs[i].innerHTML;
			funcionEliminarTexto(id);
		});
	}
	// Eliminar grupo
	for (let i = 0; i < grupos.length; i++) {
		eliminarGrupo[i].addEventListener("click", () => {
			grupo = grupos[i].innerHTML;
			funcionEliminarGrupo(grupo);
		});
	}
});

// FÓRMULAS *************************************************
const funcionEliminarTexto = async (id) => {
	entidad = document.querySelector("header div.ocultar").innerHTML;
	await fetch("/edicion/elimina-registro/?entidad=" + entidad + "&id=" + id);
	location.reload();
};

const funcionEliminarGrupo = async (grupo) => {
	entidad = document.querySelector("header div.ocultar").innerHTML;
	await fetch(
		"/edicion/elimina-grupo/?entidad=" + entidad + "&grupo=" + grupo
	);
	location.reload();
};
