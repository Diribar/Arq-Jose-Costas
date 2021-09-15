window.addEventListener("load", () => {
	// VARIABLES INICIALES
	let OKnombre = false;
	let OKcodigo = false;
	let largoMax = 20;
	confirmar = document.querySelector("#color_nuevo #confirmar");

	// Validar nombre: largo, sintaxis y repetido
	nombre = document.querySelector("#color_nuevo input[name='nombre']");
	nombre.addEventListener("input", () => {
		OKnombre = validarNombre(nombre, largoMax);
		confirmarSINO(OKnombre, OKcodigo);
	});

	// Validar código repetido
	codigo = document.querySelector("#color_nuevo input[name='codigo']");
	codigo.addEventListener("input", () => {
		OKcodigo = validarCodigo(codigo);
		confirmarSINO(OKnombre, OKcodigo);
	});

	// AGREGAR COLOR ****************************************
	confirmar.addEventListener("click", async () => {
		if (OKnombre && OKcodigo) {
			valor1 = nombre.value;
			valor2 = encodeURIComponent(codigo.value);
			await funcionAgregar(valor1, valor2);
		}
	});

	// Toggle input para "agregar color" *******************
	agregar = document.querySelector("#editar_colores #agregar");
	agregar.addEventListener("click", () => {
		color_nuevo = document.querySelector("#editar_colores #color_nuevo");
		color_nuevo.classList.toggle("ocultar");
		nombre.focus();
	});
});

// FÓRMULAS *************************************************
let validarNombre = (campo, largoMax) => {
	// Validar largo
	campo.addEventListener("keypress", (e) => {
		campo.value.length >= largoMax ? e.preventDefault() : "";
	});
	// Validar sintaxis
	valNombre = /^[A-Z][a-z áéíóúüñ\d+-]+$/;
	valNombre.test(campo.value) && campo.value.length <= largoMax
		? (contenidoOK = true)
		: (contenidoOK = false);
	// Validar repetido
	contenidoYaEnBD = false;
	contenidos = document.querySelectorAll(
		"tr.color_existente input[name='nombre']"
	);
	for (n of contenidos) {
		if (n.value == campo.value) {
			contenidoYaEnBD = true;
			n.classList.add("rojo");
		} else {
			n.classList.remove("rojo");
		}
	}
	// Consecuencias
	contenidoYaEnBD || !contenidoOK
		? campo.classList.add("rojo")
		: campo.classList.remove("rojo");
	confirmarSINO();
	return !contenidoYaEnBD && contenidoOK;
};

let validarCodigo = (campo) => {
	// Validar repetido
	contenidoYaEnBD = false;
	contenidos = document.querySelectorAll("tr.color_existente #codigo");
	for (n of contenidos) {
		if (n.innerHTML == campo.value) {
			contenidoYaEnBD = true;
			n.classList.add("rojo");
		} else {
			n.classList.remove("rojo");
		}
	}
	// Consecuencias
	muestra = document.querySelector("#color_nuevo #muestra");
	if (contenidoYaEnBD) {
		campo.classList.add("rojo");
		muestra.style.backgroundColor = "transparent";
	} else {
		campo.classList.remove("rojo");
		muestra.style.backgroundColor = campo.value;
	}
	return !contenidoYaEnBD;
};

let funcionAgregar = async (nombre, codigo) => {
	await fetch("/editar/coloragregar/?nombre=" + nombre + "&codigo=" + codigo);
	location.reload();
};

// Fórmula para botón confirmar
let confirmarSINO = (OKnombre, OKcodigo) => {
	confirmar = document.querySelector("#color_nuevo #confirmar");
	if (!!OKnombre && OKcodigo) {
		confirmar.innerHTML = "Agregar color";
		confirmar.classList.remove("rojo");
		confirmar.classList.add("verde");
	} else {
		confirmar.innerHTML = "Completar";
		confirmar.classList.remove("verde");
		confirmar.classList.add("rojo");
	}
};
