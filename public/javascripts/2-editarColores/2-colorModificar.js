window.addEventListener("load", () => {
	// VARIABLES INICIALES
	IDs = document.querySelectorAll("tbody tr.color_existente #id");
	nombres = document.querySelectorAll(
		"tr.color_existente input[name='nombre']"
	);
	verNombre = /^[A-Z][a-z \d+-]+$/;

	// Acciones si se cambia un valor
	for (let i = 0; i < nombres.length; i++) {
		// Acciones mientras se escribe
		nombres[i].addEventListener("input", () => {
			// Validar nombre vs sintaxis
			nombreOK = false;
			verNombre.test(nombres[i].value)
				? (nombreOK = true)
				: (nombreOK = false);
			// Validar nombre repetido
			nombreYaEnBD = false;
			for (let j = 0; j < nombres.length; j++) {
				if (nombres[j].value == nombres[i].value && j != i) {
					nombreYaEnBD = true;
					nombres[j].classList.add("rojo");
				} else {
					nombres[j].classList.remove("rojo");
				}
			}
			// Consecuencias
			nombreYaEnBD || !nombreOK
				? nombres[i].classList.add("rojo")
				: nombres[i].classList.remove("rojo");
		});
		// Acciones cuando se terminó de escribir
		nombres[i].addEventListener("change", () => {
			if (nombreOK && !nombreYaEnBD) {
				dato_id = IDs[i].innerHTML;
				dato = nombres[i].value;
				cambiarValor(dato_id, dato);
			}
		});
	}
});

const cambiarValor = async (id, dato) => {
	await fetch(
		"/editar/cambiarvalores/?entidad=colores" +
			"&id=" +
			id +
			"&dato=" +
			dato +
			"&campo=nombre"
	);
};
