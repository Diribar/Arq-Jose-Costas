window.addEventListener("load", () => {
	// VARIABLES INICIALES
	contenido = document.querySelectorAll(
		"#editar_texto #texto_nuevo input[name='contenido']"
	);
	confirmar = document.querySelectorAll(
		"#editar_texto #texto_nuevo #confirmar"
	);
	console.log(confirmar[0]);
	contenidoOK = false;
	agregarTexto = document.querySelectorAll("#editar_texto #agregarTexto");
	textoNuevo = document.querySelectorAll("#editar_texto #texto_nuevo");
	verContenido = /^[a-z \d]+$/;

	// TOGGLE FORMULARIO DE AGREGAR TEXTO ******************
	for (let i = 0; i < agregarTexto.length; i++) {
		agregarTexto[i].addEventListener("click", () => {
			textoNuevo[i].classList.toggle("ocultar");
			contenido[i].focus();
		});
	}

	// Validar contenido vs sintaxis
	for (let i = 0; i < contenido.length; i++) {
		contenido[i].addEventListener("input", () => {
			if (verContenido.test(contenido.value)) {
				console.log(i)
				console.log(confirmar[0]);
				console.log(confirmar[i]);
				confirmar[i].innerHTML = "Agregar texto";
				confirmar[i].classList.remove("rojo");
				confirmar[i].classList.add("verde");
				contenido[i].classList.remove("rojo");
			} else {
				confirmar[i].innerHTML = "Completar";
				confirmar[i].classList.remove("verde");
				confirmar[i].classList.add("rojo");
				contenido[i].classList.add("rojo");
			}
		})
	};

	// AGREGAR COLOR ****************************************
	confirmar = document.querySelector("#texto_nuevo #confirmar");
	confirmar.addEventListener("click", async () => {
		if (contenidoOK && codigoOK && !contenidoYaEnBD && !codigoYaEnBD) {
			valor1 = contenido.value;
			valor2 = encodeURIComponent(codigo.value);
			await agregarColor(valor1, valor2);
		}
	});
});

// FÓRMULAS *************************************************
let agregarColor = async (contenido, codigo) => {
	await fetch(
		"/editar/textoagregar/?contenido=" + contenido + "&codigo=" + codigo
	);
	location.reload();
};
