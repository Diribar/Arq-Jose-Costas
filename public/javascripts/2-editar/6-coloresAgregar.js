window.addEventListener("load", () => {
	nombreTF = false;
	codigoTF = false;

	// Toggle formulario de agregar color
	agregar = document.querySelector("#editar_colores #agregar");
	color_nuevo = document.querySelector("#editar_colores #color_nuevo");
	agregar.addEventListener("click", () => {
		color_nuevo.classList.toggle("ocultar");
		nombre.focus();
	});

	// Validar nombre
	nombre = document.querySelector("#color_nuevo input[name='nombre']");
	verNombre = /^[A-Z][a-z \d+-]+$/;
	nombre.addEventListener("input", () => {
		nombre.classList.add("rojo");
		if (verNombre.test(nombre.value) || nombre.value == "") {
			nombre.classList.remove("rojo");
			nombreTF = true;
			nombreTF && codigoTF ? confirmarSI() : "";
		} else {
			nombre.classList.add("rojo");
			nombreTF = false;
			confirmarNO();
		}
	});

	// Validar código
	codigo = document.querySelector("#color_nuevo input[name='codigo']");
	muestra = document.querySelector("#color_nuevo #muestra");
	verColHexa = /#[\dA-F]{6}/g;
	verColRGB = /RGB\(\d{3}\,\ \d{3}\,\ \d{3}\)/;
	verColRGBA = /RGBA\(\d{3}\,\ \d{3}\,\ \d{3}\, \d.\d\)/;
	codigo.addEventListener("input", () => {
		if (
			verColHexa.test(codigo.value) ||
			verColRGB.test(codigo.value) ||
			verColRGBA.test(codigo.value) ||
			codigo.value == "transparent"
		) {
			codigo.classList.remove("rojo");
			muestra.style.backgroundColor = codigo.value;
			codigoTF = true;
			nombreTF && codigoTF ? confirmarSI() : "";
		} else {
			codigo.classList.add("rojo");
			muestra.style.backgroundColor = "transparent";
			codigoTF = false;
			confirmarNO();
		}
	});

	// Agregar color
	confirmar = document.querySelector("#color_nuevo #confirmar");
	confirmar.addEventListener("click", async () => {
		if (nombreTF && codigoTF) {
			valor1 = nombre.value;
			valor2 = encodeURIComponent(codigo.value);
			await agregarColor(valor1, valor2);
		}
	});
});

let confirmarSI = () => {
	confirmar.innerHTML = "Agregar color";
	confirmar.classList.remove("rojo");
	confirmar.classList.add("verde");
};

let confirmarNO = () => {
	confirmar.innerHTML = "Completar";
	confirmar.classList.remove("verde");
	confirmar.classList.add("rojo");
};

let agregarColor = async (nombre, codigo) => {
	await fetch(
		"/editar/agregar_color/?nombre=" + nombre + "&codigo=" + codigo
	);
	location.reload();
};
