window.addEventListener("load", () => {
	// Variables generales
	let color_fondo_fila = document.querySelector(
		"select[name='color_fondo_filas']"
	);
	let color_letras_fila = document.querySelector(
		"select[name='color_letras_filas']"
	);

	// Cambiar los colores
	filas = document.querySelectorAll(".fila");
	for (let i = 0; i < filas.length; i++) {
		cff = document.querySelector(".fila.numero" + i + " .cff").innerHTML;
		clf = document.querySelector(".fila.numero" + i + " .clf").innerHTML;
		document.querySelector(".fila.numero" + i).style.backgroundColor = cff;
		document.querySelector(".fila.numero" + i).style.color = clf;
		document.querySelector(".fila.numero" + i + " strong").style.color =
			clf;
		document.querySelectorAll(
			".fila.numero" + i + " input"
		)[0].style.color = clf;
		document.querySelectorAll(
			".fila.numero" + i + " input"
		)[1].style.color = clf;
		document.querySelectorAll(
			".fila.numero" + i + " select"
		)[0].style.color = clf;
		document.querySelectorAll(
			".fila.numero" + i + " select"
		)[1].style.color = clf;
		opciones = document.querySelectorAll(".fila.numero" + i + " option");
		for (opcion of opciones) {
			opcion.style.backgroundColor = cff;
		}
	}

});