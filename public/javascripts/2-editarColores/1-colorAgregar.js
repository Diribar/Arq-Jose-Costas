window.addEventListener("load", () => {
	// VARIABLES INICIALES
	nombreOK = false;
	nombreYaEnBD = true;
	codigoOK = false;
	codigoYaEnBD = true;
	nombre = document.querySelector("#color_nuevo input[name='nombre']");
	confirmar = document.querySelector("#color_nuevo #confirmar");

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
	verNombre = /^[A-Z][a-z áéíóúü\d+-]+$/;
	nombre.addEventListener("input", () => {
		// Validar nombre vs sintaxis
		verNombre.test(nombre.value) ? (nombreOK = true) : (nombreOK = false);
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
	codigos = document.querySelectorAll("tr.color_existente #codigo");
	verColHexa = /^#[\dA-Fa-f]{6}$/g;
	verColRGB = /^RGB\(\d{3}\,\ \d{3}\,\ \d{3}\)$/;
	verColRGBA = /^RGBA\(\d{3}\,\ \d{3}\,\ \d{3}\, \d.\d\)$/;
	muestra = document.querySelector("#color_nuevo #muestra");
	codigo.addEventListener("input", () => {
		// Validar código vs sintaxis
		verColHexa.test(codigo.value) ||
		verColRGB.test(codigo.value) ||
		verColRGBA.test(codigo.value) ||
		codigo.value == "transparent"
			? (codigoOK = true)
			: (codigoOK = false);
		// Validar código repetido
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
let funcionAgregar = async (nombre, codigo) => {
	await fetch("/editar/coloragregar/?nombre=" + nombre + "&codigo=" + codigo);
	location.reload();
};
