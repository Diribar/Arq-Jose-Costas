window.addEventListener("load", () => {
	// VARIABLES INICIALES
	confirmar = document.querySelector("#color_nuevo #confirmar");

	// Validar NOMBRE: largo, sintaxis y repetido
	nombre = document.querySelector("#color_nuevo input[name='nombre']");
	OKcodigo = false;
	nombre.addEventListener("input", () => {
		OKnombre = validarNombre(nombre, -1);
		funcionConfirmar(OKnombre, OKcodigo, confirmar);
	});

	// Validar CÓDIGO: repetido
	codigo = document.querySelector("#color_nuevo input[name='codigo']");
	OKnombre = false;
	codigo.addEventListener("input", () => {
		OKcodigo = validarCodigo(codigo);
		funcionConfirmar(OKnombre, OKcodigo, confirmar);
	});

	// AGREGAR COLOR ****************************************
	confirmar.addEventListener("click", async () => {
		if (OKnombre && OKcodigo) {
			datoNombre = nombre.value;
			datoCodigo = encodeURIComponent(codigo.value.toUpperCase());
			await funcionAgregar(datoNombre, datoCodigo);
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
let validarNombre = (dataEntry, i) => {
	let largoMax = 20;
	// Validar largo
	dataEntry.addEventListener("keypress", (e) => {
		dataEntry.value.length >= largoMax ? e.preventDefault() : "";
	});
	// Validar sintaxis
	valDataEntry = /^[A-Z][a-z áéíóúüñ\d+-]+$/;
	valDataEntry.test(dataEntry.value) && dataEntry.value.length <= largoMax
		? (dataEntryOK = true)
		: (dataEntryOK = false);
	// Validar repetido
	dataEntryYaEnBD = false;
	dataEntrys = document.querySelectorAll(
		"tr.color_exist input[name='nombre']"
	);
	for (let j = 0; j < dataEntrys.length; j++) {
		if (dataEntrys[j].value == dataEntry.value && j != i) {
			dataEntryYaEnBD = true;
			dataEntrys[j].classList.add("rojo");
		} else {
			dataEntrys[j].classList.remove("rojo");
		}
	}
	// Consecuencias
	dataEntryYaEnBD || !dataEntryOK
		? dataEntry.classList.add("rojo")
		: dataEntry.classList.remove("rojo");
	return !dataEntryYaEnBD && dataEntryOK;
};

let validarCodigo = (dataEntry) => {
	// Validar repetido
	dataEntryYaEnBD = false;
	dataEntrys = document.querySelectorAll("tr.color_exist #codigo");
	for (n of dataEntrys) {
		if (n.innerHTML == dataEntry.value) {
			dataEntryYaEnBD = true;
			n.classList.add("rojo");
		} else {
			n.classList.remove("rojo");
		}
	}
	// Consecuencias
	muestra = document.querySelector("#color_nuevo #muestra");
	if (dataEntryYaEnBD) {
		dataEntry.classList.add("rojo");
		muestra.style.backgroundColor = "transparent";
	} else {
		dataEntry.classList.remove("rojo");
		muestra.style.backgroundColor = dataEntry.value;
	}
	return !dataEntryYaEnBD;
};

let funcionAgregar = async (nombre, codigo) => {
	await fetch("/editar/coloragregar/?nombre=" + nombre + "&codigo=" + codigo);
	location.reload();
};

// Fórmula para botón confirmar
let funcionConfirmar = (OKnombre, OKcodigo, confirmar) => {
	if (OKnombre && OKcodigo) {
		confirmar.innerHTML = "Agregar color";
		confirmar.classList.remove("rojo");
		confirmar.classList.add("verde");
	} else {
		confirmar.innerHTML = "Completar";
		confirmar.classList.remove("verde");
		confirmar.classList.add("rojo");
	}
};
