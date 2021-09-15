window.addEventListener("load", () => {
	// VARIABLES INICIALES
	nombreOK = false;
	nombreYaEnBD = true;
	codigoOK = false;
	codigoYaEnBD = true;
	nombre = document.querySelector("#color_nuevo input[name='nombre']");
	confirmar = document.querySelector("#color_nuevo #confirmar");
	let largoMax = 50;

	// FÓRMULA PARA CONFIRMAR EL AGREGADO DE UN COLOR
	let confirmarSINO = () => {
		if (nombreOK && !nombreYaEnBD && codigoOK && !codigoYaEnBD) {
			confirmar.innerHTML = "Agregar color";
			confirmar.classList.remove("rojo");
			confirmar.classList.add("verde");
		} else {
			confirmar.innerHTML = "Completar";
			confirmar.classList.remove("verde");
			confirmar.classList.add("rojo");
		}
	};

	// TOGGLE FORMULARIO DE AGREGAR COLOR ******************
	agregar = document.querySelector("#editar_colores #agregar");
	color_nuevo = document.querySelector("#editar_colores #color_nuevo");
	agregar.addEventListener("click", () => {
		color_nuevo.classList.toggle("ocultar");
		nombre.focus();
	});

	// VALIDAR NOMBRE **************************************
	// Variables
	nombres = document.querySelectorAll(
		"tr.color_existente input[name='nombre']"
	);
	verNombre = /^[A-Z][a-z áéíóúüñ\d+-]+$/;
	nombre.addEventListener("input", () => {
		// Validar longitud del texto
		verificarLargo(nombre, 20);
		// Validar nombre vs sintaxis y largo
		verNombre.test(nombre.value) && nombre.value.length <= largoMax
			? (nombreOK = true)
			: (nombreOK = false);
		// Validar nombre repetido
		nombreYaEnBD = false;
		for (n of nombres) {
			if (n.value == nombre.value) {
				nombreYaEnBD = true;
				n.classList.add("rojo");
			} else {
				n.classList.remove("rojo");
			}
		}
		// Consecuencias
		nombreYaEnBD || !nombreOK
			? nombre.classList.add("rojo")
			: nombre.classList.remove("rojo");
		confirmarSINO();
	});

	// VALIDAR CÓDIGO **************************************
	// Variables
	codigo = document.querySelector("#color_nuevo input[name='codigo']");
	codigo.addEventListener("input", () => {
		// Validar código vs sintaxis
		// verColHexa = /^#[\dA-Fa-f]{6}$/g;
		// verColRGB = /^RGB\(\d{3}\,\ \d{3}\,\ \d{3}\)$/;
		// verColRGBA = /^RGBA\(\d{3}\,\ \d{3}\,\ \d{3}\, \d.\d\)$/;
		// verColHexa.test(codigo.value) ||
		// verColRGB.test(codigo.value) ||
		// verColRGBA.test(codigo.value) ||
		// codigo.value == "transparent"
		// 	? (codigoOK = true)
		// 	: (codigoOK = false);
		codigoOK = true;
		// Validar código repetido
		codigos = document.querySelectorAll("tr.color_existente #codigo");
		codigoYaEnBD = false;
		for (n of codigos) {
			if (n.innerHTML == codigo.value) {
				codigoYaEnBD = true;
				n.classList.add("rojo");
			} else {
				n.classList.remove("rojo");
			}
		}
		// Consecuencias
		muestra = document.querySelector("#color_nuevo #muestra");
		if (codigoYaEnBD || !codigoOK) {
			codigo.classList.add("rojo");
			muestra.style.backgroundColor = "transparent";
		} else {
			codigo.classList.remove("rojo");
			muestra.style.backgroundColor = codigo.value;
		}
		confirmarSINO();
	});

	// AGREGAR COLOR ****************************************
	confirmar.addEventListener("click", async () => {
		if (nombreOK && codigoOK && !nombreYaEnBD && !codigoYaEnBD) {
			valor1 = nombre.value.toUpperCase();
			valor2 = encodeURIComponent(codigo.value);
			await funcionAgregar(valor1, valor2);
		}
	});
});

// FÓRMULAS *************************************************
let verificarLargo = (campo, largoMax) => {
	campo.addEventListener("keypress", (e) => {
		campo.value.length >= largoMax ? e.preventDefault() : "";
	});
};

let funcionAgregar = async (nombre, codigo) => {
	await fetch("/editar/coloragregar/?nombre=" + nombre + "&codigo=" + codigo);
	location.reload();
};
