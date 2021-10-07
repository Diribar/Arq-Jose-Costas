window.addEventListener("load", () => {
	// Variables generales
	let cff = document.querySelectorAll("#cff");
	let clf = document.querySelectorAll("#clf");
	let cbf = document.querySelectorAll("#cbf");
	let filas = document.querySelectorAll(".filas");
	let colorFondo = document.querySelector("#colorFondo").innerHTML
	// Datos de cada fila
	let IDs = document.querySelectorAll(".filas #id");
	let cont = document.querySelectorAll(".filas input[name='cont']");

	// Cambiar los colores de las filas
	for (let i = 0; i < cont.length; i++) {
		id = IDs[i].innerHTML;
		// Colores en las filas
		filas[i].style.backgroundColor = colorFondo;
		cont[i].style.backgroundColor = cff[i].innerHTML;
		cont[i].style.color = clf[i].innerHTML;
		cont[i].style.borderColor = cbf[i].innerHTML;
	}
});
