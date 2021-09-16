window.addEventListener("load", () => {
	// VARIABLES INICIALES
	IDs = document.querySelectorAll("tbody tr.color_exist #id");

	// Acciones si se cambia un valor
	nombres = document.querySelectorAll(".color_exist input[name='nombre']");
	for (let i = 0; i < nombres.length; i++) {
		// Validar nombre: largo, sintaxis y repetido
		nombres[i].addEventListener("input", () => {
			OKnombre = validarNombre(nombres[i], i);
			funcionConfirmar(OKnombre, true);
		});
		// Acciones cuando se terminó de escribir
		nombres[i].addEventListener("change", () => {
			if (OKnombre) {
				dato_id = IDs[i].innerHTML;
				dato = nombres[i].value;
				funcionModificar(dato_id, dato);
			}
		});
	}
});

// FÓRMULAS *************************************************
let funcionModificar = async (id, dato) => {
	await fetch(
		"/editar/cambiarvalor/?entidad=colores" +
			"&id=" +
			id +
			"&dato=" +
			dato +
			"&campo=nombre"
	);
};
