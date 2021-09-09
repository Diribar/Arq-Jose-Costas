window.addEventListener("load", () => {
	// VARIABLES INICIALES
	verContenido = /^[A-Z][A-Za-z áéíóúü\d]+$/;
	textoNuevo = document.querySelectorAll("#texto_nuevo");
	contenidos = document.querySelectorAll(
		"#texto_nuevo input[name='contenido']"
	);
	grupos = document.querySelectorAll("#texto_nuevo #grupo");
	confirmar = document.querySelectorAll("#texto_nuevo #confirmar");
	agregarTexto = document.querySelectorAll("#agregarTexto .fa-plus");
	agregarGrupo = document.querySelector("#agregarGrupo .fa-plus");

	// TOGGLE FORMULARIO DE AGREGAR TEXTO ******************
	for (let i = 0; i < agregarTexto.length; i++) {
		agregarTexto[i].addEventListener("click", () => {
			textoNuevo[i].classList.toggle("ocultar");
			contenidos[i].focus();
		});
	}

	// Acciones si se cambia un valor
	for (let i = 0; i < contenidos.length; i++) {
		// Acciones mientras se escribe
		contenidos[i].addEventListener("input", () => {
			// Validar contenido vs sintaxis
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
		// Agregar texto
		confirmar[i].addEventListener("click", async () => {
			if (confirmar[i].innerHTML == '<i class="fas fa-check"></i>') {
				contenido = contenidos[i].value;
				grupo = grupos[i].innerHTML;
				await funcionAgregar(contenido, grupo);
			}
		});
	}

	// Crear un grupo
	agregarGrupo.addEventListener("click", async () => {
		grupo = parseInt(grupos[grupos.length-1].innerHTML) + 1;
		await funcionAgregar("", grupo);
	});
});

// FÓRMULAS *************************************************
let funcionAgregar = async (contenido, grupo) => {
	entidad = document.querySelector("header div.ocultar").innerHTML;
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
