window.addEventListener("load", () => {
	// VARIABLES INICIALES
	let filaNueva = document.querySelectorAll("#texto_nvo");
	let grupos = document.querySelectorAll("#texto_nvo #grupo");
	let agregarTexto = document.querySelectorAll("#agregarTexto .fa-plus");
	let agregarGrupo = document.querySelector("#agregarGrupo .fa-plus");
	let textosNuevos = document.querySelectorAll(
		"#texto_nvo input[name='cont']"
	);

	// Acciones si se cambia un valor
	for (let i = 0; i < textosNuevos.length; i++) {
		// Validar CONTENIDO: largo y sintaxis
		textosNuevos[i].addEventListener("input", () => {
			OKtexto = validarTexto(textosNuevos[i]);
			funcionConfirmar(OKtexto, i);
		});
		// Agregar texto
		confirmar[i].addEventListener("click", async () => {
			if (OKtexto) {
				contenido = textosNuevos[i].value;
				grupo = grupos[i].innerHTML;
				await funcionAgregar(contenido, grupo);
			}
		});
	}

	// Crear un grupo
	agregarGrupo.addEventListener("click", async () => {
		grupo = parseInt(grupos[grupos.length - 1].innerHTML) + 1;
		await funcionAgregar("", grupo);
	});

	// Toggle input para "agregar texto" *******************
	for (let i = 0; i < agregarTexto.length; i++) {
		agregarTexto[i].addEventListener("click", () => {
			filaNueva[i].classList.toggle("ocultar");
			textosNuevos[i].focus();
		});
	}
});

// FÓRMULAS *************************************************
let validarTexto = (dataEntry) => {
	let entidad = document.querySelector("header div.ocultar").innerHTML;
	let largoMax =
		entidad == "inicio" ||
		entidad == "proyectos" ||
		entidad == "contactanos"
			? 50
			: 200;
	// Validar largo
	dataEntry.addEventListener("keypress", (e) => {
		dataEntry.value.length >= largoMax ? e.preventDefault() : "";
	});
	// Validar sintaxis
	valDataEntry = /^[A-Z][A-Za-z áéíóúüñ\d+-]+$/;
	valDataEntry.test(dataEntry.value) && dataEntry.value.length <= largoMax
		? (dataEntryOK = true)
		: (dataEntryOK = false);
	// Consecuencias
	!dataEntryOK
		? dataEntry.classList.add("rojo")
		: dataEntry.classList.remove("rojo");
	return dataEntryOK;
};

let funcionAgregar = async (contenido, grupo) => {
	let entidad = document.querySelector("header div.ocultar").innerHTML;
	await fetch(
		"/editar/textoagregar/?entidad=" +
			entidad +
			"&contenido=" +
			contenido +
			"&grupo=" +
			grupo
	);
	location.reload();
};

// Fórmula para botón confirmar
let funcionConfirmar = (OKnombre, i) => {
	let confirmar = document.querySelectorAll("#texto_nvo #confirmar");
	if (OKnombre) {
		confirmar[i].innerHTML = "<i class='fas fa-check'></i>";
		confirmar[i].classList.remove("rojo");
		confirmar[i].classList.add("verde");
	} else {
		confirmar[i].innerHTML = "<i class='fas fa-times'></i>";
		confirmar[i].classList.remove("verde");
		confirmar[i].classList.add("rojo");
	}
};
