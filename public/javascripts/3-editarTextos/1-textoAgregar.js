window.addEventListener("load", () => {
	// VARIABLES INICIALES
	verContenido = /^[A-Z][a-z \d]+$/;
	contenido = document.querySelectorAll(
		"#editar_texto #texto_nuevo input[name='contenido']"
	);
	textoNuevo = document.querySelectorAll("#editar_texto #texto_nuevo");
	grupo = document.querySelectorAll("#editar_texto #texto_nuevo #grupo");
	confirmar = document.querySelectorAll(
		"#editar_texto #texto_nuevo #confirmar"
	);
	agregarTexto = document.querySelectorAll("#editar_texto #agregarTexto");

	// TOGGLE FORMULARIO DE AGREGAR TEXTO ******************
	for (let i = 0; i < agregarTexto.length; i++) {
		agregarTexto[i].addEventListener("click", () => {
			textoNuevo[i].classList.toggle("ocultar");
			contenido[i].focus();
		});
	}

	for (let i = 0; i < contenido.length; i++) {
		// Validar contenido vs sintaxis
		contenido[i].addEventListener("input", () => {
			if (verContenido.test(contenido[i].value)) {
				confirmar[i].innerHTML = "<i class='fas fa-check'></i>";
				confirmar[i].classList.remove("rojo");
				confirmar[i].classList.add("verde");
				contenido[i].classList.remove("rojo");
			} else {
				confirmar[i].innerHTML = "<i class='fas fa-times'></i>";
				confirmar[i].classList.remove("verde");
				confirmar[i].classList.add("rojo");
				contenido[i].classList.add("rojo");
			}
		});

		// AGREGAR COLOR ****************************************
		confirmar[i].addEventListener("click", async () => {
			if (confirmar[i].innerHTML == '<i class="fas fa-check"></i>') {
				valor1 = contenido[i].value;
				valor2 = grupo[i].innerHTML;
				await funcionAgregar(valor1, valor2);
			}
		});
	}
});

// FÓRMULAS *************************************************
let funcionAgregar = async (valor1, valor2) => {
	entidad = document.querySelector("header div.ocultar").innerHTML;
	await fetch(
		"/editar/textoagregar/?entidad=" +
			entidad +
			"&contenido=" +
			valor1 +
			"&grupo=" +
			valor2
	);
	location.reload();
};
