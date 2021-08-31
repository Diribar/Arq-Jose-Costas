window.addEventListener("load", () => {
	// Declarar las variables
	let agregar = document.querySelector("#editar_colores #agregar");
	let color_nuevo = document.querySelector("#editar_colores #color_nuevo");

	// Nombre
	RegExNombre = [/[A-Z ]/i];
	RegEx2 = [/^[A-Z ]+$/i];
	// Código de color
	RegEx1 = [...RegEx1, /[\w\-\.\+\@]/i];
	RegEx2 = [...RegEx2, /#[\da-f]{6}/gi];


	agregar.addEventListener("click", () => {
		color_nuevo.classList.toggle("ocultar");
	});
});